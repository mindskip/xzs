package com.alvis.exam.controller.teacher;

import com.alvis.exam.base.BaseApiController;
import com.alvis.exam.base.RestResponse;
import com.alvis.exam.domain.Classes;
import com.alvis.exam.service.ClassesService;
import com.alvis.exam.utility.DateTimeUtil;
import com.alvis.exam.utility.PageInfoHelper;
import com.alvis.exam.viewmodel.teacher.classes.ClassesPageRequestVM;
import com.alvis.exam.viewmodel.teacher.classes.ClassesResponseVM;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController("TeacherClassesController")
@RequestMapping(value = "/api/teacher/classes")
@AllArgsConstructor
public class ClassesController extends BaseApiController {

    private final ClassesService classesService;

    @PostMapping("/page")
    public RestResponse<PageInfo<ClassesResponseVM>> pageList(@RequestBody ClassesPageRequestVM model) {
        model.setCreateId(getCurrentUser().getId());
        PageInfo<Classes> pageInfo = classesService.page(model);
        PageInfo<ClassesResponseVM> page = PageInfoHelper.copyMap(pageInfo, e -> {
            ClassesResponseVM vm = modelMapper.map(e, ClassesResponseVM.class);
            vm.setCreateTime(DateTimeUtil.dateFormat(e.getCreateTime()));
            return vm;
        });
        return RestResponse.ok(page);
    }


}

