package com.alvis.exam.domain.task;

import lombok.Data;

@Data
public class TaskItemAnswerObject {
    private Integer examPaperAnswerId;
    private Integer status;

    public TaskItemAnswerObject(Integer examPaperAnswerId, Integer status) {
        this.examPaperAnswerId = examPaperAnswerId;
        this.status = status;
    }
}
