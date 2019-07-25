package com.alvis.exam.controller.student;

import com.alvis.exam.service.UserEventLogService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("StudentUserEventLogController")
@RequestMapping(value = "/api/student/userevent")
@AllArgsConstructor
public class UserEventLogController {

    private UserEventLogService userEventLogService;


}
