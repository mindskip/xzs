package com.mindskip.xzs.configuration.property;

/**
 * @version 3.3.0
 * @description: The type Cookie config.
 * Copyright (C), 2019-2025, 武汉思维跳跃科技有限公司
 * @date 2021 /5/26 10:45
 */
public class CookieConfig {

    /**
     * Gets name.
     *
     * @return the name
     */
    public static String getName() {
        return "xzs";
    }

    /**
     * Gets interval.
     *
     * @return the interval
     */
    public static Integer getInterval() {
        return 30 * 24 * 60 * 60;
    }
}
