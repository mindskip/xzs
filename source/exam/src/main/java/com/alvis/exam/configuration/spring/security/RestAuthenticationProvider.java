package com.alvis.exam.configuration.spring.security;


import com.alvis.exam.context.WebContext;
import com.alvis.exam.domain.enums.RoleEnum;
import com.alvis.exam.domain.enums.UserStatusEnum;
import com.alvis.exam.service.AuthenticationService;
import com.alvis.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * 登录用户名密码验证
 *
 * @author :  Alvis
 * Description :  身份验证
 * Creation Date:  2018-05-02 5:00 PM
 */

@Component
public class RestAuthenticationProvider implements AuthenticationProvider {

    private final AuthenticationService authenticationService;
    private final UserService userService;
    private final WebContext webContext;

    @Autowired
    public RestAuthenticationProvider(AuthenticationService authenticationService, UserService userService, WebContext webContext) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.webContext = webContext;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = (String) authentication.getCredentials();

        com.alvis.exam.domain.User user = userService.getUserByUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户名或密码错误");
        }

        boolean result = authenticationService.authUser(user, username, password);
        if (!result) {
            throw new BadCredentialsException("用户名或密码错误");
        }

        UserStatusEnum userStatusEnum = UserStatusEnum.fromCode(user.getStatus());
        if (UserStatusEnum.Disable == userStatusEnum) {
            throw new LockedException("用户被禁用");
        }

        webContext.setCurrentUser(user);

        ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(RoleEnum.fromCode(user.getRole()).getRoleName()));

        User authUser = new User(user.getUserName(), user.getPassword(), grantedAuthorities);
        return new UsernamePasswordAuthenticationToken(authUser, authUser.getPassword(), authUser.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return true;
    }
}
