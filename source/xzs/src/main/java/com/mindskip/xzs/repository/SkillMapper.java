package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.Skill;
import com.mindskip.xzs.viewmodel.admin.skill.SkillPageRequestVM;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SkillMapper extends BaseMapper<Skill> {
    int deleteByPrimaryKey(Integer id);

    int insert(Skill record);

    int insertSelective(Skill record);

    Skill selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Skill record);

    int updateByPrimaryKey(Skill record);

    List<Skill> page(SkillPageRequestVM requestVM);

    List<Skill> allSkill();

}