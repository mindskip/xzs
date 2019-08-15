package com.alvis.exam.controller.wx;

import com.alvis.exam.configuration.spring.security.AuthUser;
import com.alvis.exam.domain.User;
import com.alvis.exam.utility.ModelMapperSingle;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;

public class BaseWXApiController {
    protected final static ModelMapper modelMapper = ModelMapperSingle.Instance();
    private ThreadLocal<User> threadLocal = new ThreadLocal<>();

    protected User getCurrentUser() {
        return threadLocal.get();
    }
}
