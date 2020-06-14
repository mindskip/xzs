package com.alvis.exam.viewmodel.student.exampaper;

import lombok.Data;

@Data
public class ExamPaperAnswerPageResponseVM {
    private Integer id;

    private String createTime;

    private String userScore;

    private String subjectName;

    private Integer subjectId;

    private Integer questionCount;

    private Integer questionCorrect;

    private String paperScore;

    private String doTime;

    private Integer paperType;

    private String systemScore;

    private Integer status;

    private String paperName;
}
