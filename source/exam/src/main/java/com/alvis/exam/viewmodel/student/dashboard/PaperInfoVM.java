package com.alvis.exam.viewmodel.student.dashboard;

import lombok.Data;

import java.util.Date;

@Data
public class PaperInfoVM extends PaperInfo {
    private String startTime;
    private String endTime;
}
