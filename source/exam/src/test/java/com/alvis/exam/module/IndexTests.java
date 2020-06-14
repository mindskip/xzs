package com.alvis.exam.module;

import com.alvis.exam.ExamApplicationTests;
import com.alvis.exam.service.ExamPaperService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ExamApplicationTests.class)
public class IndexTests {

    @Autowired
    private ExamPaperService examPaperService;

    @Test
    public void sumTest() {
        Integer count = examPaperService.selectAllCount();
        List<Integer>  kv = examPaperService.selectMothCount();
        System.out.print(kv);
    }


}
