package com.mindskip.xzs.context;

import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.domain.UserToken;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@Component
public class WxContext {

    private static final String USER_ATTRIBUTES = "USER_ATTRIBUTES";
    private static final String USER_TOKEN_ATTRIBUTES = "USER_TOKEN_ATTRIBUTES";


    public void setContext(User user, UserToken userToken) {
        RequestContextHolder.currentRequestAttributes().setAttribute(USER_ATTRIBUTES, user, RequestAttributes.SCOPE_REQUEST);
        RequestContextHolder.currentRequestAttributes().setAttribute(USER_TOKEN_ATTRIBUTES, userToken, RequestAttributes.SCOPE_REQUEST);
    }

    public User getCurrentUser() {
        return (User) RequestContextHolder.currentRequestAttributes().getAttribute(USER_ATTRIBUTES, RequestAttributes.SCOPE_REQUEST);
    }

    public UserToken getCurrentUserToken() {
        return (UserToken) RequestContextHolder.currentRequestAttributes().getAttribute(USER_TOKEN_ATTRIBUTES, RequestAttributes.SCOPE_REQUEST);
    }
}
