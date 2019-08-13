package com.alvis.exam.configuration.property;

import lombok.Data;

@Data
public class WxConfig {
    private String appid;
    private String secret;
    private Integer tokenInterval;
}
