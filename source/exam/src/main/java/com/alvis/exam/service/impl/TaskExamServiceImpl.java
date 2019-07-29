package com.alvis.exam.service.impl;

import com.alvis.exam.domain.TaskExam;
import com.alvis.exam.repository.BaseMapper;
import com.alvis.exam.repository.TaskExamMapper;
import com.alvis.exam.service.TaskExamService;
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

}
