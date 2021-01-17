package com.mindskip.xzs.domain.task;


public class TaskItemAnswerObject {
    private Integer examPaperId;
    private Integer examPaperAnswerId;
    private Integer status;

    public TaskItemAnswerObject(){

    }

    public TaskItemAnswerObject(Integer examPaperId, Integer examPaperAnswerId, Integer status) {
        this.examPaperId = examPaperId;
        this.examPaperAnswerId = examPaperAnswerId;
        this.status = status;
    }

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public Integer getExamPaperAnswerId() {
        return examPaperAnswerId;
    }

    public void setExamPaperAnswerId(Integer examPaperAnswerId) {
        this.examPaperAnswerId = examPaperAnswerId;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
