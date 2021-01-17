package com.mindskip.xzs.viewmodel.admin.education;

import com.mindskip.xzs.viewmodel.BaseVM;
import lombok.Data;

@Data
public class SubjectResponseVM extends BaseVM {
    private Integer id;

    private String name;

    private Integer level;

    private String levelName;
}
