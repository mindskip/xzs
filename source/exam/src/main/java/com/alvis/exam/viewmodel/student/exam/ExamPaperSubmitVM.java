package com.alvis.exam.viewmodel.student.exam;

import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;


@Data
public class ExamPaperSubmitVM {

    @NotNull
    private Integer id;

    @NotNull
    private Integer doTime;

    private String score;

    @NotNull
    @Valid
    private List<ExamPaperSubmitItemVM> answerItems;
}
