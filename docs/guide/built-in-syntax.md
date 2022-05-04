# 内置语法
## 通用校验
### EXEC
#### 语法
```sql
-- EXEC(校验语句)
```
#### 解释
当校验语句返回值为0时，会执行 **-- EXEC** 到 **结束** 或到**下一个校验语句之前**的所有代码块
#### 使用示例
1. 如果SQL文件没有指定校验节点，会在master节点执行校验语句，通过后，在master节点执行代码块
```sql
-- EXEC(select 0)
INSERT INTO table_1(id,name) value(1,'张三');
```

```sql
-- EXEC()
```

