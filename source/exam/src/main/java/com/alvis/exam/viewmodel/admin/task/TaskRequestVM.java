package com.alvis.exam.viewmodel.admin.task;

import com.alvis.exam.viewmodel.admin.exam.ExamResponseVM;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class TaskRequestVM {

    private Integer id;

    @NotNull
    private Integer gradeLevel;

    @NotNull
    private String title;

    @Size(min = 1, message = "请添加试卷")
    @Valid
    private List<ExamResponseVM> paperItems;
}
