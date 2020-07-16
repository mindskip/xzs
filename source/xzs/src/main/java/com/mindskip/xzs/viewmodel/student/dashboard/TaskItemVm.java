package com.mindskip.xzs.viewmodel.student.dashboard;

import lombok.Data;

import java.util.List;

@Data
public class TaskItemVm {
    private Integer id;
    private String title;
    private List<TaskItemPaperVm> paperItems;
}
