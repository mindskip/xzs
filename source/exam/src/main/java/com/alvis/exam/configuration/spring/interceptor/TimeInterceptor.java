package com.alvis.exam.configuration.spring.interceptor;

import com.alvis.exam.context.WebContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Component
@Slf4j
public class TimeInterceptor implements HandlerInterceptor {

    @Autowired
    protected WebContext webContext;

    //控制器方法调用之前
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        log.info("preHandle");
        log.info("进入方法"+((HandlerMethod)o).getMethod().getName());
        httpServletRequest.setAttribute("startTime",new Date().getTime());
        //是否调用后面的方法调用是true
        return true;
    }
    //控制器方法被调用
    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        log.info("postHandle");
        Long start= (Long) httpServletRequest.getAttribute("startTime");
        log.info("time interceptor耗时"+(new Date().getTime()-start));
    }
    //控制器方法完成之后
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

        log.info("exception is"+e);
        webContext.clean();
        log.info("afterCompletion 清空线程===================================");
    }
}