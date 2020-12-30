package com.mindskip.xzs.service;

import com.mindskip.xzs.domain.Question;
import com.mindskip.xzs.viewmodel.student.exam.ExaminationProductionVM;

import java.util.List;

public interface ExaminationPaperProductionService extends BaseService<Question>{


    List<Question> generation(ExaminationProductionVM examinationProductionVM);
    List<Question> paper();
}
