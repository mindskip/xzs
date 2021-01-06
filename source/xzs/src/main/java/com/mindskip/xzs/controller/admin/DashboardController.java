package com.mindskip.xzs.controller.admin;

import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.service.*;
import com.mindskip.xzs.utility.DateTimeUtil;
import com.mindskip.xzs.viewmodel.admin.dashboard.IndexVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("AdminDashboardController")
@RequestMapping(value = "/api/admin/dashboard")
public class DashboardController extends BaseApiController {

    private final ExamPaperService examPaperService;
    private final QuestionService questionService;
    private final ExamPaperAnswerService examPaperAnswerService;
    private final ExamPaperQuestionCustomerAnswerService examPaperQuestionCustomerAnswerService;
    private final UserEventLogService userEventLogService;

    @Autowired
    public DashboardController(ExamPaperService examPaperService, QuestionService questionService, ExamPaperAnswerService examPaperAnswerService, ExamPaperQuestionCustomerAnswerService examPaperQuestionCustomerAnswerService, UserEventLogService userEventLogService) {
        this.examPaperService = examPaperService;
        this.questionService = questionService;
        this.examPaperAnswerService = examPaperAnswerService;
        this.examPaperQuestionCustomerAnswerService = examPaperQuestionCustomerAnswerService;
        this.userEventLogService = userEventLogService;
    }

    @RequestMapping(value = "/index", method = RequestMethod.POST)
    public RestResponse<IndexVM> Index() {
        IndexVM vm = new IndexVM();

        Integer examPaperCount = examPaperService.selectAllCount();
        Integer questionCount = questionService.selectAllCount();
        Integer doExamPaperCount = examPaperAnswerService.selectAllCount();
        Integer doQuestionCount = examPaperQuestionCustomerAnswerService.selectAllCount();

        vm.setExamPaperCount(examPaperCount);
        vm.setQuestionCount(questionCount);
        vm.setDoExamPaperCount(doExamPaperCount);
        vm.setDoQuestionCount(doQuestionCount);

        List<Integer> mothDayUserActionValue = userEventLogService.selectMothCount();
        List<Integer> mothDayDoExamQuestionValue = examPaperQuestionCustomerAnswerService.selectMothCount();
        vm.setMothDayUserActionValue(mothDayUserActionValue);
        vm.setMothDayDoExamQuestionValue(mothDayDoExamQuestionValue);

        vm.setMothDayText(DateTimeUtil.MothDay());
        return RestResponse.ok(vm);
    }
}
