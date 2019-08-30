package com.alvis.exam.controller.wx;

import com.alvis.exam.configuration.spring.wx.TokenHandlerInterceptor;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.UserToken;
import com.alvis.exam.utility.ModelMapperSingle;
import org.modelmapper.ModelMapper;

public class BaseWXApiController {
    protected final static ModelMapper modelMapper = ModelMapperSingle.Instance();

    protected User getCurrentUser() {
        return TokenHandlerInterceptor.getUserThreadLocal().get();
    }

    protected UserToken getUserToken() {
        return TokenHandlerInterceptor.getUserTokenThreadLocal().get();
    }
}
