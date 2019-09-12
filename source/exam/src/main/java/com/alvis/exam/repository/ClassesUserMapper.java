package com.alvis.exam.repository;

import com.alvis.exam.domain.ClassesUser;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ClassesUserMapper extends BaseMapper<ClassesUser> {
    int deleteByPrimaryKey(Integer id);

    int insert(ClassesUser record);

    int insertSelective(ClassesUser record);

    ClassesUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ClassesUser record);

    int updateByPrimaryKey(ClassesUser record);
}
