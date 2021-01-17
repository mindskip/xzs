package com.mindskip.xzs.listener;

import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.event.OnRegistrationCompleteEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;


/**
 * @author 武汉思维跳跃科技有限公司
 */
@Component
public class EmailSendListener implements ApplicationListener<OnRegistrationCompleteEvent> {

    @Override
    @NonNull
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        User user = event.getUser();
        System.out.println("User register Email sender :" + user.getUserName());
    }
}
