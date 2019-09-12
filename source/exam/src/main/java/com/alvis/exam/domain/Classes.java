package com.alvis.exam.domain;

import java.io.Serializable;
import java.util.Date;

public class Classes implements Serializable {

    private static final long serialVersionUID = -8898074676774903277L;

    private Integer id;

    private String name;

    private Integer createUser;

    private Date createTime;

    private Boolean deleted;

    private String createUserName;

    private Integer classesNumber;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
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

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName == null ? null : createUserName.trim();
    }

    public Integer getClassesNumber() {
        return classesNumber;
    }

    public void setClassesNumber(Integer classesNumber) {
        this.classesNumber = classesNumber;
    }
}
