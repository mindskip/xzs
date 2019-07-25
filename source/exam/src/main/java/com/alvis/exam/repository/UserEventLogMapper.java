package com.alvis.exam.repository;

import com.alvis.exam.domain.UserEventLog;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserEventLogMapper extends BaseMapper<UserEventLog> {

    int deleteByPrimaryKey(Integer id);

    int insert(UserEventLog record);

    int insertSelective(UserEventLog record);

    UserEventLog selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserEventLog record);

    int updateByPrimaryKey(UserEventLog record);

    List<UserEventLog> getUserEventLogByUserId(Integer id);
}
