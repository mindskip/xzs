package com.alvis.exam.controller.wx.student;

import com.alvis.exam.base.RestResponse;
import com.alvis.exam.controller.wx.BaseWXApiController;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.enums.ExamPaperTypeEnum;
import com.alvis.exam.service.ExamPaperService;
import com.alvis.exam.utility.DateTimeUtil;
import com.alvis.exam.viewmodel.student.dashboard.IndexVM;
import com.alvis.exam.viewmodel.student.dashboard.PaperFilter;
import com.alvis.exam.viewmodel.student.dashboard.PaperInfo;
import com.alvis.exam.viewmodel.student.dashboard.PaperInfoVM;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Controller("WXStudentDashboardController")
@RequestMapping(value = "/api/wx/student/dashboard")
@AllArgsConstructor
@ResponseBody
public class DashboardController extends BaseWXApiController {

    private final ExamPaperService examPaperService;

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

        List<PaperInfo> limitPaper = examPaperService.indexPaper(timeLimitPaperFilter);
        List<PaperInfoVM> paperInfoVMS = limitPaper.stream().map(d -> {
            PaperInfoVM vm = modelMapper.map(d, PaperInfoVM.class);
            vm.setStartTime(DateTimeUtil.dateFormat(d.getLimitStartTime()));
            vm.setEndTime(DateTimeUtil.dateFormat(d.getLimitEndTime()));
            return vm;
        }).collect(Collectors.toList());
        indexVM.setTimeLimitPaper(paperInfoVMS);
        return RestResponse.ok(indexVM);
    }
}
