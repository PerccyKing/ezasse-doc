# 校验语法

## 规则

```sql
-- 校验关键字.[校验节点].[执行节点](校验语句/校验内容)
```

1. 所有校验行以 `--` 开始
2. 校验关键字：必须的
3. 校验节点：可选的，所有的校验操作都将在校验节点完成，如果不指定，会使用SQL文件上指定的节点，如果文件未指定则会使用默认节点
4. 执行节点：可选的，如果要指定执行节点，必须指定校验节点，如果没有指定执行节点，则SQL会在默认节点执行
5. 校验内容：可以是SQL，或者是一些关键字
6. 自定义的校验器一定要按照上诉规则进行开发

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
```

  </CodeGroupItem>
</CodeGroup>

## 通用校验

> 起始界定符设置为 `-- [`，`-- ]`

### EXEC

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- EXEC(校验语句)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- EXEC(校验语句)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释
作用：当在校验节点的库中，执行括号中的校验SQL，如果校验SQL返回值为0，则会执行SQL脚本

EXEC 括号中的内容应为一个SQL语句，当然也可以[自定义校验器](../expand/customer-checker.html)，让校验内容为非SQL，sql脚本内容未做限制，可以为任何内容

#### 使用示例

1. 如果SQL文件没有指定校验节点，会在master节点执行校验语句，通过后，在master节点执行代码块

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- EXEC(select 0)
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- EXEC(select 0)
-- [
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
-- ]
```

  </CodeGroupItem>
</CodeGroup>

2. 多数据源使用，校验语句将在slave节点执行，如果校验通过，SQL将在slave节点执行

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- EXEC.slave(select 0);
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- EXEC.slave(select 0);
-- [
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
-- ]
```

  </CodeGroupItem>
</CodeGroup>

3. 多数据源使用，校验语句将在slave节点执行，如果校验通过，SQL将在master节点执行

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- EXEC.slave.master(select 0);
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- EXEC.slave.master(select 0);
-- [
INSERT INTO table_1(id,name) value(1,'张三');
INSERT INTO table_1(id,name) value(2,'李四');
-- ]
```

  </CodeGroupItem>
</CodeGroup>

## 表操作

### TABLE

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- TABLE(表名)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- TABLE(表名)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释
作用：当在校验节点的库中，没有找到与`表名`相关的信息，则会执行SQL脚本

TABLE括号中的内容为`表名`，sql内容没有限制为只能是创建表语句，但是建议是创建表语句

#### 使用示例

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- TABLE(t_user)
create table t_user
(
    id   varchar(60)  not null comment '主键id'
        primary key,
    name varchar(255) null comment '用户名'
)
    comment '用户表';

```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- TABLE(t_user)
-- [
create table t_user
(
    id   varchar(60)  not null comment '主键id'
        primary key,
    name varchar(255) null comment '用户名'
)
    comment '用户表';
-- ]
```

  </CodeGroupItem>
</CodeGroup>

## 表属性/字段操作

### ADD

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- ADD(表名.列名)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- ADD(表名.列名)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释
作用：当在校验节点的库中，没有找到与`表名`和`列名`相关的信息，则会执行SQL脚本

ADD的括号中有两个参数，分别为 `表名`和`列名`，sql没有限定为添加列的语句，但是建议为添加列的语句

#### 使用示例

在`t_user`表中，添加字段 `age`

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
# 当t_user表中没有age字段时，会执行以下SQL
-- ADD(t_user.age)
ALTER TABLE t_user
    ADD age varchar(3) NULL COMMENT '年龄';
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
# 当t_user表中没有age字段时，会执行以下SQL
-- ADD(t_user.age)
-- [
ALTER TABLE t_user
    ADD age varchar(3) NULL COMMENT '年龄';
-- ]
```

  </CodeGroupItem>
</CodeGroup>

### CHANGE_NAME

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- CHANGE_NAME(表名.列名)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_NAME(表名.修改后的列名)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释
作用：当在校验节点的库中，没有找到与`表名`和`修改后的列名`相关的信息，则会执行SQL脚本

CHANGE_NAME的括号中有两个参数，分别为`表名`和`修改后的列名`，sql没有限定为修改列名，但是建议为修改列表的语句

#### 使用示例

将`t_user`表中的`name`字段的名称修改为`u_name`

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- CHANGE_NAME(t_user.u_name)
ALTER TABLE t_user
    CHANGE name u_name varchar(255) NULL COMMENT '用户名';
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_NAME(t_user.u_name)
-- [
ALTER TABLE t_user
    CHANGE name u_name varchar(255) NULL COMMENT '用户名';
-- ]    
```

  </CodeGroupItem>
