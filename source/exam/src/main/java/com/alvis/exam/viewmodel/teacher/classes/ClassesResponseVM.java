package com.alvis.exam.viewmodel.teacher.classes;


import com.alvis.exam.viewmodel.BaseVM;
import lombok.Data;

import java.util.Date;

@Data
public class ClassesResponseVM extends BaseVM {

    private Integer id;

    private String name;

    private String createTime;

    private Integer classesNumber;
}
