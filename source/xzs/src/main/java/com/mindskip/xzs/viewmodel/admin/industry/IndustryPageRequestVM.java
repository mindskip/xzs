package com.mindskip.xzs.viewmodel.admin.industry;

import com.mindskip.xzs.base.BasePage;
import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 15
 * @Description:
 */
@Data
public class IndustryPageRequestVM extends BasePage {
    private Integer id;

    @NotBlank
    private String name;
}
