package com.mindskip.xzs.repository;

import com.mindskip.xzs.domain.UserToken;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserTokenMapper extends BaseMapper<UserToken> {
    int deleteByPrimaryKey(Integer id);

    int insert(UserToken record);

    int insertSelective(UserToken record);

    UserToken selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserToken record);

    int updateByPrimaryKey(UserToken record);

    UserToken getToken(String token);
}
