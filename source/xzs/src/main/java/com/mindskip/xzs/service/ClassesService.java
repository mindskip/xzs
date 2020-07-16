package com.mindskip.xzs.service;

import com.mindskip.xzs.domain.Classes;

public interface ClassesService {

    Classes selectById(Integer id);

    int insertByFilter(Classes record);

    int updateByIdFilter(Classes record);


}
