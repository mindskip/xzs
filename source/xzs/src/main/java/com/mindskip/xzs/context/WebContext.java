package com.mindskip.xzs.context;

import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@Component
public class WebContext {
    private static final String USER_ATTRIBUTES = "USER_ATTRIBUTES";
    private final UserService userService;

    @Autowired
    public WebContext(UserService userService) {
        this.userService = userService;
    }


    public void setCurrentUser(User user) {
        RequestContextHolder.currentRequestAttributes().setAttribute(USER_ATTRIBUTES, user, RequestAttributes.SCOPE_REQUEST);
    }

    public User getCurrentUser() {
        User user = (User) RequestContextHolder.currentRequestAttributes().getAttribute(USER_ATTRIBUTES, RequestAttributes.SCOPE_REQUEST);
        if (null != user) {
            return user;
        } else {
            org.springframework.security.core.userdetails.User springUser = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (null == springUser) {
                return null;
            }
            user = userService.getUserByUserName(springUser.getUsername());
            if (null != user) {
                setCurrentUser(user);
            }
            return user;
        }
    }
}
