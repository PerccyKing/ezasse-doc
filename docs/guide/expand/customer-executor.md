# 自定义执行器
一种数据库类型，对应一个执行器，执行器的主要作用为执行SQL脚本，ezasse会根据执行节点的数据库类型找到具体的执行器
 
目前官方只适配了以下执行器，如果觉得官方执行器不适用于当前功能，你可以覆盖实现

* [MySQL](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MysqlEzasseExecutor.java)
* [Oracle](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/OracleEzasseExecutor.java)
* [MariaDB](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MariaDbEzasseExecutor.java)
* [H2](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/H2EzasseExecutor.java)
* [HSQL](https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/HsqlDbExecutor.java)
