package com.alvis.exam.viewmodel.admin.exam;

import com.alvis.exam.viewmodel.admin.question.QuestionEditRequestVM;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ExamPaperTitleItemVM {

    @NotBlank
    private String name;

    @NotNull
    @Valid
    private List<QuestionEditRequestVM> questionItems;
}
