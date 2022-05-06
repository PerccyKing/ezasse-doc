---
home: true
title: 首页
heroImage: /images/logo.svg
actions:
  - text: 立即体验
    link: /guide/base
    type: primary
  - text: Github
    link: https://github.com/PerccyKing/ezasse
    type: secondary
  - text: Gitee
    link: https://gitee.com/perccyking/ezasse
    type: secondary
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
<CodeGroup>
  <CodeGroupItem title="Maven" active>

```xml
<dependency>
    <groupId>cn.com.pism.ezasse</groupId>
    <artifactId>ezasse-spring-boot-starter</artifactId>
    <version>0.0.6</version>
</dependency>
```
  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```groovy
implementation 'cn.com.pism.ezasse:ezasse-spring-boot-starter:0.0.6'
```

  </CodeGroupItem>
</CodeGroup>

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
# ezasse 会在数据库中查询是否有user表，没有的话会执行创建表
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
# ezasse 会检查 user表中，是否存在user_type字段，如果没有会执行以下脚本
-- ADD(user.user_type)
alter table user
    add user_type varchar(1024) null comment '用户类型' after name;
```
##### 3.initData.sql
```sql
# ezasse 会检查EXEC(sql) 中的SQL 返回值，是否为0 如果结果为0 会执行以下脚本
-- EXEC(select count(1) from user where id = 1)
insert into user(id,name,user_type) value(1,'root','超级管理员');
```
#### 4.启动SpringBoot

### 贡献者
[![Contributor over time](https://contributor-overtime-api.git-contributor.com/contributors-svg?chart=contributorOverTime&repo=PerccyKing/ezasse)](https://git-contributor.com?chart=contributorOverTime&repo=PerccyKing/ezasse)
