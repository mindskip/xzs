package com.mindskip.xzs.viewmodel;

import com.mindskip.xzs.utility.ModelMapperSingle;
import org.modelmapper.ModelMapper;

/**
 * @author 武汉思维跳跃科技有限公司
 */

public class BaseVM {
    protected static ModelMapper modelMapper = ModelMapperSingle.Instance();


    public static ModelMapper getModelMapper() {
        return modelMapper;
    }

    public static void setModelMapper(ModelMapper modelMapper) {
        BaseVM.modelMapper = modelMapper;
    }
}
