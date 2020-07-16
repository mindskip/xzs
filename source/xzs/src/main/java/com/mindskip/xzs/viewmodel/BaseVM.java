package com.mindskip.xzs.viewmodel;

import com.mindskip.xzs.utility.ModelMapperSingle;
import lombok.Data;
import org.modelmapper.ModelMapper;

/**
 * @author alvis
 */

@Data
public class BaseVM {
    protected static ModelMapper modelMapper = ModelMapperSingle.Instance();


}
