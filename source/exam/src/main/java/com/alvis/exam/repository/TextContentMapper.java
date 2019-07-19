package com.alvis.exam.repository;

import com.alvis.exam.domain.TextContent;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TextContentMapper extends BaseMapper<TextContent> {
    int deleteByPrimaryKey(Integer id);

    int insert(TextContent record);

    int insertSelective(TextContent record);

    TextContent selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TextContent record);

    int updateByPrimaryKey(TextContent record);
}
