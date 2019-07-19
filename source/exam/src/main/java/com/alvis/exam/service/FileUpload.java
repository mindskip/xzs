package com.alvis.exam.service;

import com.github.tobato.fastdfs.domain.fdfs.MetaData;

import java.io.InputStream;
import java.util.Set;

public interface FileUpload {

    String uploadFile(InputStream inputStream, long size, String extName);

}
