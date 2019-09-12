package com.alvis.exam.service;

import com.alvis.exam.domain.Classes;
import com.alvis.exam.viewmodel.teacher.classes.ClassesPageRequestVM;
import com.github.pagehelper.PageInfo;

public interface ClassesService {

    PageInfo<Classes> page(ClassesPageRequestVM requestVM);
}
