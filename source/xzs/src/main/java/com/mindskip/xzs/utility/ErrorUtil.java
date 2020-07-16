package com.mindskip.xzs.utility;

public class ErrorUtil {
    public static String parameterErrorFormat(String field, String msg) {
        return "【" + field + " : " + msg + "】";
    }
}
