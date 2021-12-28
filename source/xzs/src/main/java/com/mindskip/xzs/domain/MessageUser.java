package com.mindskip.xzs.domain;

import java.io.Serializable;
import java.util.Date;

public class MessageUser implements Serializable {

    private static final long serialVersionUID = -4042932811802896498L;

    private Integer id;

    /**
     * 消息内容ID
     */
    private Integer messageId;

    /**
     * 接收人ID
     */
    private Integer receiveUserId;

    /**
     * 接收人用户名
     */
    private String receiveUserName;

    /**
     * 接收人真实姓名
     */
    private String receiveRealName;

    /**
     * 是否已读
     */
    private Boolean readed;

    private Date createTime;

    /**
     * 阅读时间
     */
    private Date readTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public Integer getReceiveUserId() {
        return receiveUserId;
    }

    public void setReceiveUserId(Integer receiveUserId) {
        this.receiveUserId = receiveUserId;
    }

    public String getReceiveUserName() {
        return receiveUserName;
    }

    public void setReceiveUserName(String receiveUserName) {
        this.receiveUserName = receiveUserName == null ? null : receiveUserName.trim();
    }

    public String getReceiveRealName() {
        return receiveRealName;
    }

    public void setReceiveRealName(String receiveRealName) {
        this.receiveRealName = receiveRealName == null ? null : receiveRealName.trim();
    }

    public Boolean getReaded() {
        return readed;
    }

    public void setReaded(Boolean readed) {
        this.readed = readed;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getReadTime() {
        return readTime;
    }

    public void setReadTime(Date readTime) {
        this.readTime = readTime;
    }
}
