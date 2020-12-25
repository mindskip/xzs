package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.Industry;
import com.mindskip.xzs.domain.Subject;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryEditRequestVM;
import com.mindskip.xzs.viewmodel.admin.industry.IndustryPageRequestVM;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IndustryMapper extends BaseMapper<Industry> {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry record);

    int insertSelective(Industry record);

    Industry selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry record);

    int updateByPrimaryKey(Industry record);

    List<Industry> page(IndustryPageRequestVM requestVM);

    List<Industry> allIndustry();

}