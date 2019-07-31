package com.alvis.exam.service;

import com.alvis.exam.domain.ExamPaper;
import com.alvis.exam.domain.ExamPaperAnswer;
import com.alvis.exam.domain.TaskExamCustomerAnswer;

import java.util.Date;

public interface TaskExamCustomerAnswerService extends BaseService<TaskExamCustomerAnswer> {

    void insertOrUpdate(ExamPaper examPaper, ExamPaperAnswer examPaperAnswer, Date now);

}
