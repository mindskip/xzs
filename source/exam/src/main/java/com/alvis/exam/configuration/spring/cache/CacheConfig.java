package com.alvis.exam.configuration.spring.cache;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cache.CacheProperties;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.cache.interceptor.SimpleKey;
import org.springframework.cache.interceptor.SimpleKeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.CacheKeyPrefix;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.*;

import java.time.Duration;


@Configuration
@EnableCaching
public class CacheConfig extends CachingConfigurerSupport {

/*  @Autowired
    private CacheProperties cacheProperties;*/

    /**
     * redis序列化修改为ObjectMapper
     *
     * @return RedisCacheConfiguration
     */
/*    @Bean
    public RedisCacheConfiguration redisCacheConfiguration() {
        Jackson2JsonRedisSerializer<Object> serializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        serializer.setObjectMapper(objectMapper);
        return RedisCacheConfiguration.defaultCacheConfig().entryTtl(cacheProperties.getRedis().getTimeToLive())
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(serializer));
    }*/


    /**
     * spring boot redis默认序列化方式
     *
     * @return RedisTemplate
     */
    @Bean
    public RedisTemplate<String, Object> getRedisTemplate(RedisConnectionFactory redisConnectionFactory) {
        final RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.setKeySerializer(RedisSerializer.string());
        redisTemplate.setHashKeySerializer(RedisSerializer.string());
        redisTemplate.setValueSerializer(new JdkSerializationRedisSerializer());
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }

    /**
     * spring redis 默认生成key方式,包含::号
     *
     * @param prefix
     * @param key
     * @return
     */
    public String simpleKeyGenerator(String prefix, String key) {
        return CacheKeyPrefix.simple().compute(prefix) + key;
    }
}
