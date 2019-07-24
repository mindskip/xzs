package com.alvis.exam.domain.enums;


import java.util.HashMap;
import java.util.Map;

public enum DeletedEnum {

    Normal(1, "未删除"),
    Deleted(2, "已删除");

    int code;
    String name;

    DeletedEnum(int code, String name) {
        this.code = code;
        this.name = name;
    }

    private static final Map<Integer, DeletedEnum> keyMap = new HashMap<>();

    static {
        for (DeletedEnum item : DeletedEnum.values()) {
            keyMap.put(item.getCode(), item);
        }
    }

    public static DeletedEnum fromCode(Integer code) {
        return keyMap.get(code);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
