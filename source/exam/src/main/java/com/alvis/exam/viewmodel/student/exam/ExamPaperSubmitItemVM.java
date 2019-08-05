package com.alvis.exam.viewmodel.student.exam;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ExamPaperSubmitItemVM {
    private Integer id;
    @NotNull
    private Integer questionId;

    private Boolean doRight;

    private String content;

    private Integer itemOrder;

    private List<String> contentArray;

    private String score;

    private String questionScore;
}
