package com.alvis.exam.configuration.spring.wx;

import com.alvis.exam.base.SystemCode;
import com.alvis.exam.configuration.spring.security.RestUtil;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.UserToken;
import com.alvis.exam.service.UserService;
import com.alvis.exam.service.UserTokenService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component

public class TokenHandlerInterceptor implements HandlerInterceptor {
    private static ThreadLocal<User> userThreadLocal = new ThreadLocal<>();
    private final UserTokenService userTokenService;
    private final UserService userService;

    @Autowired
    public TokenHandlerInterceptor(UserTokenService userTokenService, UserService userService) {
        this.userTokenService = userTokenService;
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("token");
        if (StringUtils.isEmpty(token)) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }
        UserToken userToken = userTokenService.getToken(token);
        if (null == userToken) {
            RestUtil.response(response, SystemCode.UNAUTHORIZED);
            return false;
        }
        User user = userService.getUserByUserName(userToken.getUserName());
        userThreadLocal.set(user);
        return true;
    }

    public static ThreadLocal<User> getUserThreadLocal() {
        return userThreadLocal;
    }
}
