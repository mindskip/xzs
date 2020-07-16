package com.mindskip.xzs.configuration.spring.security;

import com.mindskip.xzs.base.SystemCode;
import com.mindskip.xzs.domain.UserEventLog;
import com.mindskip.xzs.event.UserEvent;
import com.mindskip.xzs.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

/**
 * 登录成功返回
 *
 * @author alvis
 */
@Component
@AllArgsConstructor
public class RestAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final ApplicationEventPublisher eventPublisher;
    private final UserService userService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        User springUser = (User) authentication.getPrincipal();
        com.mindskip.xzs.domain.User user = userService.getUserByUserName(springUser.getUsername());
        UserEventLog userEventLog = new UserEventLog(user.getId(), user.getUserName(), user.getRealName(), new Date());
        userEventLog.setContent(user.getUserName() + " 登录了学之思考试系统");
        eventPublisher.publishEvent(new UserEvent(userEventLog));
        com.mindskip.xzs.domain.User newUser = new com.mindskip.xzs.domain.User();
        newUser.setUserName(user.getUserName());
        newUser.setImagePath(user.getImagePath());
        RestUtil.response(response, SystemCode.OK.getCode(), SystemCode.OK.getMessage(), newUser);
    }
}
