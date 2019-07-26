package com.alvis.exam.service;

import com.alvis.exam.domain.Message;
import com.alvis.exam.domain.MessageUser;
import com.alvis.exam.viewmodel.admin.message.MessagePageRequestVM;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface MessageService {

    PageInfo<Message> page(MessagePageRequestVM requestVM);

    List<MessageUser> selectByMessageIds(List<Integer> ids);
}
