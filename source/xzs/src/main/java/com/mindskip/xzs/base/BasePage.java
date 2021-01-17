package com.mindskip.xzs.base;


/**
 * @author 武汉思维跳跃科技有限公司
 */

public class BasePage {

    private Integer pageIndex;

    private Integer pageSize;

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
