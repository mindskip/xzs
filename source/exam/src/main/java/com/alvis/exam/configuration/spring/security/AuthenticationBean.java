package com.alvis.exam.configuration.spring.security;

import lombok.Data;

/**
 * @author alvis
 */

@Data
public class AuthenticationBean {
    private String userName;
    private String password;
    private boolean remember;
}
