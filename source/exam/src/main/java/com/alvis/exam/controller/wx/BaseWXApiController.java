package com.alvis.exam.controller.wx;

import com.alvis.exam.configuration.spring.wx.TokenHandlerInterceptor;
import com.alvis.exam.context.WxContext;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.UserToken;
import com.alvis.exam.utility.ModelMapperSingle;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class BaseWXApiController {
    protected final static ModelMapper modelMapper = ModelMapperSingle.Instance();
    @Autowired
    private WxContext wxContext;

    protected User getCurrentUser() {
        return wxContext.getCurrentUser();
    }

    protected UserToken getUserToken() {
        return wxContext.getCurrentUserToken();
    }
}
