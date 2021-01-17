package com.mindskip.xzs.viewmodel.student.question.answer;

import com.mindskip.xzs.viewmodel.admin.question.QuestionEditRequestVM;
import com.mindskip.xzs.viewmodel.student.exam.ExamPaperSubmitItemVM;
import lombok.Data;

@Data
public class QuestionAnswerVM {
    private QuestionEditRequestVM questionVM;
    private ExamPaperSubmitItemVM questionAnswerVM;
}
