package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.domain.Classes;
import com.mindskip.xzs.repository.ClassesMapper;
import com.mindskip.xzs.repository.ClassesUserMapper;
import com.mindskip.xzs.service.ClassesService;
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
