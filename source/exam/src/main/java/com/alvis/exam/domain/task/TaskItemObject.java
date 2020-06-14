package com.alvis.exam.domain.task;

import lombok.Data;

@Data
public class TaskItemObject {
    private Integer examPaperId;
    private String examPaperName;
    private Integer itemOrder;
}
