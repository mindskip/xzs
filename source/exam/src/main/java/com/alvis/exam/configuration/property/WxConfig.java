package com.alvis.exam.configuration.property;

import lombok.Data;

import java.time.Duration;

@Data
public class WxConfig {
    private String appid;
    private String secret;
    private Duration tokenToLive;
}
