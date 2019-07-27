package com.alvis.exam.viewmodel.admin.message;

import lombok.Data;

import java.util.Date;

@Data
public class MessageResponseVM {
    private Integer id;

    private String title;

    private String content;

    private String sendUserName;

    private String receives;

    private Integer receiveUserCount;

    private Integer readCount;

    private String createTime;

}
