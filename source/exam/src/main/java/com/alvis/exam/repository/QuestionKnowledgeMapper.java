package com.alvis.exam.repository;

import com.alvis.exam.domain.QuestionKnowledge;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface QuestionKnowledgeMapper extends BaseMapper<QuestionKnowledge> {
    int deleteByPrimaryKey(Integer id);

    int insert(QuestionKnowledge record);

    int insertSelective(QuestionKnowledge record);

    QuestionKnowledge selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(QuestionKnowledge record);

    int updateByPrimaryKey(QuestionKnowledge record);
}
