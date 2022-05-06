# 配置

## 完整配置文件

```yaml
spring:
  ezasse:
    folder: sql
    file-list:
      - V1
      - V2.sql
    group-order:
      - V1
      - V2
    delimiter-start: -- [
    delimiter-end: -- ]
    key-words:
      exec: EXEC
      table:
        create-table: TABLE
      field:
        add: ADD
        change-name: CHANGE_NAME
        change-type: CHANGE_TYPE
        change-comment: CHANGE_COMMENT
        change-length: CHANGE_LENGTH
```

## 详解

### spring.ezasse.folder

- **SQL文件所在位置**

| 默认值 | 是否必须 | 解释                                | 备注                      |
|-----|------|-----------------------------------|-------------------------|
| sql | 否    | 指定SQL文件所在位置，该文件夹只支持放在resources目录下 | 目前只支持单一文件夹，后期会考虑适配多文件夹件 |

### spring.ezasse.file-list

- **需要进行校验的文件列表**

| 默认值  | 是否必须 | 解释                                                             | 备注                                         |
|------|------|----------------------------------------------------------------|--------------------------------------------|
| null | 否    | 可以指定多个文件，可以是SQL文件的完整名称，也可以是SQL文件的部分命令，ezasse 使用 startWith() 判断 | 如果不指定，会校验执行`spring.ezasse.folder`文件夹下的全部文件 |

### spring.ezasse.group-order

- **SQL分组顺序**

| 默认值  | 是否必须 | 解释                   | 备注                |
|------|------|----------------------|-------------------|
| null | 否    | 当SQL文件存在多个分组，该配置是必须的 | 如果不指定，会按默认的顺序校验执行 |

### spring.ezasse.delimiter-start

- **开始界定符**

| 默认值  | 是否必须 | 解释                    | 备注           |
|------|------|-----------------------|--------------|
| null | 否    | 限制校验行包含的SQL的开始位置，独占一行 | 需要与校验关键字配合使用 |

### spring.ezasse.delimiter-end

- **结算界定符**

| 默认值  | 是否必须 | 解释                    | 备注           |
|------|------|-----------------------|--------------|
| null | 否    | 限制校验行包含的SQL的结束位置，独占一行 | 需要与校验关键字配合使用 |

::: tip

- 开始界定符与结束界定符是成对出现的
- 界定符全局生效
- 无论是否使用界定符，都可以支持多行脚本执行
- 使用示例,当开始界定符与结束界定符分别设定为 -- {,-- }

```sql
-- EXEC(select 0)
-- {
insert into t_user(id,mysql) values('1','PerccyKing');
-- }
```

:::

### spring.ezasse.key-words.exec

- **默认的校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值  | 是否必须 | 解释                   | 备注      |
|------|------|----------------------|---------|
| EXEC | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.table.create-table

- **创建表校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值   | 是否必须 | 解释                   | 备注      |
|-------|------|----------------------|---------|
| TABLE | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.field.add

- **添加字段校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值 | 是否必须 | 解释                   | 备注      |
|-----|------|----------------------|---------|
| ADD | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.field.change-name

- **修改字段名称校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值         | 是否必须 | 解释                   | 备注      |
|-------------|------|----------------------|---------|
| CHANGE_NAME | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.field.change-type

- **修改字段类型校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值         | 是否必须 | 解释                   | 备注      |
|-------------|------|----------------------|---------|
| CHANGE_TYPE | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.field.change-comment

- **修改字段备注校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值            | 是否必须 | 解释                   | 备注      |
|----------------|------|----------------------|---------|
| CHANGE_COMMENT | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |

### spring.ezasse.key-words.field.change-length

- **修改字段长度校验关键字**[使用方法](../detail/built-in-syntax.html)

| 默认值           | 是否必须 | 解释                   | 备注      |
|---------------|------|----------------------|---------|
| CHANGE_LENGTH | 是    | 可以覆盖默认的关键字，按自己喜好任意定义 | 修改后全局生效 |
