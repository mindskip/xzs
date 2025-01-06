package com.mindskip.xzs.configuration.spring.wx;

import com.mindskip.xzs.base.SystemCode;
import com.mindskip.xzs.configuration.spring.security.RestUtil;
import com.mindskip.xzs.context.WxContext;
import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.domain.UserToken;
import com.mindskip.xzs.service.UserService;
import com.mindskip.xzs.service.UserTokenService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * @version 3.5.0
 * @description: The type Token handler interceptor.
 * Copyright (C), 2020-2025, 武汉思维跳跃科技有限公司
 * @date 2021/12/25 9:45
 */
@Component
public class TokenHandlerInterceptor implements HandlerInterceptor {

    private final UserTokenService userTokenService;
    private final UserService userService;
    private final WxContext wxContext;

    /**
     * Instantiates a new Token handler interceptor.
     *
     * @param userTokenService the user token service
     * @param userService      the user service
     * @param wxContext        the wx context
     */
    @Autowired
    public TokenHandlerInterceptor(UserTokenService userTokenService, UserService userService, WxContext wxContext) {
        this.userTokenService = userTokenService;
        this.userService = userService;
        this.wxContext = wxContext;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("token");
        if (StringUtils.isEmpty(token)) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }

        if (StringUtils.isBlank(token)) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }

        if (token.length() != 36) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }

        UserToken userToken = userTokenService.getToken(token);
        if (null == userToken) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }

        Date now = new Date();
        User user = userService.getUserByUserName(userToken.getUserName());
        if (now.before(userToken.getEndTime())) {
            wxContext.setContext(user,userToken);
            return true;
        } else {   //refresh token
            UserToken refreshToken = userTokenService.insertUserToken(user);
            RestUtil.response(response, SystemCode.AccessTokenError.getCode(), SystemCode.AccessTokenError.getMessage(), refreshToken.getToken());
            return false;
        }
    }
}
