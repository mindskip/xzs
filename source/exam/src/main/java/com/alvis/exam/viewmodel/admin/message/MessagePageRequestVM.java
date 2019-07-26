package com.alvis.exam.viewmodel.admin.message;

import com.alvis.exam.base.BasePage;
import lombok.Data;

@Data
public class MessagePageRequestVM extends BasePage {
    private String sendUserName;
}
