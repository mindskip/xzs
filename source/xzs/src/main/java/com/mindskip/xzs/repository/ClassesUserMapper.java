package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.ClassesUser;
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
