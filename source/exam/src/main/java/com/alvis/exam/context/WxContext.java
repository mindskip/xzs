package com.alvis.exam.context;

import com.alvis.exam.domain.User;
import com.alvis.exam.domain.UserToken;
import org.springframework.stereotype.Component;

@Component
public class WxContext {
    private final static ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    private final static ThreadLocal<UserToken> USER_TOKEN_THREAD_LOCAL = new ThreadLocal<>();

    public void setContext(User user, UserToken userToken) {
        USER_THREAD_LOCAL.set(user);
        USER_TOKEN_THREAD_LOCAL.set(userToken);
    }

    public User getCurrentUser() {
        return USER_THREAD_LOCAL.get();
    }

    public UserToken getCurrentUserToken() {
        return USER_TOKEN_THREAD_LOCAL.get();
    }
}
