package com.alvis.exam.viewmodel.admin.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserCreateVM {

    private Integer id;

    @NotBlank
    private String userName;

    private String password;

    @NotBlank
    private String realName;

    private String age;

    private Integer status;

    private Integer sex;

    private String birthDay;

    private String phone;

    private Integer role;

    private Integer userLevel;
}
