package com.mindskip.xzs.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.domain.Skill;
import com.mindskip.xzs.repository.SkillMapper;
import com.mindskip.xzs.service.SkillService;
import com.mindskip.xzs.viewmodel.admin.skill.SkillPageRequestVM;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 14
 * @Description:
 */
@Service
public class SkillServiceImpl extends BaseServiceImpl<Skill> implements SkillService {
    private final SkillMapper skillMapper;
    private final static String CACHE_NAME = "xzs:skill";

    public SkillServiceImpl(SkillMapper skillMapper) {
        super(skillMapper);
        this.skillMapper = skillMapper;
    }

    @Override
    @Cacheable(value = CACHE_NAME, key = "#id", unless = "#result == null")
    public Skill selectById(Integer id) {
        return super.selectById(id);
    }

    @Override
    public PageInfo<Skill> page(SkillPageRequestVM requestVM) {
        return PageHelper.startPage(requestVM.getPageIndex(), requestVM.getPageSize(), "id desc").doSelectPageInfo(() ->
                skillMapper.page(requestVM)
        );
    }

    @Override
    public List<Skill> allSkill() {
        return skillMapper.allSkill();
    }
}
