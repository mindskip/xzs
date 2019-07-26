package com.alvis.exam.viewmodel.student.user;

import lombok.Data;

@Data
public class MessageResponseVM {
    private Integer id;

    private String title;

    private String content;

    private Boolean readed;

    private String  createTime;
}
