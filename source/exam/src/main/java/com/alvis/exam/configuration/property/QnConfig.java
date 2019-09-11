package com.alvis.exam.configuration.property;

import lombok.Data;

import java.time.Duration;
import java.util.List;

@Data
public class QnConfig {
    private String url;
    private String bucket;
    private String accessKey;
    private String secretKey;
}
