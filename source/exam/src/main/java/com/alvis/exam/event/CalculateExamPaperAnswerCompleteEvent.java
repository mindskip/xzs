package com.alvis.exam.event;

import com.alvis.exam.domain.ExamPaperAnswerInfo;
import com.alvis.exam.domain.User;
import org.springframework.context.ApplicationEvent;

/**
 * @author alvis
 */
public class CalculateExamPaperAnswerCompleteEvent extends ApplicationEvent {


    private final ExamPaperAnswerInfo examPaperAnswerInfo;


    public CalculateExamPaperAnswerCompleteEvent(final ExamPaperAnswerInfo examPaperAnswerInfo) {
        super(examPaperAnswerInfo);
        this.examPaperAnswerInfo = examPaperAnswerInfo;
    }

    public ExamPaperAnswerInfo getExamPaperAnswerInfo() {
        return examPaperAnswerInfo;
    }

}
