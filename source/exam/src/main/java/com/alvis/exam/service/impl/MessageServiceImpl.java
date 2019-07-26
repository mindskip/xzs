package com.alvis.exam.service.impl;

import com.alvis.exam.domain.Message;
import com.alvis.exam.domain.MessageUser;
import com.alvis.exam.repository.MessageMapper;
import com.alvis.exam.repository.MessageUserMapper;
import com.alvis.exam.service.MessageService;
import com.alvis.exam.viewmodel.admin.message.MessagePageRequestVM;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageMapper messageMapper;
    private final MessageUserMapper messageUserMapper;

    @Override
    public PageInfo<Message> page(MessagePageRequestVM requestVM) {
        return PageHelper.startPage(requestVM.getPageIndex(), requestVM.getPageSize(), "id desc").doSelectPageInfo(() ->
                messageMapper.page(requestVM)
        );
    }

    @Override
    public List<MessageUser> selectByMessageIds(List<Integer> ids) {
        return messageUserMapper.selectByMessageIds(ids);
    }

    @Override
    @Transactional
    public void sendMessage(Message message, List<MessageUser> messageUsers) {
        messageMapper.insertSelective(message);
        messageUsers.forEach(d -> d.setMessageId(message.getId()));
        messageUserMapper.inserts(messageUsers);
    }


}
