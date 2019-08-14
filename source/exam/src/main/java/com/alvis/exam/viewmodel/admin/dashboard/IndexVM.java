package com.alvis.exam.viewmodel.admin.dashboard;

import lombok.Data;

import java.util.List;

@Data
public class IndexVM {
    private Integer examPaperCount;
    private Integer questionCount;
    private Integer doExamPaperCount;
    private Integer doQuestionCount;
    private List<Integer> mothDayUserActionValue;
    private List<Integer> mothDayDoExamQuestionValue;
    private List<String> mothDayText;
}
