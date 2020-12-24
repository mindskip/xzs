package com.mindskip.xzs.controller.admin;


import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.domain.Skill;
import com.mindskip.xzs.service.SkillService;
import com.mindskip.xzs.utility.PageInfoHelper;
import com.mindskip.xzs.viewmodel.admin.skill.SkillEditRequestVM;
import com.mindskip.xzs.viewmodel.admin.skill.SkillPageRequestVM;
import com.mindskip.xzs.viewmodel.admin.skill.SkillResponseVM;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController("AdminSkillController")
@RequestMapping(value = "/api/admin")
@AllArgsConstructor
public class SkillController extends BaseApiController {

    private final SkillService skillService;

    @RequestMapping(value = "/skill/list", method = RequestMethod.POST)
    public RestResponse<List<Skill>> list() {
        List<Skill> industries = skillService.allSkill();
        return RestResponse.ok(industries);
    }

    @RequestMapping(value = "/skill/page", method = RequestMethod.POST)
    public RestResponse<PageInfo<SkillResponseVM>> pageList(@RequestBody SkillPageRequestVM model) {
        PageInfo<Skill> pageInfo = skillService.page(model);
        PageInfo<SkillResponseVM> page = PageInfoHelper.copyMap(pageInfo, e -> modelMapper.map(e, SkillResponseVM.class));
        return RestResponse.ok(page);
    }

    @RequestMapping(value = "/skill/edit", method = RequestMethod.POST)
    public RestResponse edit(@RequestBody @Valid SkillEditRequestVM model) {
        Skill skill = modelMapper.map(model, Skill.class);
        if (model.getId() == null) {
            skillService.insertByFilter(skill);
        } else {
            skillService.updateByIdFilter(skill);
        }
        return RestResponse.ok();
    }

    @RequestMapping(value = "/skill/select/{id}", method = RequestMethod.POST)
    public RestResponse<SkillEditRequestVM> select(@PathVariable Integer id) {
        Skill skill = skillService.selectById(id);
        SkillEditRequestVM vm = modelMapper.map(skill, SkillEditRequestVM.class);
        return RestResponse.ok(vm);
    }

    @RequestMapping(value = "/skill/delete/{id}", method = RequestMethod.POST)
    public RestResponse delete(@PathVariable Integer id) {
        skillService.deleteById(id);
        return RestResponse.ok();
    }
}
