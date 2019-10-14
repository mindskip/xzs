package com.alvis.exam.service.impl;

import com.alvis.exam.domain.Subject;
import com.alvis.exam.repository.SubjectMapper;
import com.alvis.exam.service.SubjectService;
import com.alvis.exam.viewmodel.admin.education.SubjectPageRequestVM;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectServiceImpl extends BaseServiceImpl<Subject> implements SubjectService {

    private final static String CACHE_NAME = "Subject";
    private final SubjectMapper subjectMapper;

    @Autowired
    public SubjectServiceImpl(SubjectMapper subjectMapper) {
        super(subjectMapper);
        this.subjectMapper = subjectMapper;
    }

    @Override
    @Cacheable(value = CACHE_NAME, key = "#id", unless = "#result == null")
    public Subject selectById(Integer id) {
        return super.selectById(id);
    }

    @Override
    @CacheEvict(value = CACHE_NAME, key = "#record.id")
    public int updateByIdFilter(Subject record) {
        return super.updateByIdFilter(record);
    }

    @Override
    public List<Subject> getSubjectByLevel(Integer level) {
        return subjectMapper.getSubjectByLevel(level);
    }

    @Override
    public List<Subject> allSubject() {
        return subjectMapper.allSubject();
    }

    @Override
    public Integer levelBySubjectId(Integer id) {
        return this.selectById(id).getLevel();
    }

    @Override
    public PageInfo<Subject> page(SubjectPageRequestVM requestVM) {
        return PageHelper.startPage(requestVM.getPageIndex(), requestVM.getPageSize(), "id desc").doSelectPageInfo(() ->
                subjectMapper.page(requestVM)
        );
    }

}
