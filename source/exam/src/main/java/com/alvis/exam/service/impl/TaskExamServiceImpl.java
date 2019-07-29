package com.alvis.exam.service.impl;

import com.alvis.exam.domain.TaskExam;
import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.repository.TaskExamMapper;
import com.alvis.exam.service.TaskExamService;
import com.alvis.exam.viewmodel.admin.task.TaskPageRequestVM;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskExamServiceImpl extends BaseServiceImpl<TaskExam> implements TaskExamService {

    private final TaskExamMapper taskExamMapper;

    @Autowired
    public TaskExamServiceImpl(TaskExamMapper taskExamMapper) {
        super(taskExamMapper);
        this.taskExamMapper = taskExamMapper;
    }

    @Override
    public PageInfo<TaskExam> page(TaskPageRequestVM requestVM) {
        return PageHelper.startPage(requestVM.getPageIndex(), requestVM.getPageSize(), "id desc").doSelectPageInfo(() ->
                taskExamMapper.page(requestVM)
        );
    }
}
