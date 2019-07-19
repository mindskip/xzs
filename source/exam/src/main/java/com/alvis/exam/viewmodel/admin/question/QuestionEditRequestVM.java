package com.alvis.exam.viewmodel.admin.question;

import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class QuestionEditRequestVM {

    private Integer id;
    @NotNull
    private Integer questionType;
    @NotNull
    private Integer subjectId;
    @NotBlank
    private String title;

    private Integer gradeLevel;

    @Valid
    private List<QuestionEditItemVM> items;
    @NotBlank
    private String analyze;

    private List<String> correctArray;

    private String correct;
    @NotBlank
    private String score;
    @NotNull
    private Integer difficult;

    private Integer itemOrder;
}
