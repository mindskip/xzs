package com.mindskip.xzs.controller.wx.student;

import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.configuration.property.SystemConfig;
import com.mindskip.xzs.controller.wx.BaseWXApiController;
import com.mindskip.xzs.domain.UserToken;
import com.mindskip.xzs.domain.enums.UserStatusEnum;
import com.mindskip.xzs.service.AuthenticationService;
import com.mindskip.xzs.service.UserService;
import com.mindskip.xzs.service.UserTokenService;
import com.mindskip.xzs.utility.WxUtil;
import com.mindskip.xzs.viewmodel.wx.student.user.BindInfo;
import com.mindskip.xzs.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;


@Controller("WXStudentAuthController")
@RequestMapping(value = "/api/wx/student/auth")
@ResponseBody
public class AuthController extends BaseWXApiController {

    private final SystemConfig systemConfig;
    private final AuthenticationService authenticationService;
    private final UserService userService;
    private final UserTokenService userTokenService;

    @Autowired
    public AuthController(SystemConfig systemConfig, AuthenticationService authenticationService, UserService userService, UserTokenService userTokenService) {
        this.systemConfig = systemConfig;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.userTokenService = userTokenService;
    }

    @RequestMapping(value = "/bind", method = RequestMethod.POST)
    public RestResponse bind(@Valid BindInfo model) {
        User user = userService.getUserByUserName(model.getUserName());
        if (user == null) {
            return RestResponse.fail(2, "用户名或密码错误");
        }
        boolean result = authenticationService.authUser(user, model.getUserName(), model.getPassword());
        if (!result) {
            return RestResponse.fail(2, "用户名或密码错误");
        }
        UserStatusEnum userStatusEnum = UserStatusEnum.fromCode(user.getStatus());
        if (UserStatusEnum.Disable == userStatusEnum) {
            return RestResponse.fail(3, "用户被禁用");
        }
        String code = model.getCode();
        String openid = WxUtil.getOpenId(systemConfig.getWx().getAppid(), systemConfig.getWx().getSecret(), code);
        if (null == openid) {
            return RestResponse.fail(4, "获取微信OpenId失败");
        }
        user.setWxOpenId(openid);
        UserToken userToken = userTokenService.bind(user);
        return RestResponse.ok(userToken.getToken());
    }


    @RequestMapping(value = "/checkBind", method = RequestMethod.POST)
    public RestResponse checkBind(@Valid @NotBlank String code) {
        String openid = WxUtil.getOpenId(systemConfig.getWx().getAppid(), systemConfig.getWx().getSecret(), code);
        if (null == openid) {
            return RestResponse.fail(3, "获取微信OpenId失败");
        }
        UserToken userToken = userTokenService.checkBind(openid);
        if (null != userToken) {
            return RestResponse.ok(userToken.getToken());
        }
        return RestResponse.fail(2, "用户未绑定");
    }


    @RequestMapping(value = "/unBind", method = RequestMethod.POST)
    public RestResponse unBind() {
        UserToken userToken = getUserToken();
        userTokenService.unBind(userToken);
        return RestResponse.ok();
    }
}
