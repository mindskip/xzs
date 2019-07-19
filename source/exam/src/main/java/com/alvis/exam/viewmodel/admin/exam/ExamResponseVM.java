package com.alvis.exam.viewmodel.admin.exam;

import lombok.Data;

@Data
public class ExamResponseVM {
    private Integer id;

    private String name;

    private Integer questionCount;

    private Integer score;

    private String createTime;

    private Integer createUser;

    private Integer subjectId;

    private Integer paperType;

    private Integer frameTextContentId;
}
