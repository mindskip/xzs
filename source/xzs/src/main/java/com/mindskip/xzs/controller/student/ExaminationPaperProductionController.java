package com.mindskip.xzs.controller.student;

import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.domain.Question;
import com.mindskip.xzs.service.ExaminationPaperProductionService;
import com.mindskip.xzs.viewmodel.student.exam.ExaminationProductionVM;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController("ExaminationPaperProductionController")
@RequestMapping(value = "/api/student/examination")
@AllArgsConstructor
public class ExaminationPaperProductionController extends BaseApiController {

    private final ExaminationPaperProductionService examinationPaperProductionService;

    @RequestMapping(value = "/paper", method = RequestMethod.GET)
    public RestResponse paper(){
        List<Question> paper = examinationPaperProductionService.paper();
        return RestResponse.ok(paper);
    }

    @RequestMapping(value = "/paper/production", method = RequestMethod.POST)
    public RestResponse paperProduction(@RequestBody @Valid ExaminationProductionVM examinationProductionVM){
        List<Question> questionList = examinationPaperProductionService.generation(examinationProductionVM);
        return RestResponse.ok(questionList);
    }



}
