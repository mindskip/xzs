package com.mindskip.xzs.viewmodel.student.exam;

import com.mindskip.xzs.base.BasePage;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ExaminationProductionVM extends BasePage {
    @NotNull
    private int questionNumber;

    private Integer difficult;
    private List<Integer> skillIds;
    private Integer industryId;

}
