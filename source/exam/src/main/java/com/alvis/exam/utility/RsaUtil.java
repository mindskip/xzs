package com.alvis.exam.utility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Cipher;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;


/**
 * @author alvis
 */
public class RsaUtil {
    /**
     * String to hold name of the encryption algorithm.
     */
    private static final String ALGORITHM = "RSA";

    private static final String CHAR_SET = "utf-8";

    private static final Logger logger = LoggerFactory.getLogger(RsaUtil.class);

    public static String rsaEncode(String publicCertificate, String text) {
        try {
            byte[] publicBytes = baseStrToByte(publicCertificate);
            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicBytes);
            KeyFactory keyFactory = KeyFactory.getInstance(ALGORITHM);
            PublicKey pubKey = keyFactory.generatePublic(keySpec);
            // get an RSA cipher object and print the provider
            final Cipher cipher = Cipher.getInstance(ALGORITHM);
            // encrypt the plain text using the public key
            cipher.init(Cipher.ENCRYPT_MODE, pubKey);
            byte[] cipherBytes = cipher.doFinal(text.getBytes(CHAR_SET));
            return baseByteToStr(cipherBytes);
        } catch (Exception e) {
            logger.error("publicCertificate:{}  \r\n  text:{}", publicCertificate, text, e);
        }
        return null;
    }


    public static String rsaDecode(String privateCertificate, String text) {
        try {
            byte[] privateBytes = baseStrToByte(privateCertificate);
            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateBytes);
            KeyFactory keyFactory = KeyFactory.getInstance(ALGORITHM);
            PrivateKey priKey = keyFactory.generatePrivate(keySpec);
            byte[] cipherText;
            // get an RSA cipher object and print the provider
            final Cipher cipher = Cipher.getInstance(ALGORITHM);
            // encrypt the plain text using the public key
            cipher.init(Cipher.DECRYPT_MODE, priKey);
            byte[] textbyte = baseStrToByte(text);
            cipherText = cipher.doFinal(textbyte);
            return new String(cipherText, CHAR_SET);
        } catch (Exception e) {
            logger.error("privateCertificate:{}  \r\n  text:{}", privateCertificate, text, e);
        }
        return null;
    }


    /**
     * @param str str
     * @return byte[]
     */
    private static byte[] baseStrToByte(String str) {
        return Base64.getDecoder().decode(str);
    }


    /**
     * @param bytes bytes
     * @return String
     */
    private static String baseByteToStr(byte[] bytes) {
        return Base64.getEncoder().encodeToString(bytes);
    }
}
