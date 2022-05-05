# 文件命名规则

所有的文件名按照以下规则进行命名

group-[datasource]-[order]-[other].sql

其中 datasource、order、other都为可选项，group为必选项

## 解释

* **group**：文件分组，ezasse会按照分组执行，当存在多个分组时，必须指定配置项【***】
* **datasource**：数据节点，此处为校验节点，如果在校验行没有指定其他节点，该文件下的校验语句与代码块，都将在文件指定的数据节点执行
* **order**：控制多个文件的执行顺序，一般来说，表操作>字段操作>数据操作
* **other**：没有实际意义，可以随意填写，主要用于标记文件类型，例:
    * V1-master-100-create_table.sql
    * V1-master-200-change_table.sql
    * V2-master-300-data.sql

## 使用示例

* **V1.sql**
    * 分组为**V1**，没有其他属性
    * 如果校验行未指定校验节点，所有校验逻辑都会在master节点进行
    * 如果校验行未指定执行节点，所有SQL都会在master执行
    * 顺序为最先执行
* **V1-slave.sql**
    * 分组为**V1**，如果注册了一个名字为slave的数据源，那么slave就为校验节点，如果没有注册，那么slave就为other
    * 如果slave节点有效，并且校验行未指定校验节点，那么校验逻辑会在slave执行，slave无效，会在master执行
    * 如果校验行未指定执行节点，所有SQL都会在master执行
    * 顺序为最先执行
* **V1-slave-001.sql**
    * 适用于上面的规则定义，区别为指定了执行顺序
* **V1-slave-001-data.sql**
    * 适用于上面的规则定义，没有任何区别

## 最佳实践
### 单数据源
```
resource
  |-sqls
    |-V1-100-table.sql # 维护所有的表创建脚本
    |-V1-200-change.sql # 维护所有针对表的更新脚本
    |-V1-300-data.sql # 维护所有数据
    |-V1.1-100-table.sql # 维护1.1版本的所有的表创建脚本
    |-V1.1-200-change.sql # 维护1.1版本的所有针对表的更新脚本
    |-V1.1-300-data.sql # 维护1.1版本的所有数据
```
