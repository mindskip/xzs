package com.alvis.exam.configuration.spring.security;

import com.alvis.exam.base.SystemCode;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author alvis
 */
@Component
public class FormAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        /*RestUtil.response(response, SystemCode.AuthError.getCode(), exception.getMessage());*/
        RestUtil.response(response, SystemCode.AuthError.getCode(), SystemCode.AuthError.getMessage());
    }
}
