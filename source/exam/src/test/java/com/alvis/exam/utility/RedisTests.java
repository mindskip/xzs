package com.alvis.exam.utility;

import com.alvis.exam.ExamApplicationTests;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.script.DefaultRedisScript;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ExamApplicationTests.class)
public class RedisTests {

    private final Logger logger = LoggerFactory.getLogger(RedisTests.class);

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Test
    public void redisAddTest() {
        stringRedisTemplate.opsForValue().set("apple", "0");
        stringRedisTemplate.opsForValue().set("100000:apple", "0");
        stringRedisTemplate.opsForValue().set("100000:apple:red", "0");
        stringRedisTemplate.opsForHash().put("100000:people","name","alvis");
    }


    @Test
    public void redisListTest() {
        stringRedisTemplate.opsForList().rightPush("alvis_list", "apple");
        stringRedisTemplate.opsForList().rightPush("alvis_list", "oragene");
    }

    @Test
    public void redisLuaTest() {
        String script = "return redis.call('set',KEYS[1],ARGV[1])";
        DefaultRedisScript<String> redisScript = new DefaultRedisScript<>(script);
        redisScript.setResultType(String.class);
        List<String> keys = Arrays.asList("apple");
        String result = stringRedisTemplate.execute(redisScript, keys, "1");
        Assert.assertEquals("OK", result);
    }


    @Test
    public void redisAtomicTest() {
        IntStream.rangeClosed(1, 1000).forEach(i -> {
            Random rand = new Random(i);
            new Thread(() -> {
                stringRedisTemplate.opsForValue().increment("apple", 2);
                threadSleep(rand.nextInt(i));
            }).start();
            new Thread(() -> {
                stringRedisTemplate.opsForValue().decrement("apple", 2);
                threadSleep(rand.nextInt(i));
            }).start();
        });

        threadSleep(Integer.MAX_VALUE);
    }

    private void threadSleep(Integer i) {
        try {
            TimeUnit.MILLISECONDS.sleep(i);
        } catch (InterruptedException e) {
            logger.error(e.getMessage(), e);
        }
    }


}
