package com.mindskip.xzs.viewmodel.admin.file;

import lombok.Data;

@Data
public class UploadResultVM {
    private String original;
    private String name;
    private String url;
    private Long size;
    private String type;
    private String state;
}
