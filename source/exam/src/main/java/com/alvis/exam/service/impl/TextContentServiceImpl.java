package com.alvis.exam.service.impl;

import com.alvis.exam.domain.TextContent;
import com.alvis.exam.repository.TextContentMapper;
import com.alvis.exam.service.TextContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class TextContentServiceImpl extends BaseServiceImpl<TextContent> implements TextContentService {

    private final static String CACHE_NAME = "TextContent";
    private final TextContentMapper textContentMapper;

    @Autowired
    public TextContentServiceImpl(TextContentMapper textContentMapper) {
        super(textContentMapper);
        this.textContentMapper = textContentMapper;
    }

    @Override
    @Cacheable(value = CACHE_NAME, key = "#id")
    public TextContent selectById(Integer id) {
        return super.selectById(id);
    }

    @Override
    public int insertByFilter(TextContent record) {
        return super.insertByFilter(record);
    }

    @Override
    @CacheEvict(value = CACHE_NAME, key = "#record.id")
    public int updateByIdFilter(TextContent record) {
        return super.updateByIdFilter(record);
    }
}
