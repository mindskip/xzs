package com.alvis.exam.controller.wx.student;

import com.alvis.exam.base.RestResponse;
import com.alvis.exam.configuration.property.SystemConfig;
import com.alvis.exam.controller.wx.BaseWXApiController;
import com.alvis.exam.viewmodel.wx.student.user.BindInfo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController("WXStudentDashboardController")
@RequestMapping(value = "/api/wx/student/user")
@AllArgsConstructor
public class UserController extends BaseWXApiController {

    private final SystemConfig systemConfig;

    @RequestMapping(value = "/bind", method = RequestMethod.POST)
    public RestResponse bind(@RequestBody @Valid BindInfo model) {

        return RestResponse.ok();
    }

}
