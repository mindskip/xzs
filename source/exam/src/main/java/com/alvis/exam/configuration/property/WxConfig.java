package com.alvis.exam.configuration.property;

import lombok.Data;

import java.time.Duration;
import java.util.List;

@Data
public class WxConfig {
    private String appid;
    private String secret;
    private Duration tokenToLive;
    private List<String> securityIgnoreUrls;
}
