# 快速开始
![logo](/images/logo.svg)

## 演示视频

[点击查看](https://www.bilibili.com/video/BV1k3411P7Ba?share_source=copy_web)

<iframe width="100%" height="600px" src="//player.bilibili.com/player.html?aid=426301518&bvid=BV1k3411P7Ba&cid=712703775&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 简介
ezasse为 Easy automatic SQL script executor 的首字母简写，是一个简单的SQL脚本执行器，主要目的在于启动项目后，按照脚本定义好的规则进行检查、判断，如果满足约定条件，则执行脚本

### 解释
* **在项目开发过程中，或者在版本不断迭代过程中，会对表结构进行修改，或者在进行版本发布时，需要内置部分数据，从而会产生一部分脚本，所以在迭代中，需要进行脚本管理**

* **脚本管理很容易做到，但是在传统的脚本管理办法中，编写好的脚本从开发到测试到发版，会由不同的角色（开发、测试、运维）在服务器单独执行，并且一个脚本会传输多次，这样进行脚本管理会很繁琐**

* **如果有一种工具能够在项目启动时，按照一定的规则对数据库进行检查，如果表不存在就执行创建表的SQL，如果数据不存在就执行插入数据的操作，如果数据存在，我可以执行一条修改数据的操作**

* **所以`ezasse`就出现了，`ezasse`就可以解决上述难题，并且可以重复执行，同时配合代码版本管理工具，对脚本版本进行管理**

### 主要功能
* 按照指定规则判断是否在项目启动时执行SQL
* 与项目版本对其的SQL版本管理
* 自定义SQL校验器
* 自定义SQL执行器
* 多数据源、多数据节点支持

## 立即体验
### 前提

1. spring或SpringBoot项目
2. 配置了数据库连接，并正确配置驱动

### 安装

#### 源码编译

拉取代码

```shell
git clone https://github.com/PerccyKing/ezasse.git
```

编译打包

```shell
mvn clean compile package install
```

#### SpringBoot项目

maven坐标

```xml

<dependency>
    <groupId>cn.com.pism.ezasse</groupId>
    <artifactId>ezasse-spring-boot-starter</artifactId>
    <version>0.0.5</version>
</dependency>
```

#### spring项目

maven坐标

```xml

<dependency>
    <groupId>cn.com.pism.ezasse</groupId>
    <artifactId>ezasse-core</artifactId>
    <version>0.0.5</version>
</dependency>
```

### 配置

#### SpringBoot 项目

* 在启动类上添加@EnableEzasse注解

```java

@EnableEzasse
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 编写脚本

* 在resources文件夹下，添加文件夹script

```
project
|-src
  |-main
    |-java
    |-resources
      |-script
        |-table.sql
```

* 在script文件夹中，创建文件table.sql，并编写如下内容

```sql
-- TABLE(user)
CREATE TABLE user
(
    revision     int NULL COMMENT '乐观锁',
    id           varchar(64) NOT NULL COMMENT '主键id'
        PRIMARY KEY,
    user_name    varchar(255) NULL COMMENT '用户名字',
    nick_name    varchar(255) NULL COMMENT '昵称',
    user_account varchar(255) NULL COMMENT '用户账号',
    user_type    varchar(10) NULL COMMENT '用户类型',
    secret_code  varchar(255) NULL COMMENT '密码',
    avatar       varchar(1024) NULL COMMENT '头像',
    created_id   varchar(64) NULL COMMENT '创建人id',
    created_name varchar(255) NULL COMMENT '创建人名字',
    created_time timestamp DEFAULT CURRENT_TIMESTAMP NULL COMMENT '创建时间',
    updated_id   varchar(64) NULL COMMENT '更新人id',
    updated_name varchar(255) NULL COMMENT '更新人名字',
    updated_time timestamp DEFAULT CURRENT_TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    deleted      bit       DEFAULT b'0' NULL COMMENT '是否删除',
    last_modify  timestamp DEFAULT CURRENT_TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间'
) COMMENT '用户表';
-- EXEC(SELECT count(1) FROM user where id = 1)
insert into user(id, user_name) value ('1','init-user');

```

### 启动执行


