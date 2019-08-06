package com.alvis.exam.service.impl;

import com.alvis.exam.domain.Knowledge;
import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.repository.KnowledgeMapper;
import com.alvis.exam.service.KnowledgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KnowledgeServiceImpl extends BaseServiceImpl<Knowledge> implements KnowledgeService {

    private final KnowledgeMapper knowledgeMapper;

    @Autowired
    public KnowledgeServiceImpl(KnowledgeMapper knowledgeMapper) {
        super(knowledgeMapper);
        this.knowledgeMapper = knowledgeMapper;
    }


}
