package com.alvis.exam.base;


import com.alvis.exam.configuration.spring.security.AuthUser;
import com.alvis.exam.domain.User;
import com.alvis.exam.utility.ModelMapperSingle;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * @author alvis
 */
public class BaseApiController {
    protected final static String DEFAULT_PAGE_SIZE = "10";
    protected final static ModelMapper modelMapper = ModelMapperSingle.Instance();

    protected User getCurrentUser() {
        AuthUser authUser = (AuthUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return authUser.getUser();
    }
}
