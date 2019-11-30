package com.alvis.exam.configuration.spring.mvc;

import com.alvis.exam.configuration.property.SystemConfig;
import com.alvis.exam.configuration.spring.interceptor.WebContextInterceptor;
import com.alvis.exam.configuration.spring.wx.TokenHandlerInterceptor;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

import java.util.List;


/**
 * @author alvis
 */

@Configuration
@AllArgsConstructor
public class WebMvcConfiguration extends WebMvcConfigurationSupport {

    private final WebContextInterceptor webContextInterceptor;
    private final TokenHandlerInterceptor tokenHandlerInterceptor;
    private final SystemConfig systemConfig;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(webContextInterceptor);

        List<String> securityIgnoreUrls = systemConfig.getWx().getSecurityIgnoreUrls();
        String[] ignores = new String[securityIgnoreUrls.size()];
        registry.addInterceptor(tokenHandlerInterceptor)
                .addPathPatterns("/api/wx/**")
                .excludePathPatterns(securityIgnoreUrls.toArray(ignores));
        super.addInterceptors(registry);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedMethods("*")
                .allowedOrigins("*")
                .allowedHeaders("*");
        super.addCorsMappings(registry);
    }

}
