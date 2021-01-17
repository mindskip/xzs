package com.mindskip.xzs.viewmodel.admin.message;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class MessageSendVM {

    @NotBlank
    private String title;
    @NotBlank
    private String content;

    @Size(min = 1, message = "接收人不能为空")
    private List<Integer> receiveUserIds;
}
