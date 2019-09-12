package com.alvis.exam.viewmodel.teacher.classes;

import com.alvis.exam.base.BasePage;
import lombok.Data;


@Data
public class ClassesPageRequestVM extends BasePage {
    private String name;
    private Integer createId;
}
