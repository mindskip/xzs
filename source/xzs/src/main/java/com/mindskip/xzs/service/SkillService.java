package com.mindskip.xzs.service;

import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.domain.Skill;
import com.mindskip.xzs.viewmodel.admin.skill.SkillPageRequestVM;

import java.util.List;

/**
 * @Auther: Kevin Cui
 * @Date: 2020/12/24 14
 * @Description:
 */
public interface SkillService extends BaseService<Skill> {
    PageInfo<Skill> page(SkillPageRequestVM requestVM);

    List<Skill> allSkill();
}
