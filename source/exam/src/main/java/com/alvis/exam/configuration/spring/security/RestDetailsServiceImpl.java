package com.alvis.exam.configuration.spring.security;

import com.alvis.exam.context.WebContext;
import com.alvis.exam.domain.enums.RoleEnum;
import com.alvis.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * @author :  Alvis
 * Description :  验证通过之后,第二、三...请求，会调用此类
 * Creation Date:  2018-05-02 4:32 PM
 */

@Component
public class RestDetailsServiceImpl implements UserDetailsService {

    private final UserService userService;
    private final WebContext webContext;

    @Autowired
    public RestDetailsServiceImpl(UserService userService, WebContext webContext) {
        this.userService = userService;
        this.webContext = webContext;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        com.alvis.exam.domain.User user = userService.getUserByUserName(username);

        if (user == null) {
            throw new UsernameNotFoundException("Username  not found.");
        }

        ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(RoleEnum.fromCode(user.getRole()).getRoleName()));

        webContext.setCurrentUser(user);
        User authUser = new User(user.getUserName(), user.getPassword(), grantedAuthorities);
        return authUser;
    }
}
