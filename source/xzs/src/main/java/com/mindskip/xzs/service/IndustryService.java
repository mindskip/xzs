package com.mindskip.xzs.service;

import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.domain.Industry;
import com.mindskip.xzs.domain.Subject;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryPageRequestVM;

import java.util.List;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 14
 * @Description:
 */
public interface IndustryService extends BaseService<Industry> {
    PageInfo<Industry> page(IndustryPageRequestVM requestVM);

    List<Industry> allIndustry();
}
