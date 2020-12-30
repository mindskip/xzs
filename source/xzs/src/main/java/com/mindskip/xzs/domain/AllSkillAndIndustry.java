package com.mindskip.xzs.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AllSkillAndIndustry {
    private List<Skill> skills;
    private List<Industry> industries;
}
