package com.mindskip.xzs.controller.wx;

import com.mindskip.xzs.context.WxContext;
import com.mindskip.xzs.domain.User;
import com.mindskip.xzs.domain.UserToken;
import com.mindskip.xzs.utility.ModelMapperSingle;
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
