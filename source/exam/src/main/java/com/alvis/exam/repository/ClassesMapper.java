package com.alvis.exam.repository;

import com.alvis.exam.domain.Classes;
import com.alvis.exam.viewmodel.teacher.classes.ClassesPageRequestVM;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ClassesMapper extends BaseMapper<Classes> {
    int deleteByPrimaryKey(Integer id);

    int insert(Classes record);

    int insertSelective(Classes record);

    Classes selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Classes record);

    int updateByPrimaryKey(Classes record);

    List<Classes> page(ClassesPageRequestVM requestVM);
}
