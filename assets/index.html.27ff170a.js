import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r,c as d,a,w as n,F as c,b as e,d as i,e as o,o as u}from"./app.72f8f8b9.js";const p={},b=e("h3",{id:"\u7ACB\u5373\u4F53\u9A8C-spring-boot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7ACB\u5373\u4F53\u9A8C-spring-boot","aria-hidden":"true"},"#"),i(" \u7ACB\u5373\u4F53\u9A8C(spring boot)")],-1),m=e("h4",{id:"_1-\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5","aria-hidden":"true"},"#"),i(" 1.\u5B89\u88C5")],-1),h=e("div",{class:"language-xml ext-xml line-numbers-mode"},[e("pre",{class:"language-xml"},[e("code",null,`<dependency>
    <groupId>cn.com.pism.ezasse</groupId>
    <artifactId>ezasse-spring-boot-starter</artifactId>
    <version>0.0.6</version>
</dependency>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br")])],-1),g=e("div",{class:"language-groovy ext-groovy line-numbers-mode"},[e("pre",{class:"language-groovy"},[e("code",null,`implementation 'cn.com.pism.ezasse:ezasse-spring-boot-starter:0.0.6'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),_=o(`<h4 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2.\u914D\u7F6E</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>spring:
  ezasse:
    #\u6307\u5B9Asql\u6240\u5728resource\u4E0B\u7684\u6587\u4EF6\u5939
    folder: sql
    #\u6307\u5B9ASQL\u6267\u884C\u987A\u5E8F
    group-order:
      - initTable
      - updateTable
      - initData
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_3-\u7F16\u5199sql\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199sql\u6587\u4EF6" aria-hidden="true">#</a> 3.\u7F16\u5199SQL\u6587\u4EF6</h4><h5 id="_1-inittable-sql" tabindex="-1"><a class="header-anchor" href="#_1-inittable-sql" aria-hidden="true">#</a> 1.initTable.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code># ezasse \u4F1A\u5728\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u662F\u5426\u6709user\u8868\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u6267\u884C\u521B\u5EFA\u8868
-- TABLE(user)
CREATE TABLE user
(
    id          bigint                              NOT NULL COMMENT &#39;\u4E3B\u952Eid&#39;
        PRIMARY KEY,
    name     varchar(1024)                          NULL COMMENT &#39;\u8D26\u53F7&#39;
)
    COMMENT &#39;\u7528\u6237\u8868&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="_2-updatetable-sql" tabindex="-1"><a class="header-anchor" href="#_2-updatetable-sql" aria-hidden="true">#</a> 2.updateTable.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code># ezasse \u4F1A\u68C0\u67E5 user\u8868\u4E2D\uFF0C\u662F\u5426\u5B58\u5728user_type\u5B57\u6BB5\uFF0C\u5982\u679C\u6CA1\u6709\u4F1A\u6267\u884C\u4EE5\u4E0B\u811A\u672C
-- ADD(user.user_type)
alter table user
    add user_type varchar(1024) null comment &#39;\u7528\u6237\u7C7B\u578B&#39; after name;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_3-initdata-sql" tabindex="-1"><a class="header-anchor" href="#_3-initdata-sql" aria-hidden="true">#</a> 3.initData.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code># ezasse \u4F1A\u68C0\u67E5EXEC(sql) \u4E2D\u7684SQL \u8FD4\u56DE\u503C\uFF0C\u662F\u5426\u4E3A0 \u5982\u679C\u7ED3\u679C\u4E3A0 \u4F1A\u6267\u884C\u4EE5\u4E0B\u811A\u672C
-- EXEC(select count(1) from user where id = 1)
insert into user(id,name,user_type) value(1,&#39;root&#39;,&#39;\u8D85\u7EA7\u7BA1\u7406\u5458&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_4-\u542F\u52A8springboot" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8springboot" aria-hidden="true">#</a> 4.\u542F\u52A8SpringBoot</h4><h3 id="\u8D21\u732E\u8005" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a> \u8D21\u732E\u8005</h3><p><a href="https://git-contributor.com?chart=contributorOverTime&amp;repo=PerccyKing/ezasse" target="_blank" rel="noopener noreferrer"><img src="https://contributor-overtime-api.git-contributor.com/contributors-svg?chart=contributorOverTime&amp;repo=PerccyKing/ezasse" alt="Contributor over time"></a></p>`,12);function v(f,x){const s=r("CodeGroupItem"),l=r("CodeGroup");return u(),d(c,null,[b,m,a(l,null,{default:n(()=>[a(s,{title:"Maven",active:""},{default:n(()=>[h]),_:1}),a(s,{title:"Gradle"},{default:n(()=>[g]),_:1})]),_:1}),_],64)}var T=t(p,[["render",v],["__file","index.html.vue"]]);export{T as default};
