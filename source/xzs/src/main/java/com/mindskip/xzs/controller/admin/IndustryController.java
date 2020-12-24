package com.mindskip.xzs.controller.admin;


import com.github.pagehelper.PageInfo;
import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.domain.Industry;
import com.mindskip.xzs.service.IndustryService;
import com.mindskip.xzs.utility.PageInfoHelper;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryEditRequestVM;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryPageRequestVM;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryResponseVM;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController("AdminIndustryController")
@RequestMapping(value = "/api/admin")
@AllArgsConstructor
public class IndustryController extends BaseApiController {

    private final IndustryService industryService;

    @RequestMapping(value = "/industry/list", method = RequestMethod.POST)
    public RestResponse<List<Industry>> list() {
        List<Industry> industries = industryService.allIndustry();
        return RestResponse.ok(industries);
    }

    @RequestMapping(value = "/industry/page", method = RequestMethod.POST)
    public RestResponse<PageInfo<IndustryResponseVM>> pageList(@RequestBody IndustryPageRequestVM model) {
        PageInfo<Industry> pageInfo = industryService.page(model);
        PageInfo<IndustryResponseVM> page = PageInfoHelper.copyMap(pageInfo, e -> modelMapper.map(e, IndustryResponseVM.class));
        return RestResponse.ok(page);
    }

    @RequestMapping(value = "/industry/edit", method = RequestMethod.POST)
    public RestResponse edit(@RequestBody @Valid IndustryEditRequestVM model) {
        Industry industry = modelMapper.map(model, Industry.class);
        if (model.getId() == null) {
            industryService.insertByFilter(industry);
        } else {
            industryService.updateByIdFilter(industry);
        }
        return RestResponse.ok();
    }

    @RequestMapping(value = "/industry/select/{id}", method = RequestMethod.POST)
    public RestResponse<IndustryEditRequestVM> select(@PathVariable Integer id) {
        Industry industry = industryService.selectById(id);
        IndustryEditRequestVM vm = modelMapper.map(industry, IndustryEditRequestVM.class);
        return RestResponse.ok(vm);
    }

    @RequestMapping(value = "/industry/delete/{id}", method = RequestMethod.POST)
    public RestResponse delete(@PathVariable Integer id) {
        industryService.deleteById(id);
        return RestResponse.ok();
    }
}
