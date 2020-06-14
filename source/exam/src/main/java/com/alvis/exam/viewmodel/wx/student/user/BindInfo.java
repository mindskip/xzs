package com.alvis.exam.viewmodel.wx.student.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class BindInfo {

    @NotBlank
    private String userName;

    @NotBlank
    private String password;

    @NotBlank
    private String code;
}
