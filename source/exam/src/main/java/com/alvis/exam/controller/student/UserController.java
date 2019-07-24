package com.alvis.exam.controller.student;

import com.alvis.exam.base.BaseApiController;
import com.alvis.exam.base.RestResponse;
import com.alvis.exam.domain.User;
import com.alvis.exam.domain.enums.RoleEnum;
import com.alvis.exam.domain.enums.UserStatusEnum;
import com.alvis.exam.service.AuthenticationService;
import com.alvis.exam.service.UserService;
import com.alvis.exam.viewmodel.student.user.UserRegisterVM;
import com.alvis.exam.viewmodel.student.user.UserResponseVM;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.UUID;


/**
 * @author alvis
 */
@RestController("StudentUserController")
@RequestMapping(value = "/api/student/user")
@AllArgsConstructor
public class UserController extends BaseApiController {

    private final UserService userService;
    private final AuthenticationService authenticationService;


    @RequestMapping(value = "/current", method = RequestMethod.POST)
    public RestResponse<UserResponseVM> current() {
        User user = getCurrentUser();
        UserResponseVM userVm = UserResponseVM.from(user);
        return RestResponse.ok(userVm);
    }


    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public RestResponse register(@RequestBody @Valid UserRegisterVM model) {
        User existUser = userService.getUserByUserName(model.getUserName());
        if (null != existUser) {
            return new RestResponse<>(2, "用户已存在");
        }
        User user = modelMapper.map(model, User.class);
        String encodePwd = authenticationService.pwdEncode(model.getPassword());
        user.setUserUuid(UUID.randomUUID().toString());
        user.setPassword(encodePwd);
        user.setRole(RoleEnum.STUDENT.getCode());
        user.setStatus(UserStatusEnum.Enable.getCode());
        user.setLastActiveTime(new Date());
        user.setCreateTime(new Date());
        user.setDeleted(false);
        userService.insertByFilter(user);
        return RestResponse.ok();
    }
}
