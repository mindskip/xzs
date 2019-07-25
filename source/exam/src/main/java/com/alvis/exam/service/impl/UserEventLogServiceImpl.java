package com.alvis.exam.service.impl;

import com.alvis.exam.domain.UserEventLog;
import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.service.UserEventLogService;
import org.springframework.stereotype.Service;

@Service
public class UserEventLogServiceImpl extends BaseServiceImpl<UserEventLog> implements UserEventLogService {

    public UserEventLogServiceImpl(BaseMapper<UserEventLog> baseMapper) {
        super(baseMapper);
    }
}
