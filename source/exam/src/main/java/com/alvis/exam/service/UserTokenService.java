package com.alvis.exam.service;

import com.alvis.exam.domain.User;
import com.alvis.exam.domain.UserEventLog;
import com.alvis.exam.domain.UserToken;
import com.alvis.exam.viewmodel.admin.user.UserEventPageRequestVM;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface UserTokenService extends BaseService<UserToken> {

    UserToken bind(User user);

    UserToken checkBind(String openId);

    UserToken getToken(String token);

    UserToken insertUserToken(User user);

    void unBind(UserToken userToken);
}
