package com.alvis.exam.configuration.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;


/**
 * @author alvis
 */
@ConfigurationProperties(prefix = "system")
@Data
public class SystemConfig {
    private String fdfsNgix;
    private String pwdPublicKey;
    private String pwdPrivateKey;
    private List<String> securityIgnoreUrls;
}