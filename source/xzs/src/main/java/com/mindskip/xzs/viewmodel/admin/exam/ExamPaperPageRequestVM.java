package com.mindskip.xzs.viewmodel.admin.exam;

import com.mindskip.xzs.base.BasePage;
import lombok.Data;

@Data
public class ExamPaperPageRequestVM extends BasePage {

    private Integer id;
    private Integer subjectId;
    private Integer level;
    private Integer paperType;
    private Integer taskExamId;
}
