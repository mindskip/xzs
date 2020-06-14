package com.alvis.exam.viewmodel.admin.file;

import lombok.Data;

import java.util.List;

@Data
public class UeditorConfigVM {
    private String imageActionName;
    private  String imageFieldName;
    private Long imageMaxSize;
    private List<String> imageAllowFiles;
    private boolean imageCompressEnable;
    private Integer imageCompressBorder;
    private String imageInsertAlign;
    private String imageUrlPrefix;
    private String imagePathFormat;
}
