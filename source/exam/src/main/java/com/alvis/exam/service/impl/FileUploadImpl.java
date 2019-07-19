package com.alvis.exam.service.impl;

import com.alvis.exam.service.FileUpload;
import com.github.tobato.fastdfs.domain.fdfs.StorePath;
import com.github.tobato.fastdfs.service.FastFileStorageClient;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.InputStream;

@Service
@AllArgsConstructor
public class FileUploadImpl implements FileUpload {

    private final FastFileStorageClient fastFileStorageClient;

    @Override
    public String uploadFile(InputStream inputStream, long size, String extName) {
        StorePath storePath = fastFileStorageClient.uploadFile(inputStream, size, extName, null);
        return storePath.getFullPath();
    }
}
