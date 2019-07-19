package com.alvis.exam.viewmodel.student.exam;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ExamPaperSubmitItemVM {
    @NotNull
    private Integer questionId;

    private Boolean doRight;

    private String content;

    private List<String> contentArray;
}
