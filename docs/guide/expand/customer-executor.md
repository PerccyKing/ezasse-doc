# 自定义执行器
一种数据库类型，对应一个执行器，执行器的主要作用为执行SQL脚本，ezasse会根据执行节点的数据库类型找到具体的执行器
 
目前官方只适配了以下执行器，如果觉得官方执行器不适用于当前功能，你可以覆盖实现

* [MySQL](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MysqlEzasseExecutor.java)
* [Oracle](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/OracleEzasseExecutor.java)
* [MariaDB](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MariaDbEzasseExecutor.java)
* [H2](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/H2EzasseExecutor.java)
* [HSQL](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/HsqlDbExecutor.java)

## 示例
下面为实现`mysql`执行器的实现步骤
1. 创建一个类`MyMysqlEzasseExecutor.java`
2. 继承`EzasseExecutor`,并添加注解`@Component`
```java
@Component
public class MyMysqlEzasseExecutor extends EzasseExecutor {
}
```
3. 实现`getTableInfo(java.lang.String, java.lang.String)`方法
> 此方法入参为 `tableName`,  `columnName`,返回的是表信息列表，但是列表中只能包含 列名为 `columnName` 的数据
```java

    /**
     * <p>
     * 获取表信息
     * </p>
     *
     * @param tableName  : 表名
     * @param columnName : 列名
     * @return {@link List<EzasseTableInfo>} 表的基本信息
     * @author PerccyKing
     * @date 2022/04/06 下午 11:22
     */
    @Override
    public List<EzasseTableInfo> getTableInfo(String tableName, String columnName) {
        String getTableInfoSql = "SELECT COLUMN_NAME columnName,DATA_TYPE dataType,CHARACTER_MAXIMUM_LENGTH characterMaximumLength,COLUMN_COMMENT columnComment FROM Information_schema.columns WHERE table_Name = ? AND TABLE_SCHEMA=? AND COLUMN_NAME=? ";
        List<Map<String, Object>> queryForList = jdbcTemplate.queryForList(getTableInfoSql, tableName, getDataBaseNameFromDataSource(this.dataSource), columnName);
        return JSON.parseArray(JSON.toJSONString(queryForList), EzasseTableInfo.class);
    }
```
4. 实现`getTableInfo(java.lang.String)`方法
> 此方法入参为 `tableName` ，返回的是表信息列表
```java
    /**
     * <p>
     * 获取表信息
     * </p>
     *
     * @param tableName : 表名
     * @return {@link List<EzasseTableInfo>}
     * @author PerccyKing
     * @date 2022/04/09 下午 04:03
     */
    @Override
    public List<EzasseTableInfo> getTableInfo(String tableName) {
        String sql = "SELECT COLUMN_NAME columnName,DATA_TYPE dataType,CHARACTER_MAXIMUM_LENGTH characterMaximumLength,COLUMN_COMMENT columnComment FROM Information_schema.columns WHERE table_Name = ? AND TABLE_SCHEMA=? ";
        List<Map<String, Object>> queryForList = jdbcTemplate.queryForList(sql, tableName, getDataBaseNameFromDataSource(this.dataSource));
        return JSON.parseArray(JSON.toJSONString(queryForList), EzasseTableInfo.class);
    }
```
5. 实现`getId`方法
> 此方法用来标记执行器的唯一性，ezasse会根据数据节点判断使用哪一个执行器，
> 如果已经存在相同的执行器，自定义执行器会覆盖系统自带的执行器
```java
    @Override
    public String getId() {
        // 此处最好是从驱动中获得 com.mysql.cj.jdbc.DatabaseMetaData#getDatabaseProductName
        // ezasse 在进行执行器选择的时候，会忽略大小写
        return "MYSQL";
    }
```
