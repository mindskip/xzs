package com.alvis.exam.viewmodel.student.dashboard;

import com.alvis.exam.domain.task.TaskItemObject;
import lombok.Data;

import java.util.List;

@Data
public class TaskItemVm {
    private Integer id;
    private String title;
    private List<TaskItemPaperVm> paperItems;
}
