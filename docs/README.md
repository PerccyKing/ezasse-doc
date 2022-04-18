---
home: true
title: 首页
heroImage: /images/hero.png
actions:
  - text: 立即体验
    link: /guide/
    type: primary
features:
  - title: 易用
    details: 稍作配置，启动即用
  - title: 无侵入
    details: 不影响整体架构，可任意插拔，只关注SQL执行
  - title: 可扩展
    details: 自定义校验语法、校验器、执行器
---

### 立即体验(spring boot)
#### 1.安装
```xml
<dependency>
    <groupId>cn.com.pism.ezasse</groupId>
    <artifactId>ezasse-spring-boot-starter</artifactId>
    <version>${ezasse.version}</version>
</dependency>
```
#### 2.配置
```yaml
spring:
  ezasse:
    #指定sql所在resource下的文件夹
    folder: sql
    #指定SQL执行顺序
    group-order:
      - initTable
      - updateTable
      - initData
```

#### 3.编写SQL文件
##### 1.initTable.sql
```sql
-- TABLE(user)
CREATE TABLE user
(
    id          bigint                              NOT NULL COMMENT '主键id'
        PRIMARY KEY,
    name     varchar(1024)                          NULL COMMENT '账号'
)
    COMMENT '用户表';
```
##### 2.updateTable.sql
```sql
-- CHANGE_ADD(user.user_type)
alter table user
    add user_type varchar(1024) null comment '用户类型' after name;
```
##### 3.initData.sql
```sql
-- EXEC(select count(1) from user where id = 1)
insert into user(id,name,user_type) value(1,'root','超级管理员');
```
#### 4.启动SpringBoot

### 贡献者
[![Contributor over time](https://contributor-overtime-api.git-contributor.com/contributors-svg?chart=contributorOverTime&repo=PerccyKing/ezasse)](https://git-contributor.com?chart=contributorOverTime&repo=PerccyKing/ezasse)
