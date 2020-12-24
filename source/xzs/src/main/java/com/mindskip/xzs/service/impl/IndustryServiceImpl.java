package com.mindskip.xzs.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.domain.Industry;
import com.mindskip.xzs.repository.IndustryMapper;
import com.mindskip.xzs.service.IndustryService;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryPageRequestVM;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 14
 * @Description:
 */
@Service
public class IndustryServiceImpl extends BaseServiceImpl<Industry> implements IndustryService {
    private final IndustryMapper industryMapper;
    private final static String CACHE_NAME = "xzs:industry";

    public IndustryServiceImpl(IndustryMapper industryMapper) {
        super(industryMapper);
        this.industryMapper = industryMapper;
    }

    @Override
    @Cacheable(value = CACHE_NAME, key = "#id", unless = "#result == null")
    public Industry selectById(Integer id) {
        return super.selectById(id);
    }

    @Override
    public PageInfo<Industry> page(IndustryPageRequestVM requestVM) {
        return PageHelper.startPage(requestVM.getPageIndex(), requestVM.getPageSize(), "id desc").doSelectPageInfo(() ->
                industryMapper.page(requestVM)
        );
    }

    @Override
    public List<Industry> allIndustry() {
        return industryMapper.allIndustry();
    }
}
