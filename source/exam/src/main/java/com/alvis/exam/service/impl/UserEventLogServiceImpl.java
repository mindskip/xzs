package com.alvis.exam.service.impl;

import com.alvis.exam.domain.UserEventLog;
import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.repository.UserEventLogMapper;
import com.alvis.exam.service.UserEventLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserEventLogServiceImpl extends BaseServiceImpl<UserEventLog> implements UserEventLogService {

    private final UserEventLogMapper userEventLogMapper;


    @Autowired
    public UserEventLogServiceImpl(BaseMapper<UserEventLog> baseMapper, UserEventLogMapper userEventLogMapper) {
        super(baseMapper);
        this.userEventLogMapper = userEventLogMapper;
    }

    @Override
    public List<UserEventLog> getUserEventLogByUserId(Integer id) {
        return userEventLogMapper.getUserEventLogByUserId(id);
    }
}
