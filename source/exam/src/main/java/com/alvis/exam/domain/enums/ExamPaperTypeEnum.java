package com.alvis.exam.domain.enums;

import java.util.HashMap;
import java.util.Map;

public enum ExamPaperTypeEnum {

    Fixed(1, "固定试卷"),
    Temp(2, "临时时间"),
    Classes(3, "班级试卷"),
    TimeLimit(4, "时段试卷"),
    Push(5, "推送试卷"),
    Task(6, "任务试卷");

    int code;
    String name;

    ExamPaperTypeEnum(int code, String name) {
        this.code = code;
        this.name = name;
    }


    private static final Map<Integer, ExamPaperTypeEnum> keyMap = new HashMap<>();

    static {
        for (ExamPaperTypeEnum item : ExamPaperTypeEnum.values()) {
            keyMap.put(item.getCode(), item);
        }
    }

    public static ExamPaperTypeEnum fromCode(Integer code) {
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
