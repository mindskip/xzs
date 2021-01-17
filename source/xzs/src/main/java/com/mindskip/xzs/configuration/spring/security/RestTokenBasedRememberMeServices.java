package com.mindskip.xzs.configuration.spring.security;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;

import javax.servlet.http.HttpServletRequest;

/**
 * 记住我，Cookie
 * @author 武汉思维跳跃科技有限公司
 */
public class RestTokenBasedRememberMeServices extends TokenBasedRememberMeServices {
    public RestTokenBasedRememberMeServices(String key, UserDetailsService userDetailsService) {
        super(key, userDetailsService);
    }

    @Override
    protected boolean rememberMeRequested(HttpServletRequest request, String parameter) {
        return (boolean) request.getAttribute(DEFAULT_PARAMETER);
    }

}
