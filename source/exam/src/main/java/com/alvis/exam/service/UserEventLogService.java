package com.alvis.exam.service;

import com.alvis.exam.domain.UserEventLog;

import java.util.List;

public interface UserEventLogService extends BaseService<UserEventLog> {

    List<UserEventLog> getUserEventLogByUserId(Integer id);

}
