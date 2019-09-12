package com.alvis.exam.viewmodel.teacher.classes;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ClassesEditVM {
    private Integer id;
    @NotBlank
    private String name;
}
