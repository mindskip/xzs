package com.alvis.exam.controller.student;

import com.alvis.exam.base.BaseApiController;
import com.alvis.exam.base.RestResponse;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.enums.ExamPaperTypeEnum;
import com.alvis.exam.service.ExamPaperService;
import com.alvis.exam.service.QuestionService;
import com.alvis.exam.service.UserService;
import com.alvis.exam.viewmodel.student.dashboard.IndexVM;
import com.alvis.exam.viewmodel.student.dashboard.PaperFilter;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController("StudentDashboardController")
@RequestMapping(value = "/api/student/dashboard")
@AllArgsConstructor
public class DashboardController extends BaseApiController {

    private final UserService userService;
    private final ExamPaperService examPaperService;
    private final QuestionService questionService;


    @RequestMapping(value = "/index", method = RequestMethod.POST)
    public RestResponse<IndexVM> Index() {
        IndexVM indexVM = new IndexVM();
        User user = getCurrentUser();

        PaperFilter fixedPaperFilter = new PaperFilter();
        fixedPaperFilter.setGradeLevel(user.getUserLevel());
        fixedPaperFilter.setExamPaperType(ExamPaperTypeEnum.Fixed.getCode());
        indexVM.setFixedPaper(examPaperService.indexPaper(fixedPaperFilter));

        PaperFilter timeLimitPaperFilter = new PaperFilter();
        timeLimitPaperFilter.setDateTime(new Date());
        timeLimitPaperFilter.setGradeLevel(user.getUserLevel());
        timeLimitPaperFilter.setExamPaperType(ExamPaperTypeEnum.TimeLimit.getCode());

        indexVM.setTimeLimitPaper(examPaperService.indexPaper(timeLimitPaperFilter));
        return RestResponse.ok(indexVM);
    }
}
