package com.alvis.exam.configuration.property;

public class CookieConfig {

    public static String getName() {
        return "exam";
    }

    public static Integer getInterval() {
        return 30 * 24 * 60 * 60;
    }
}
