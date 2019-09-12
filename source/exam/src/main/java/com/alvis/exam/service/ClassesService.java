package com.alvis.exam.service;

import com.alvis.exam.domain.Classes;
import com.alvis.exam.viewmodel.teacher.classes.ClassesPageRequestVM;
import com.github.pagehelper.PageInfo;

public interface ClassesService {

    Classes selectById(Integer id);

    int insertByFilter(Classes record);

    int updateByIdFilter(Classes record);

    PageInfo<Classes> page(ClassesPageRequestVM requestVM);

}
