package com.mindskip.xzs.configuration.spring.security;

import com.mindskip.xzs.base.SystemCode;
import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.domain.UserEventLog;
import com.mindskip.xzs.event.UserEvent;
import com.mindskip.xzs.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * 用户登出
 *
 * @author alvis
 */
@Component
@AllArgsConstructor
public class RestLogoutSuccessHandler extends SimpleUrlLogoutSuccessHandler {

    private final ApplicationEventPublisher eventPublisher;
    private final UserService userService;

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        org.springframework.security.core.userdetails.User springUser = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
        if (null != springUser) {
            User user = userService.getUserByUserName(springUser.getUsername());
            UserEventLog userEventLog = new UserEventLog(user.getId(), user.getUserName(), user.getRealName(), new Date());
            userEventLog.setContent(user.getUserName() + " 登出了学之思考试系统");
            eventPublisher.publishEvent(new UserEvent(userEventLog));
        }
        RestUtil.response(response, SystemCode.OK);
    }
}
