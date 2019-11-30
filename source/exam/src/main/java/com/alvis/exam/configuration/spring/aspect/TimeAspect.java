package com.alvis.exam.configuration.spring.aspect;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
@Aspect
public class TimeAspect {

    //@Befor方法调用之前
    //@After()方法调用
    //@AfterThrowing方法调用之后
    //包围，覆盖前面三种
    @Around("execution(* com.alvis.exam.controller.student.UserController.*(..))") //表达式表示usercontroller里所有方法其他表达式可以查询切片表达式
    public Object handleControllerMethod(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("time aspect start");

        //可以获取到传入参数
        Object[]args=pjp.getArgs();
        for (Object arg: args) {
            System.out.println("arg is"+arg);
        }

        long start=new Date().getTime();
        //相当于filter里doFilter方法
        Object object=pjp.proceed();
        System.out.println("time aspect耗时"+(new Date().getTime()-start));

        System.out.println("time aspect end");
        return object;
    }
}
