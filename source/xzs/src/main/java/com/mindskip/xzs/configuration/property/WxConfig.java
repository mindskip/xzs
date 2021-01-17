package com.mindskip.xzs.configuration.property;


import java.time.Duration;
import java.util.List;

public class WxConfig {


    private String appid;
    private String secret;
    private Duration tokenToLive;
    private List<String> securityIgnoreUrls;

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public Duration getTokenToLive() {
        return tokenToLive;
    }

    public void setTokenToLive(Duration tokenToLive) {
        this.tokenToLive = tokenToLive;
    }

    public List<String> getSecurityIgnoreUrls() {
        return securityIgnoreUrls;
    }

    public void setSecurityIgnoreUrls(List<String> securityIgnoreUrls) {
        this.securityIgnoreUrls = securityIgnoreUrls;
    }

}
