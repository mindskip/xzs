package com.mindskip.xzs.viewmodel.admin.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserUpdateVM {

    @NotBlank
    private String realName;

    @NotBlank
    private String phone;

}