</CodeGroup>

### CHANGE_TYPE

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- CHANGE_TYPE(表名.需要修改类型的列名.修改后的类型)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_TYPE(表名.需要修改类型的列名.修改后的类型)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释

作用：当在校验节点的库中，`表名`中的`需要修改类型的列名`字段的数据类型，不是`修改后的数据类型`，则会执行SQL脚本

CHANGE_TYPE的括号中有三个参数，分别为`表名`和`需要修改类型的列名`、`修改后的数据类型`，sql没有限定为修改列的数据类型的语句，但是建议为修改列的数据类型的语句

#### 使用示例

将`t_user`表中的`age`字段的数据类型修改为`int`

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- CHANGE_TYPE(t_user.age.int)
alter table t_user
    modify age int null comment '年龄';
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_TYPE(t_user.age.int)
-- [
alter table t_user
    modify age int null comment '年龄';
-- ]
```

  </CodeGroupItem>
</CodeGroup>


### CHANGE_COMMENT

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- CHANGE_COMMENT(表名.需要修改备注的列名.修改后的备注信息)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_COMMENT(表名.需要修改备注的列名.修改后的备注信息)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释

作用：当在校验节点的库中，`表名`中的`需要修改备注的列名`字段的备注，不是`修改后的备注信息`，则会执行SQL脚本

CHANGE_COMMENT的括号中有三个参数，分别为`表名`和`需要修改备注的列名`、`修改后的备注信息`，sql没有限定为修改列的备注信息的语句，但是建议为修改列的备注信息的语句

#### 使用示例

将`t_user`表中的`age`字段的comment 修改为 `实际年龄`

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- CHANGE_COMMENT(t_user.age.实际年龄)
ALTER TABLE t_user
    MODIFY age int NULL COMMENT '实际年龄';
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_COMMENT(t_user.age.实际年龄)
-- [
ALTER TABLE t_user
    MODIFY age int NULL COMMENT '实际年龄';
-- ]
```

  </CodeGroupItem>
</CodeGroup>

### CHANGE_LENGTH

#### 语法

<CodeGroup>
  <CodeGroupItem title="默认" active>

```sql
-- CHANGE_LENGTH(表名.需要修改长度的列名.修改后的长度)
sql
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_LENGTH(表名.需要修改长度的列名.修改后的长度)
-- [
sql
-- ]
```

  </CodeGroupItem>
</CodeGroup>

#### 解释

作用：当在校验节点的库中，`表名`中的`需要修改长度的列名`字段的备注，不是`修改后的长度`，则会执行SQL脚本

CHANGE_LENGTH的括号中有三个参数，分别为`表名`和`需要修改长度的列名`、`修改后的长度`，sql没有限定为修改列的数据长度的语句，但是建议为修改列的数据长度的语句


#### 使用示例

将`t_user`表中的`u_name`字段的长度修改为`1024`

<CodeGroup>
   <CodeGroupItem title="默认" active>

```sql
-- CHANGE_LENGTH(t_user.u_name.1024)
ALTER TABLE t_user
    MODIFY u_name varchar(1024) NULL COMMENT '用户名';
```

</CodeGroupItem>

  <CodeGroupItem title="使用起始界定符">

```sql
-- CHANGE_LENGTH(t_user.u_name.1024)
-- [
ALTER TABLE t_user
    MODIFY u_name varchar(1024) NULL COMMENT '用户名';
-- ]
```

  </CodeGroupItem>
</CodeGroup>
