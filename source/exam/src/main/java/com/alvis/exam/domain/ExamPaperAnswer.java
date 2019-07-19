package com.alvis.exam.domain;

import java.io.Serializable;
import java.util.Date;

public class ExamPaperAnswer implements Serializable {
    private Integer id;

    private Integer examPaperId;

    private Integer createUser;

    private Date createTime;

    private Integer userScore;

    private Integer subjectId;

    private Integer questionCount;

    private Integer questionCorrect;

    private Integer paperScore;

    private Integer doTime;

    private Integer paperType;

    private Integer systemScore;

    private Integer status;

    private String paperName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public Integer getCreateUser() {
        return createUser;
    }

    public void setCreateUser(Integer createUser) {
        this.createUser = createUser;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getUserScore() {
        return userScore;
    }

    public void setUserScore(Integer userScore) {
        this.userScore = userScore;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getQuestionCount() {
        return questionCount;
    }

    public void setQuestionCount(Integer questionCount) {
        this.questionCount = questionCount;
    }

    public Integer getQuestionCorrect() {
        return questionCorrect;
    }

    public void setQuestionCorrect(Integer questionCorrect) {
        this.questionCorrect = questionCorrect;
    }

    public Integer getPaperScore() {
        return paperScore;
    }

    public void setPaperScore(Integer paperScore) {
        this.paperScore = paperScore;
    }

    public Integer getDoTime() {
        return doTime;
    }

    public void setDoTime(Integer doTime) {
        this.doTime = doTime;
    }

    public Integer getPaperType() {
        return paperType;
    }

    public void setPaperType(Integer paperType) {
        this.paperType = paperType;
    }

    public Integer getSystemScore() {
        return systemScore;
    }

    public void setSystemScore(Integer systemScore) {
        this.systemScore = systemScore;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getPaperName() {
        return paperName;
    }

    public void setPaperName(String paperName) {
        this.paperName = paperName == null ? null : paperName.trim();
    }
}
