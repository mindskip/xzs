package com.mindskip.xzs.viewmodel;

import com.mindskip.xzs.utility.ModelMapperSingle;
import lombok.Data;
import org.modelmapper.ModelMapper;

/**
 * @author 武汉思维跳跃科技有限公司
 */

@Data
public class BaseVM {
    protected static ModelMapper modelMapper = ModelMapperSingle.Instance();


}
