package com.alvis.exam.service;

import com.alvis.exam.domain.TaskExam;
import com.alvis.exam.viewmodel.admin.task.TaskPageRequestVM;
import com.alvis.exam.viewmodel.admin.task.TaskRequestVM;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface TaskExamService extends BaseService<TaskExam> {

    PageInfo<TaskExam> page(TaskPageRequestVM requestVM);

    TaskRequestVM taskExamToVM(Integer id);
}
