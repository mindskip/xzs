package com.mindskip.xzs.utility;


import java.io.Serializable;

public class WxResponse implements Serializable {
    private static final long serialVersionUID = -8496869159673561976L;
    private String session_key;
    private String openid;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getSession_key() {
        return session_key;
    }

    public void setSession_key(String session_key) {
        this.session_key = session_key;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }
}
