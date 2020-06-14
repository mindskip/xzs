package com.alvis.exam.viewmodel.student.user;

import lombok.Data;

@Data
public class MessageResponseVM {
    private Integer id;

    private String title;

    private Integer messageId;

    private String content;

    private Boolean readed;

    private String  createTime;

    private String sendUserName;
}
