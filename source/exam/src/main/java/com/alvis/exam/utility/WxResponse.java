package com.alvis.exam.utility;

import lombok.Data;

import java.io.Serializable;

@Data
public class WxResponse implements Serializable {
    private static final long serialVersionUID = -8496869159673561976L;
    private String session_key;
    private String openid;
}
