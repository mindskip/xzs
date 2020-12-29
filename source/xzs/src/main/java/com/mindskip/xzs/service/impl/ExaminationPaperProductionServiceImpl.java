package com.mindskip.xzs.service.impl;

import com.github.pagehelper.PageHelper;
import com.mindskip.xzs.domain.Question;
import com.mindskip.xzs.repository.BaseMapper;
import com.mindskip.xzs.repository.QuestionMapper;
import com.mindskip.xzs.service.ExaminationPaperProductionService;
import com.mindskip.xzs.viewmodel.student.exam.ExaminationProductionVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ExaminationPaperProductionServiceImpl extends BaseServiceImpl<Question> implements ExaminationPaperProductionService {

    private final QuestionMapper questionMapper;

    @Autowired
    public ExaminationPaperProductionServiceImpl(BaseMapper<Question> baseMapper, QuestionMapper questionMapper) {
        super(baseMapper);
        this.questionMapper = questionMapper;
    }


    @Override
    public List<Question> generation(ExaminationProductionVM examinationProductionVM) {

        return PageHelper.startPage(examinationProductionVM.getPageIndex(),examinationProductionVM.getPageSize()).doSelectPage(()->
                questionMapper.selectQuestionsByQuestionsNumber(examinationProductionVM));
    }
}
