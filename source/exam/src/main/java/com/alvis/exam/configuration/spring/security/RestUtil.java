package com.alvis.exam.configuration.spring.security;

import com.alvis.exam.base.RestResponse;
import com.alvis.exam.base.SystemCode;
import com.alvis.exam.utility.JsonUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author alvis
 */
class RestUtil {
    private static final Logger logger = LoggerFactory.getLogger(RestUtil.class);

    static boolean isJson(HttpServletRequest request) {
        String contentType = request.getContentType();
        return null != contentType && (contentType.equals(MediaType.APPLICATION_JSON_UTF8_VALUE) || contentType.equals(MediaType.APPLICATION_JSON_VALUE));
    }

    static void response(HttpServletResponse response, SystemCode systemCode) {
        response(response, systemCode.getCode(), systemCode.getMessage());
    }

    static void response(HttpServletResponse response, int systemCode, String msg) {
        try {
            RestResponse res = new RestResponse<>(systemCode, msg);
            String resStr = JsonUtil.toJsonStr(res);
            response.setContentType("application/json;charset=utf-8");
            response.getWriter().write(resStr);
        } catch (IOException e) {
            logger.error(e.getMessage(), e);
        }
    }
}
