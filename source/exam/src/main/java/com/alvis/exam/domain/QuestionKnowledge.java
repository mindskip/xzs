package com.alvis.exam.domain;

import java.io.Serializable;

public class QuestionKnowledge  implements Serializable {

    private static final long serialVersionUID = -3323168491154896409L;

    private Integer id;

    private Integer questionId;

    private Integer knowledgeId;

    private Boolean primaryed;

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

    public Integer getKnowledgeId() {
        return knowledgeId;
    }

    public void setKnowledgeId(Integer knowledgeId) {
        this.knowledgeId = knowledgeId;
    }

    public Boolean getPrimaried() {
        return primaryed;
    }

    public void setPrimaryed(Boolean primaryed) {
        this.primaryed = primaryed;
    }
}
