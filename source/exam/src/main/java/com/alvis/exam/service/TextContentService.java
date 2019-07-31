package com.alvis.exam.service;

import com.alvis.exam.domain.TextContent;

import java.util.Date;
import java.util.List;
import java.util.function.Function;

public interface TextContentService extends BaseService<TextContent> {

    <T, R> TextContent insertContentMapperByStream(List<T> list, Date now, Function<? super T, ? extends R> mapper);

    <T, R> TextContent updateContentMapperByContent(TextContent textContent, List<T> list, Function<? super T, ? extends R> mapper);

}
