package com.mindskip.xzs.viewmodel.student.question.answer;

import lombok.Data;

@Data
public class QuestionPageStudentResponseVM {
    private Integer id;

    private Integer questionType;

    private String createTime;

    private String subjectName;

    private String shortTitle;
}
