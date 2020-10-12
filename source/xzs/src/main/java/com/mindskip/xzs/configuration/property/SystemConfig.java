package com.mindskip.xzs.configuration.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;


/**
 * @author 武汉思维跳跃科技有限公司
 */
@ConfigurationProperties(prefix = "system")
@Data
public class SystemConfig {
    private PasswordKeyConfig pwdKey;
    private List<String> securityIgnoreUrls;
    private WxConfig wx;
    private QnConfig qn;
}
