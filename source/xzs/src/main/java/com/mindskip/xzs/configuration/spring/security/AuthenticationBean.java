package com.mindskip.xzs.configuration.spring.security;


/**
 * @author 武汉思维跳跃科技有限公司
 */

public class AuthenticationBean {
    private String userName;
    private String password;
    private boolean remember;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isRemember() {
        return remember;
    }

    public void setRemember(boolean remember) {
        this.remember = remember;
    }

}
