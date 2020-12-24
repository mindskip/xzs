package com.mindskip.xzs.viewmodel.admin.skill;

import com.mindskip.xzs.viewmodel.BaseVM;
import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 15
 * @Description:
 */
@Data
public class SkillEditRequestVM extends BaseVM {
    private Integer id;

    @NotBlank
    private String name;
}
