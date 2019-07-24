package com.alvis.exam.domain;

import com.alvis.exam.domain.enums.QuestionTypeEnum;
import com.alvis.exam.utility.ExamUtil;
import org.apache.commons.lang3.tuple.Pair;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class ExamPaperQuestionCustomerAnswer implements Serializable {

    private static final long serialVersionUID = 3389482731220342366L;

    private Integer id;

    private Integer questionId;

    private Integer questionScore;

    private Integer subjectId;

    private Date createTime;

    private Integer createUser;

    private Integer textContentId;

    private Integer examPaperId;

    private Integer questionType;

    private String answer;

    private Integer customerScore;

    private Integer examPaperAnswerId;

    private Boolean doRight;

    private Integer questionTextContentId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getQuestionScore() {
        return questionScore;
    }

    public void setQuestionScore(Integer questionScore) {
        this.questionScore = questionScore;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getCreateUser() {
        return createUser;
    }

    public void setCreateUser(Integer createUser) {
        this.createUser = createUser;
    }

    public Integer getTextContentId() {
        return textContentId;
    }

    public void setTextContentId(Integer textContentId) {
        this.textContentId = textContentId;
    }

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public Integer getQuestionType() {
        return questionType;
    }

    public void setQuestionType(Integer questionType) {
        this.questionType = questionType;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer == null ? null : answer.trim();
    }

    public Integer getCustomerScore() {
        return customerScore;
    }

    public void setCustomerScore(Integer customerScore) {
        this.customerScore = customerScore;
    }

    public Integer getExamPaperAnswerId() {
        return examPaperAnswerId;
    }

    public void setExamPaperAnswerId(Integer examPaperAnswerId) {
        this.examPaperAnswerId = examPaperAnswerId;
    }

    public Boolean getDoRight() {
        return doRight;
    }

    public void setDoRight(Boolean doRight) {
        this.doRight = doRight;
    }

    public Integer getQuestionTextContentId() {
        return questionTextContentId;
    }

    public void setQuestionTextContentId(Integer questionTextContentId) {
        this.questionTextContentId = questionTextContentId;
    }
}
