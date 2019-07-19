package com.alvis.exam.viewmodel.student.question.answer;

import com.alvis.exam.base.BasePage;
import lombok.Data;

@Data
public class QuestionPageStudentResponseVM {
    private Integer id;

    private Integer questionType;

    private String createTime;

    private String subjectName;

    private String shortTitle;
}
