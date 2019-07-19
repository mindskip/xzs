package com.alvis.exam.utility;

import com.github.pagehelper.PageInfo;

import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author alvis
 */
public class PageInfoHelper {

    public static <T, J> PageInfo<J> copyMap(PageInfo<T> source, Function<? super T, ? extends J> mapper) {
        PageInfo<J> newPage = new PageInfo<>();
        newPage.setPageNum(source.getPageNum());
        newPage.setPageSize(source.getPageSize());
        newPage.setSize(source.getSize());
        newPage.setStartRow(source.getStartRow());
        newPage.setEndRow(source.getEndRow());
        newPage.setTotal(source.getTotal());
        newPage.setPages(source.getPages());
        newPage.setList(source.getList().stream().map(mapper).collect(Collectors.toList()));
        newPage.setPrePage(source.getPrePage());
        newPage.setNextPage(source.getNextPage());
        newPage.setIsFirstPage(source.isIsFirstPage());
        newPage.setIsLastPage(source.isIsLastPage());
        newPage.setHasPreviousPage(source.isHasPreviousPage());
        newPage.setHasNextPage(source.isHasNextPage());
        newPage.setNavigatePages(source.getNavigatePages());
        newPage.setNavigatepageNums(source.getNavigatepageNums());
        newPage.setNavigateFirstPage(source.getNavigateFirstPage());
        newPage.setNavigateLastPage(source.getNavigateLastPage());
        return newPage;
    }
}
