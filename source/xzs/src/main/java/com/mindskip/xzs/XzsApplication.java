package com.mindskip.xzs;

import com.mindskip.xzs.configuration.property.SystemConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author alvis
 */
@SpringBootApplication
@EnableTransactionManagement
@EnableConfigurationProperties(value = { SystemConfig.class})
@EnableCaching
public class XzsApplication {

    public static void main(String[] args) {
        SpringApplication.run(XzsApplication.class, args);
    }
}
