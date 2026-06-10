package com.mindskip.xzs.event;

import com.mindskip.xzs.domain.User;
import org.junit.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import static org.junit.Assert.assertNull;

public class OnRegistrationCompleteEventSerializationTest {

    @Test
    public void dedicatedUserFieldIsNotSerialized() throws Exception {
        User user = new User();
        user.setId(1);
        user.setUserName("alice");
        user.setPassword("secret-password");

        OnRegistrationCompleteEvent event = new OnRegistrationCompleteEvent(user);

        byte[] bytes;
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ObjectOutputStream oos = new ObjectOutputStream(baos)) {
            oos.writeObject(event);
            bytes = baos.toByteArray();
        }

        OnRegistrationCompleteEvent deserialized;
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(bytes))) {
            deserialized = (OnRegistrationCompleteEvent) ois.readObject();
        }

        assertNull("transient user field should not survive serialization", deserialized.getUser());
    }
}
