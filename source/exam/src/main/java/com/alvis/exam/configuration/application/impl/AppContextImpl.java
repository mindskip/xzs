package com.alvis.exam.configuration.application.impl;

import com.alvis.exam.configuration.application.AppContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

/**
 * @author alvis
 */
@Component
public class AppContextImpl implements AppContext {

    private final Environment environment;

    @Autowired
    public AppContextImpl(Environment environment) {
        this.environment = environment;
    }

    @Override
    public boolean isDebug() {
        String activeProfile = this.environment.getActiveProfiles()[0];
        return "dev".equals(activeProfile);
    }
}
