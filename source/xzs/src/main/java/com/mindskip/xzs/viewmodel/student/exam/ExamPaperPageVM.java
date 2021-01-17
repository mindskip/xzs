package com.mindskip.xzs.viewmodel.student.exam;

import com.mindskip.xzs.base.BasePage;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ExamPaperPageVM extends BasePage {
    @NotNull
    private Integer paperType;
    private Integer subjectId;
    private Integer levelId;
}
