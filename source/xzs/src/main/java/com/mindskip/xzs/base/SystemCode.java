package com.mindskip.xzs.base;

/**
 * @author 武汉思维跳跃科技有限公司
 */
public enum SystemCode {
    /**
     * OK
     */
    OK(1, "Success"),
    /**
     * AccessTokenError
     */
    AccessTokenError(400, "User login token is invalid"),
    /**
     * UNAUTHORIZED
     */
    UNAUTHORIZED(401, "User is not logged in"),
    /**
     * UNAUTHORIZED
     */
    AuthError(402, "Wrong user name or password"),
    /**
     * InnerError
     */
    InnerError(500, "Internal System Error"),
    /**
     * ParameterValidError
     */
    ParameterValidError(501, "Parameter validation error"),

    /**
     * AccessDenied
     */
    AccessDenied(502,"User does not have permission to access");

    int code;
    String message;

    SystemCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
