package com.mindskip.xzs.event;

import com.mindskip.xzs.domain.User;
import org.springframework.context.ApplicationEvent;

/**
 * @author 武汉思维跳跃科技有限公司
 */
public class OnRegistrationCompleteEvent extends ApplicationEvent {


    private final User user;


    public OnRegistrationCompleteEvent(final User user) {
        super(user);
        this.user = user;
    }

    public User getUser() {
        return user;
    }

}