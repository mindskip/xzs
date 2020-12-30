package com.mindskip.xzs.viewmodel.student.exam;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class EachPaperProductionVM {
    private Integer difficult;
    private Integer industryId;
    private Integer skillId;

    @NotNull
    private Integer eachNumber;
}
