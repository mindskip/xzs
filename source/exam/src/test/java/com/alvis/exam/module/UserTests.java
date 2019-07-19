package com.alvis.exam.module;

import com.alvis.exam.ExamApplicationTests;
import com.alvis.exam.domain.User;
import com.alvis.exam.service.UserService;
import com.alvis.exam.viewmodel.admin.user.UserPageRequestVM;
import com.github.pagehelper.PageInfo;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ExamApplicationTests.class)
public class UserTests {

    @Autowired
    private UserService userService;

    @Test
    public void userPageListTest() {
        User user = userService.getUserById(2);
        UserPageRequestVM requestVM = new UserPageRequestVM();
        requestVM.setUserName("李");
        requestVM.setPageIndex(0);
        requestVM.setPageSize(2);
        PageInfo<User> pageInfo = userService.userPage(requestVM);
        Assert.assertNotEquals(0, pageInfo.getTotal());
    }


}
