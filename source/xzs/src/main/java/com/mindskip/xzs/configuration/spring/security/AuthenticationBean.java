package com.mindskip.xzs.configuration.spring.security;

import lombok.Data;

/**
 * @author 武汉思维跳跃科技有限公司
 */

@Data
public class AuthenticationBean {
    private String userName;
    private String password;
    private boolean remember;
}
