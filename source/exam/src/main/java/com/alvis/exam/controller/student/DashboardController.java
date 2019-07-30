package com.alvis.exam.controller.student;

import com.alvis.exam.base.BaseApiController;
import com.alvis.exam.base.RestResponse;
import com.alvis.exam.domain.TaskExam;
import com.alvis.exam.domain.TextContent;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.enums.ExamPaperTypeEnum;
import com.alvis.exam.domain.task.TaskItemObject;
import com.alvis.exam.service.*;
import com.alvis.exam.utility.JsonUtil;
import com.alvis.exam.viewmodel.student.dashboard.IndexVM;
import com.alvis.exam.viewmodel.student.dashboard.PaperFilter;
import com.alvis.exam.viewmodel.student.dashboard.TaskItemVm;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController("StudentDashboardController")
@RequestMapping(value = "/api/student/dashboard")
@AllArgsConstructor
public class DashboardController extends BaseApiController {

    private final UserService userService;
    private final ExamPaperService examPaperService;
    private final QuestionService questionService;
    private final TaskExamService taskExamService;
    private final TextContentService textContentService;

    @RequestMapping(value = "/index", method = RequestMethod.POST)
    public RestResponse<IndexVM> index() {
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


    @RequestMapping(value = "/task", method = RequestMethod.POST)
    public RestResponse<List<TaskItemVm>> task() {
        List<TaskExam> taskExams = taskExamService.getByGradeLevel(getCurrentUser().getUserLevel());
        List<TaskItemVm> vm = taskExams.stream().map(e -> {
            TaskItemVm itemVm = new TaskItemVm();
            itemVm.setId(e.getId());
            itemVm.setTitle(e.getTitle());
            TextContent textContent = textContentService.selectById(e.getFrameTextContentId());
            List<TaskItemObject> paperItems = JsonUtil.toJsonListObject(textContent.getContent(), TaskItemObject.class);
            itemVm.setPaperItems(paperItems);
            return itemVm;
        }).collect(Collectors.toList());
        return RestResponse.ok(vm);
    }
}
