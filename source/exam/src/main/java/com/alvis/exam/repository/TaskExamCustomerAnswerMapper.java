package com.alvis.exam.repository;

import com.alvis.exam.domain.TaskExamCustomerAnswer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskExamCustomerAnswerMapper extends BaseMapper<TaskExamCustomerAnswer> {
    int deleteByPrimaryKey(Integer id);

    int insert(TaskExamCustomerAnswer record);

    int insertSelective(TaskExamCustomerAnswer record);

    TaskExamCustomerAnswer selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TaskExamCustomerAnswer record);

    int updateByPrimaryKey(TaskExamCustomerAnswer record);

    TaskExamCustomerAnswer getByTUid(@Param("tid") Integer tid, @Param("uid") Integer uid);
}
