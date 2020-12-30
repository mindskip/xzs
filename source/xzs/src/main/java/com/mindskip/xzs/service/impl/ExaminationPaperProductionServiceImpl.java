package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.domain.Question;
import com.mindskip.xzs.repository.BaseMapper;
import com.mindskip.xzs.repository.QuestionMapper;
import com.mindskip.xzs.service.ExaminationPaperProductionService;
import com.mindskip.xzs.viewmodel.student.exam.EachPaperProductionVM;
import com.mindskip.xzs.viewmodel.student.exam.ExaminationProductionVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
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

        Integer difficult = examinationProductionVM.getDifficult();
        Integer industryId = examinationProductionVM.getIndustryId();

        List<Integer> skillIds = examinationProductionVM.getSkillIds();
        @NotNull int questionNumber = examinationProductionVM.getQuestionNumber();

        List<Integer> integerList = new ArrayList<>();
        int size = skillIds.size();


        if (size < 1) {
            size = 1;
        }

        int remainder = questionNumber % size;
        int each = questionNumber / size;

        for (int i = 0; i < size; i++) {
            integerList.add(each);
        }

        if (remainder > 0) {
            Integer first = integerList.get(0);
            int i = first + remainder;
            integerList.set(0, i);
        }
        examinationProductionVM.setEachNumber(integerList);
        List<EachPaperProductionVM> eachList = new ArrayList<>();
        if (size > 0) {
            for (int i = 0; i < size; i++) {
                EachPaperProductionVM eachPaperProductionVM = new EachPaperProductionVM(difficult, industryId, skillIds.get(i), integerList.get(i));
                eachList.add(eachPaperProductionVM);
            }
        }

        examinationProductionVM.setEachList(eachList);
        return questionMapper.selectQuestionsByQuestionsNumber(examinationProductionVM.getEachList());
    }


    public List<Question> paper(){
        List<Question> questions1 = questionMapper.selectAllSkills();
        List<Question> questions2 = questionMapper.selectAllIndustry();
        questions1.addAll(questions2);
        return questions1;
    }
}
