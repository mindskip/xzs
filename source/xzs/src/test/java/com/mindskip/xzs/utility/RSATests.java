package com.mindskip.xzs.utility;

import com.mindskip.xzs.XzsApplicationTests;
import com.mindskip.xzs.configuration.property.SystemConfig;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = XzsApplicationTests.class)
public class RSATests {

    @Autowired
    private SystemConfig systemConfig;

    @Test
    public void rsaTest() {
        String pwd = "123456";
        String encodeStr = RsaUtil.rsaEncode(systemConfig.getPwdKey().getPublicKey(), pwd);
        String decodeStr = RsaUtil.rsaDecode(systemConfig.getPwdKey().getPrivateKey(), encodeStr);
        Assert.assertEquals(pwd, decodeStr);
    }

}
