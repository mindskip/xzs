package com.alvis.exam.controller.teacher;

import com.alvis.exam.base.BaseApiController;
import com.alvis.exam.base.RestResponse;
import com.alvis.exam.domain.Classes;
import com.alvis.exam.service.ClassesService;
import com.alvis.exam.utility.DateTimeUtil;
import com.alvis.exam.utility.PageInfoHelper;
import com.alvis.exam.viewmodel.teacher.classes.ClassesEditVM;
import com.alvis.exam.viewmodel.teacher.classes.ClassesPageRequestVM;
import com.alvis.exam.viewmodel.teacher.classes.ClassesResponseVM;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;


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


    @PostMapping("/select/{id}")
    public RestResponse<ClassesResponseVM> select(@PathVariable Integer id) {
        Classes classes = classesService.selectById(id);
        ClassesResponseVM vm = modelMapper.map(classes, ClassesResponseVM.class);
        return RestResponse.ok(vm);
    }


    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public RestResponse edit(@RequestBody @Valid ClassesEditVM model) {
        if (model.getId() == null) {
            Classes classes = modelMapper.map(model, Classes.class);
            classes.setCreateTime(new Date());
            classes.setDeleted(false);
            classes.setCreateUser(getCurrentUser().getId());
            classes.setCreateUserName(getCurrentUser().getUserName());
            classes.setClassesNumber(0);
            classesService.insertByFilter(classes);
        } else {
            Classes classes = classesService.selectById(model.getId());
            classes.setName(model.getName());
            classesService.updateByIdFilter(classes);
        }
        return RestResponse.ok();
    }

}

