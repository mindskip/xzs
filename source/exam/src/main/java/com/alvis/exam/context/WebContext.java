package com.alvis.exam.context;

import com.alvis.exam.domain.User;
import com.alvis.exam.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class WebContext {

    private final static ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    private final UserService userService;


    public void setCurrentUser(User user) {
        USER_THREAD_LOCAL.set(user);
    }

    public User getCurrentUser() {
        User user = USER_THREAD_LOCAL.get();
        if (null != user) {
            return user;
        } else {
            org.springframework.security.core.userdetails.User springUser = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (null == springUser) {
                return null;
            }
            user = userService.getUserByUserName(springUser.getUsername());
            USER_THREAD_LOCAL.set(user);
            return user;
        }
    }

    /**
     * 删除当前线程的工作单元，建议放在finally中调用，避免内存泄漏
     */
    public  void clean() {
        USER_THREAD_LOCAL.remove();
    }
}
