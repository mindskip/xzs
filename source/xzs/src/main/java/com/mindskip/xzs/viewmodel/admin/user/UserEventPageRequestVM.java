package com.mindskip.xzs.viewmodel.admin.user;

import com.mindskip.xzs.base.BasePage;
import lombok.Data;

/**
 * @author 武汉思维跳跃科技有限公司
 */

@Data
public class UserEventPageRequestVM extends BasePage {

    private Integer userId;

    private String userName;

}
