package com.mindskip.xzs.configuration.property;

/**
 * @version 3.3.0
 * @description: The type Password key config.
 * Copyright (C), 2019-2025, 武汉思维跳跃科技有限公司
 * @date 2021 /5/26 10:45
 */
public class PasswordKeyConfig {
    private String publicKey;

    private String privateKey;

    /**
     * Gets public key.
     *
     * @return the public key
     */
    public String getPublicKey() {
        return publicKey;
    }

    /**
     * Sets public key.
     *
     * @param publicKey the public key
     */
    public void setPublicKey(String publicKey) {
        this.publicKey = publicKey;
    }

    /**
     * Gets private key.
     *
     * @return the private key
     */
    public String getPrivateKey() {
        return privateKey;
    }

    /**
     * Sets private key.
     *
     * @param privateKey the private key
     */
    public void setPrivateKey(String privateKey) {
        this.privateKey = privateKey;
    }

}
