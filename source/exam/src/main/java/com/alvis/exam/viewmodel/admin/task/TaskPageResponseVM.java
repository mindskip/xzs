package com.alvis.exam.viewmodel.admin.task;

import lombok.Data;

import java.util.Date;

@Data
public class TaskPageResponseVM {

    private Integer id;

    private String title;

    private Integer gradeLevel;

    private Integer frameTextContentId;

    private Integer createUser;

    private String createTime;

    private Boolean deleted;

}
