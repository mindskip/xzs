package com.alvis.exam.service.impl;

import com.alvis.exam.service.FileUpload;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.InputStream;

@Service
@AllArgsConstructor
public class FileUploadImpl implements FileUpload {


    @Override
    public String uploadFile(InputStream inputStream, long size, String extName) {
        return null;
    }
}
