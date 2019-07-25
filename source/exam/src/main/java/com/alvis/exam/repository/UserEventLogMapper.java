package com.alvis.exam.repository;

import com.alvis.exam.domain.UserEventLog;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserEventLogMapper extends BaseMapper<UserEventLog> {

    int deleteByPrimaryKey(Integer id);

    int insert(UserEventLog record);

    int insertSelective(UserEventLog record);

    UserEventLog selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserEventLog record);

    int updateByPrimaryKey(UserEventLog record);
}
