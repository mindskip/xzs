package com.mindskip.xzs.configuration.application;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @version 3.3.0
 * @description: The type Base api controller.
 * Copyright (C), 2019-2025, 武汉思维跳跃科技有限公司
 * @date 2021 /5/26 10:45
 */
@Component
public class ApplicationContextProvider implements ApplicationContextAware {
    private static ApplicationContext context;

    private ApplicationContextProvider() {
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }

    /**
     * Gets bean.
     *
     * @param <T>    the type parameter
     * @param aClass the a class
     * @return the bean
     */
    public static <T> T getBean(Class<T> aClass) {
        return context.getBean(aClass);
    }

    /**
     * Gets bean.
     *
     * @param <T>  the type parameter
     * @param name the name
     * @return the bean
     */
    @SuppressWarnings("unchecked")
    public static <T> T getBean(String name) {
        return (T) context.getBean(name);
    }
}

