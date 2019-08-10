package com.alvis.exam.controller.wx.student;

import com.alvis.exam.controller.wx.BaseWXApiController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController("WXStudentDashboardController")
@RequestMapping(value = "/api/wx/student/dashboard")
@AllArgsConstructor
public class DashboardController extends BaseWXApiController {
}
