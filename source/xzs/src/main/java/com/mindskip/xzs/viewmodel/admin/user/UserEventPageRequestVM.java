package com.mindskip.xzs.viewmodel.admin.user;

import com.mindskip.xzs.base.BasePage;


/**
 * @author 武汉思维跳跃科技有限公司
 */


public class UserEventPageRequestVM extends BasePage {

    private Integer userId;

    private String userName;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
