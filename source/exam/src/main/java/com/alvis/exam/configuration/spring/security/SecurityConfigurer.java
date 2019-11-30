package com.alvis.exam.configuration.spring.security;

import com.alvis.exam.configuration.property.CookieConfig;
import com.alvis.exam.configuration.property.SystemConfig;
import com.alvis.exam.domain.enums.RoleEnum;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;
import java.util.List;


/**
 * @author alvis
 */

@Configuration
@EnableWebSecurity
public class SecurityConfigurer {

    @Configuration
    @AllArgsConstructor
    public static class FormLoginWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

        private final SystemConfig systemConfig;
        private final LoginAuthenticationEntryPoint restAuthenticationEntryPoint;
        private final RestAuthenticationProvider restAuthenticationProvider;
        private final RestDetailsServiceImpl formDetailsService;
        private final RestAuthenticationSuccessHandler restAuthenticationSuccessHandler;
        private final RestAuthenticationFailureHandler restAuthenticationFailureHandler;
        private final RestLogoutSuccessHandler restLogoutSuccessHandler;
        private final RestAccessDeniedHandler restAccessDeniedHandler;

        /**
         * @param http http
         * @throws Exception exception
         *                   csrf is the from submit get method
         */
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            List<String> securityIgnoreUrls = systemConfig.getSecurityIgnoreUrls();
            String[] ignores = new String[securityIgnoreUrls.size()];
            http
                    .addFilterAt(authenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                    .exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint)
                    .and().authenticationProvider(restAuthenticationProvider)
                    .authorizeRequests()
                    .antMatchers(securityIgnoreUrls.toArray(ignores)).permitAll()
                    .antMatchers("/api/admin/**").hasRole(RoleEnum.ADMIN.getName())
                    .antMatchers("/api/student/**").hasRole(RoleEnum.STUDENT.getName())
                    .anyRequest().permitAll()
                    .and().exceptionHandling().accessDeniedHandler(restAccessDeniedHandler)
                    .and().formLogin().successHandler(restAuthenticationSuccessHandler).failureHandler(restAuthenticationFailureHandler)
                    .and().logout().logoutUrl("/api/user/logout").logoutSuccessHandler(restLogoutSuccessHandler).invalidateHttpSession(true)
                    .and().rememberMe().key(CookieConfig.getName()).tokenValiditySeconds(CookieConfig.getInterval()).userDetailsService(formDetailsService)
                    .and().csrf().disable()
                    .cors();
        }


        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
            final CorsConfiguration configuration = new CorsConfiguration();
            configuration.setMaxAge(3600L);
            configuration.setAllowedOrigins(Collections.singletonList("*"));
            configuration.setAllowedMethods(Collections.singletonList("*"));
            configuration.setAllowCredentials(true);
            configuration.setAllowedHeaders(Collections.singletonList("*"));
            final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
            source.registerCorsConfiguration("/api/**", configuration);
            return source;
        }


        @Bean
        public RestLoginAuthenticationFilter authenticationFilter() throws Exception {
            RestLoginAuthenticationFilter authenticationFilter = new RestLoginAuthenticationFilter();
            authenticationFilter.setAuthenticationSuccessHandler(restAuthenticationSuccessHandler);
            authenticationFilter.setAuthenticationFailureHandler(restAuthenticationFailureHandler);
            authenticationFilter.setAuthenticationManager(authenticationManagerBean());
            authenticationFilter.setUserDetailsService(formDetailsService);
            return authenticationFilter;
        }


    }
}
