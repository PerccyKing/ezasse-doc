import{_ as c,o as r,c as i,a,w as e,b as n,F as u,d as s,e as d,r as t}from"./app.9b886fde.js";const k={},b=n("h3",{id:"\u7ACB\u5373\u4F53\u9A8C-spring-boot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7ACB\u5373\u4F53\u9A8C-spring-boot","aria-hidden":"true"},"#"),s(" \u7ACB\u5373\u4F53\u9A8C(spring boot)")],-1),m=n("h4",{id:"_1-\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5","aria-hidden":"true"},"#"),s(" 1.\u5B89\u88C5")],-1),h=n("div",{class:"language-xml ext-xml line-numbers-mode"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s("cn.com.pism.ezasse"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("groupId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s("ezasse-spring-boot-starter"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("artifactId")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("version")]),n("span",{class:"token punctuation"},">")]),s("0.0.6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("version")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dependency")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),g=n("div",{class:"language-groovy ext-groovy line-numbers-mode"},[n("pre",{class:"language-groovy"},[n("code",null,[s("implementation "),n("span",{class:"token string"},"'cn.com.pism.ezasse:ezasse-spring-boot-starter:0.0.6'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),_=d(`<h4 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2.\u914D\u7F6E</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">ezasse</span><span class="token punctuation">:</span>
    <span class="token comment">#\u6307\u5B9Asql\u6240\u5728resource\u4E0B\u7684\u6587\u4EF6\u5939</span>
    <span class="token key atrule">folder</span><span class="token punctuation">:</span> sql
    <span class="token comment">#\u6307\u5B9ASQL\u6267\u884C\u987A\u5E8F</span>
    <span class="token key atrule">group-order</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> initTable
      <span class="token punctuation">-</span> updateTable
      <span class="token punctuation">-</span> initData
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_3-\u7F16\u5199sql\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199sql\u6587\u4EF6" aria-hidden="true">#</a> 3.\u7F16\u5199SQL\u6587\u4EF6</h4><h5 id="_1-inittable-sql" tabindex="-1"><a class="header-anchor" href="#_1-inittable-sql" aria-hidden="true">#</a> 1.initTable.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># ezasse \u4F1A\u5728\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u662F\u5426\u6709user\u8868\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u6267\u884C\u521B\u5EFA\u8868</span>
<span class="token comment">-- TABLE(user)</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span>
<span class="token punctuation">(</span>
    id          <span class="token keyword">bigint</span>                              <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E3B\u952Eid&#39;</span>
        <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    name     <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>                          <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8D26\u53F7&#39;</span>
<span class="token punctuation">)</span>
    <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528\u6237\u8868&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="_2-updatetable-sql" tabindex="-1"><a class="header-anchor" href="#_2-updatetable-sql" aria-hidden="true">#</a> 2.updateTable.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># ezasse \u4F1A\u68C0\u67E5 user\u8868\u4E2D\uFF0C\u662F\u5426\u5B58\u5728user_type\u5B57\u6BB5\uFF0C\u5982\u679C\u6CA1\u6709\u4F1A\u6267\u884C\u4EE5\u4E0B\u811A\u672C</span>
<span class="token comment">-- ADD(user.user_type)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> <span class="token keyword">user</span>
    <span class="token keyword">add</span> user_type <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u7528\u6237\u7C7B\u578B&#39;</span> <span class="token keyword">after</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_3-initdata-sql" tabindex="-1"><a class="header-anchor" href="#_3-initdata-sql" aria-hidden="true">#</a> 3.initData.sql</h5><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># ezasse \u4F1A\u68C0\u67E5EXEC(sql) \u4E2D\u7684SQL \u8FD4\u56DE\u503C\uFF0C\u662F\u5426\u4E3A0 \u5982\u679C\u7ED3\u679C\u4E3A0 \u4F1A\u6267\u884C\u4EE5\u4E0B\u811A\u672C</span>
<span class="token comment">-- EXEC(select count(1) from user where id = 1)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">user</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>user_type<span class="token punctuation">)</span> <span class="token keyword">value</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u8D85\u7EA7\u7BA1\u7406\u5458&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_4-\u542F\u52A8springboot" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8springboot" aria-hidden="true">#</a> 4.\u542F\u52A8SpringBoot</h4><h3 id="\u8D21\u732E\u8005" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a> \u8D21\u732E\u8005</h3>`,11),y={href:"https://git-contributor.com?chart=contributorOverTime&repo=PerccyKing/ezasse",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"https://contributor-overtime-api.git-contributor.com/contributors-svg?chart=contributorOverTime&repo=PerccyKing/ezasse",alt:"Contributor over time"},null,-1);function x(f,w){const p=t("CodeGroupItem"),o=t("CodeGroup"),l=t("ExternalLinkIcon");return r(),i(u,null,[b,m,a(o,null,{default:e(()=>[a(p,{title:"Maven",active:""},{default:e(()=>[h]),_:1}),a(p,{title:"Gradle"},{default:e(()=>[g]),_:1})]),_:1}),_,n("p",null,[n("a",y,[v,a(l)])])],64)}var E=c(k,[["render",x],["__file","index.html.vue"]]);export{E as default};