package com.mindskip.xzs.service;

import com.mindskip.xzs.domain.Subject;
import com.mindskip.xzs.viewmodel.admin.education.SubjectPageRequestVM;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface SubjectService extends BaseService<Subject> {

    List<Subject> getSubjectByLevel(Integer level);

    List<Subject> allSubject();

    Integer levelBySubjectId(Integer id);

    PageInfo<Subject> page(SubjectPageRequestVM requestVM);
}
