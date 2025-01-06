package com.mindskip.xzs.configuration.property;


import java.time.Duration;
import java.util.List;

/**
 * @version 3.3.0
 * @description: The type Wx config.
 * Copyright (C), 2019-2025, 武汉思维跳跃科技有限公司
 * @date 2021 /5/26 10:45
 */
public class WxConfig {


    private String appid;
    private String secret;
    private Duration tokenToLive;
    private List<String> securityIgnoreUrls;

    /**
     * Gets appid.
     *
     * @return the appid
     */
    public String getAppid() {
        return appid;
    }

    /**
     * Sets appid.
     *
     * @param appid the appid
     */
    public void setAppid(String appid) {
        this.appid = appid;
    }

    /**
     * Gets secret.
     *
     * @return the secret
     */
    public String getSecret() {
        return secret;
    }

    /**
     * Sets secret.
     *
     * @param secret the secret
     */
    public void setSecret(String secret) {
        this.secret = secret;
    }

    /**
     * Gets token to live.
     *
     * @return the token to live
     */
    public Duration getTokenToLive() {
        return tokenToLive;
    }

    /**
     * Sets token to live.
     *
     * @param tokenToLive the token to live
     */
    public void setTokenToLive(Duration tokenToLive) {
        this.tokenToLive = tokenToLive;
    }

    /**
     * Gets security ignore urls.
     *
     * @return the security ignore urls
     */
    public List<String> getSecurityIgnoreUrls() {
        return securityIgnoreUrls;
    }

    /**
     * Sets security ignore urls.
     *
     * @param securityIgnoreUrls the security ignore urls
     */
    public void setSecurityIgnoreUrls(List<String> securityIgnoreUrls) {
        this.securityIgnoreUrls = securityIgnoreUrls;
    }

}
