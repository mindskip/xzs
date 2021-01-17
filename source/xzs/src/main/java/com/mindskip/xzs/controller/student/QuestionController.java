package com.mindskip.xzs.controller.student;

import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController("StudentQuestionController")
@RequestMapping(value = "/api/student/question")
public class QuestionController extends BaseApiController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }
}
