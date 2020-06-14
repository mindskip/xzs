package com.alvis.exam.service.impl;

import com.alvis.exam.domain.Classes;
import com.alvis.exam.repository.ClassesMapper;
import com.alvis.exam.repository.ClassesUserMapper;
import com.alvis.exam.service.ClassesService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClassesServiceImpl implements ClassesService {

    private final ClassesMapper classesMapper;
    private final ClassesUserMapper classesUserMapper;

    @Override
    public Classes selectById(Integer id) {
        return classesMapper.selectByPrimaryKey(id);
    }

    @Override
    public int insertByFilter(Classes record) {
        return classesMapper.insertSelective(record);
    }

    @Override
    public int updateByIdFilter(Classes record) {
        return classesMapper.updateByPrimaryKeySelective(record);
    }

}
