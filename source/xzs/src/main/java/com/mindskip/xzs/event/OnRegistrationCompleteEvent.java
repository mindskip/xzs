package com.mindskip.xzs.event;

import com.mindskip.xzs.domain.User;
import org.springframework.context.ApplicationEvent;

/**
 * @author alvis
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