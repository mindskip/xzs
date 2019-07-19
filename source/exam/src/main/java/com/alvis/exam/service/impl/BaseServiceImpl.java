package com.alvis.exam.service.impl;

import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.service.BaseService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public abstract class BaseServiceImpl<T> implements BaseService<T> {

    BaseMapper<T> baseMapper;

    @Override
    public int deleteById(Integer id) {
        return baseMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(T record) {
        return baseMapper.insert(record);
    }

    @Override
    public int insertByFilter(T record) {
        return baseMapper.insertSelective(record);
    }

    @Override
    public T selectById(Integer id) {
        return baseMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByIdFilter(T record) {
        return baseMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateById(T record) {
        return baseMapper.updateByPrimaryKey(record);
    }
}
