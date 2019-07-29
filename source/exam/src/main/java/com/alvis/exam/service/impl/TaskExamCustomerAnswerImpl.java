package com.alvis.exam.service.impl;

import com.alvis.exam.domain.TaskExamCustomerAnswer;
import com.alvis.exam.repository.TaskExamCustomerAnswerMapper;
import com.alvis.exam.service.TaskExamCustomerAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskExamCustomerAnswerImpl extends BaseServiceImpl<TaskExamCustomerAnswer> implements TaskExamCustomerAnswerService {

    private final TaskExamCustomerAnswerMapper taskExamCustomerAnswerMapper;

    @Autowired
    public TaskExamCustomerAnswerImpl(TaskExamCustomerAnswerMapper taskExamCustomerAnswerMapper) {
        super(taskExamCustomerAnswerMapper);
        this.taskExamCustomerAnswerMapper = taskExamCustomerAnswerMapper;
    }
}
