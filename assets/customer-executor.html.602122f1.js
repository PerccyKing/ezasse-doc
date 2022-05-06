import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.72f8f8b9.js";const n={},s=a(`<h1 id="\u81EA\u5B9A\u4E49\u6267\u884C\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6267\u884C\u5668" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6267\u884C\u5668</h1><p>\u4E00\u79CD\u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u5BF9\u5E94\u4E00\u4E2A\u6267\u884C\u5668\uFF0C\u6267\u884C\u5668\u7684\u4E3B\u8981\u4F5C\u7528\u4E3A\u6267\u884CSQL\u811A\u672C\uFF0Cezasse\u4F1A\u6839\u636E\u6267\u884C\u8282\u70B9\u7684\u6570\u636E\u5E93\u7C7B\u578B\u627E\u5230\u5177\u4F53\u7684\u6267\u884C\u5668</p><p>\u76EE\u524D\u5B98\u65B9\u53EA\u9002\u914D\u4E86\u4EE5\u4E0B\u6267\u884C\u5668\uFF0C\u5982\u679C\u89C9\u5F97\u5B98\u65B9\u6267\u884C\u5668\u4E0D\u9002\u7528\u4E8E\u5F53\u524D\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u8986\u76D6\u5B9E\u73B0</p><ul><li><a href="https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MysqlEzasseExecutor.java" target="_blank" rel="noopener noreferrer">MySQL</a></li><li><a href="https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/OracleEzasseExecutor.java" target="_blank" rel="noopener noreferrer">Oracle</a></li><li><a href="https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/MariaDbEzasseExecutor.java" target="_blank" rel="noopener noreferrer">MariaDB</a></li><li><a href="https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/H2EzasseExecutor.java" target="_blank" rel="noopener noreferrer">H2</a></li><li><a href="https://github.com/PerccyKing/ezasse/blob/master/ezasse-core/src/main/java/cn/com/pism/ezasse/executor/HsqlDbExecutor.java" target="_blank" rel="noopener noreferrer">HSQL</a></li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4E0B\u9762\u4E3A\u5B9E\u73B0<code>mysql</code>\u6267\u884C\u5668\u7684\u5B9E\u73B0\u6B65\u9AA4</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u7C7B<code>MyMysqlEzasseExecutor.java</code></li><li>\u7EE7\u627F<code>EzasseExecutor</code>,\u5E76\u6DFB\u52A0\u6CE8\u89E3<code>@Component</code></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Component
public class MyMysqlEzasseExecutor extends EzasseExecutor {
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u5B9E\u73B0<code>getTableInfo(java.lang.String, java.lang.String)</code>\u65B9\u6CD5</li></ol><blockquote><p>\u6B64\u65B9\u6CD5\u5165\u53C2\u4E3A <code>tableName</code>, <code>columnName</code>,\u8FD4\u56DE\u7684\u662F\u8868\u4FE1\u606F\u5217\u8868\uFF0C\u4F46\u662F\u5217\u8868\u4E2D\u53EA\u80FD\u5305\u542B \u5217\u540D\u4E3A <code>columnName</code> \u7684\u6570\u636E</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
    /**
     * &lt;p&gt;
     * \u83B7\u53D6\u8868\u4FE1\u606F
     * &lt;/p&gt;
     *
     * @param tableName  : \u8868\u540D
     * @param columnName : \u5217\u540D
     * @return {@link List&lt;EzasseTableInfo&gt;} \u8868\u7684\u57FA\u672C\u4FE1\u606F
     * @author PerccyKing
     * @date 2022/04/06 \u4E0B\u5348 11:22
     */
    @Override
    public List&lt;EzasseTableInfo&gt; getTableInfo(String tableName, String columnName) {
        String getTableInfoSql = &quot;SELECT COLUMN_NAME columnName,DATA_TYPE dataType,CHARACTER_MAXIMUM_LENGTH characterMaximumLength,COLUMN_COMMENT columnComment FROM Information_schema.columns WHERE table_Name = ? AND TABLE_SCHEMA=? AND COLUMN_NAME=? &quot;;
        List&lt;Map&lt;String, Object&gt;&gt; queryForList = jdbcTemplate.queryForList(getTableInfoSql, tableName, getDataBaseNameFromDataSource(this.dataSource), columnName);
        return JSON.parseArray(JSON.toJSONString(queryForList), EzasseTableInfo.class);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="4"><li>\u5B9E\u73B0<code>getTableInfo(java.lang.String)</code>\u65B9\u6CD5</li></ol><blockquote><p>\u6B64\u65B9\u6CD5\u5165\u53C2\u4E3A <code>tableName</code> \uFF0C\u8FD4\u56DE\u7684\u662F\u8868\u4FE1\u606F\u5217\u8868</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    /**
     * &lt;p&gt;
     * \u83B7\u53D6\u8868\u4FE1\u606F
     * &lt;/p&gt;
     *
     * @param tableName : \u8868\u540D
     * @return {@link List&lt;EzasseTableInfo&gt;}
     * @author PerccyKing
     * @date 2022/04/09 \u4E0B\u5348 04:03
     */
    @Override
    public List&lt;EzasseTableInfo&gt; getTableInfo(String tableName) {
        String sql = &quot;SELECT COLUMN_NAME columnName,DATA_TYPE dataType,CHARACTER_MAXIMUM_LENGTH characterMaximumLength,COLUMN_COMMENT columnComment FROM Information_schema.columns WHERE table_Name = ? AND TABLE_SCHEMA=? &quot;;
        List&lt;Map&lt;String, Object&gt;&gt; queryForList = jdbcTemplate.queryForList(sql, tableName, getDataBaseNameFromDataSource(this.dataSource));
        return JSON.parseArray(JSON.toJSONString(queryForList), EzasseTableInfo.class);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="5"><li>\u5B9E\u73B0<code>getId</code>\u65B9\u6CD5</li></ol><blockquote><p>\u6B64\u65B9\u6CD5\u7528\u6765\u6807\u8BB0\u6267\u884C\u5668\u7684\u552F\u4E00\u6027\uFF0Cezasse\u4F1A\u6839\u636E\u6570\u636E\u8282\u70B9\u5224\u65AD\u4F7F\u7528\u54EA\u4E00\u4E2A\u6267\u884C\u5668\uFF0C \u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u7684\u6267\u884C\u5668\uFF0C\u81EA\u5B9A\u4E49\u6267\u884C\u5668\u4F1A\u8986\u76D6\u7CFB\u7EDF\u81EA\u5E26\u7684\u6267\u884C\u5668</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    @Override
    public String getId() {
        // \u6B64\u5904\u6700\u597D\u662F\u4ECE\u9A71\u52A8\u4E2D\u83B7\u5F97 com.mysql.cj.jdbc.DatabaseMetaData#getDatabaseProductName
        // ezasse \u5728\u8FDB\u884C\u6267\u884C\u5668\u9009\u62E9\u7684\u65F6\u5019\uFF0C\u4F1A\u5FFD\u7565\u5927\u5C0F\u5199
        return &quot;MYSQL&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,17);function r(l,t){return s}var i=e(n,[["render",r],["__file","customer-executor.html.vue"]]);export{i as default};
