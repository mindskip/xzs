package com.alvis.exam.controller.wx.student;

import com.alvis.exam.base.RestResponse;
import com.alvis.exam.controller.wx.BaseWXApiController;
import com.alvis.exam.domain.ExamPaper;
import com.alvis.exam.domain.ExamPaperAnswer;
import com.alvis.exam.domain.Subject;
import com.alvis.exam.domain.enums.ExamPaperAnswerStatusEnum;
import com.alvis.exam.service.ExamPaperAnswerService;
import com.alvis.exam.service.ExamPaperService;
import com.alvis.exam.service.SubjectService;
import com.alvis.exam.utility.DateTimeUtil;
import com.alvis.exam.utility.ExamUtil;
import com.alvis.exam.utility.PageInfoHelper;
import com.alvis.exam.viewmodel.student.exam.ExamPaperPageResponseVM;
import com.alvis.exam.viewmodel.student.exam.ExamPaperPageVM;
import com.alvis.exam.viewmodel.student.exampaper.ExamPaperAnswerPageResponseVM;
import com.alvis.exam.viewmodel.student.exampaper.ExamPaperAnswerPageVM;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;


@Controller("WXStudentExamPaperAnswerController")
@RequestMapping(value = "/api/wx/student/exampaper/answer")
@AllArgsConstructor
@ResponseBody
public class ExamPaperAnswerController extends BaseWXApiController {

    private final ExamPaperAnswerService examPaperAnswerService;
    private final SubjectService subjectService;

    @RequestMapping(value = "/pageList", method = RequestMethod.POST)
    public RestResponse<PageInfo<ExamPaperAnswerPageResponseVM>> pageList(@Valid ExamPaperAnswerPageVM model) {
        model.setCreateUser(getCurrentUser().getId());
        PageInfo<ExamPaperAnswer> pageInfo = examPaperAnswerService.studentPage(model);
        PageInfo<ExamPaperAnswerPageResponseVM> page = PageInfoHelper.copyMap(pageInfo, e -> {
            ExamPaperAnswerPageResponseVM vm = modelMapper.map(e, ExamPaperAnswerPageResponseVM.class);
            Subject subject = subjectService.selectById(vm.getSubjectId());
            vm.setDoTime(ExamUtil.secondToVM(e.getDoTime()));
            vm.setSystemScore(ExamUtil.scoreToVM(e.getSystemScore()));
            vm.setUserScore(ExamUtil.scoreToVM(e.getUserScore()));
            vm.setPaperScore(ExamUtil.scoreToVM(e.getPaperScore()));
            vm.setSubjectName(subject.getName());
            vm.setCreateTime(DateTimeUtil.dateFormat(e.getCreateTime()));
            vm.setStatusStr(ExamPaperAnswerStatusEnum.fromCode(e.getStatus()).getName());
            return vm;
        });
        return RestResponse.ok(page);
    }
}
