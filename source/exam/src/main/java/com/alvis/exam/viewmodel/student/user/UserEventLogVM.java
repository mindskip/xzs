package com.alvis.exam.viewmodel.student.user;

import lombok.Data;

import java.util.Date;

@Data
public class UserEventLogVM {

    private Integer id;

    private Integer userId;

    private String userName;

    private String realName;

    private String content;

    private String createTime;

}
