import{_ as e,o as i,c as n,e as u}from"./app.35506946.js";const l={},d=u(`<h1 id="_4-3-\u7BA1\u7406\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-3-\u7BA1\u7406\u7AEF" aria-hidden="true">#</a> 4.3 \u7BA1\u7406\u7AEF</h1><h3 id="_4-3-1-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u767B\u5F55" aria-hidden="true">#</a> 4.3.1 \u767B\u5F55</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/user/login</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;admin&quot;,  //\u7528\u6237\u540D
    &quot;password&quot;: &quot;&quot;,  //\u5BC6\u7801
    &quot;remember&quot;: false  //\u8BB0\u4F4F\u6211
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: null,
        &quot;userUuid&quot;: null,
        &quot;userName&quot;: &quot;admin&quot;,  //\u7528\u6237\u540D
        &quot;password&quot;: null,
        &quot;realName&quot;: null,
        &quot;age&quot;: null,
        &quot;sex&quot;: null,
        &quot;birthDay&quot;: null,
        &quot;userLevel&quot;: null,
        &quot;phone&quot;: null,
        &quot;role&quot;: null,
        &quot;status&quot;: null,
        &quot;imagePath&quot;: null,
        &quot;createTime&quot;: null,
        &quot;modifyTime&quot;: null,
        &quot;lastActiveTime&quot;: null,
        &quot;deleted&quot;: null,
        &quot;wxOpenId&quot;: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-2-\u767B\u51FA" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u767B\u51FA" aria-hidden="true">#</a> 4.3.2 \u767B\u51FA</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/user/logout</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-3-\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-3-\u9996\u9875" aria-hidden="true">#</a> 4.3.3 \u9996\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/dashboard/index</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> {
    &quot;examPaperCount&quot;: 2413,  //\u8BD5\u5377\u603B\u6570
    &quot;questionCount&quot;: 1025,  //\u9898\u76EE\u603B\u6570
    &quot;doExamPaperCount&quot;: 6148,  //\u603B\u7B54\u5377\u6570
    &quot;doQuestionCount&quot;: 23945,  //\u603B\u9898\u6570
    &quot;mothDayUserActionValue&quot;: [  //\u6D3B\u8DC3\u5EA6
        85
    ],
    &quot;mothDayDoExamQuestionValue&quot;: [  //\u6708\u505A\u9898\u6570
        22
    ],
    &quot;mothDayText&quot;: [  //\u672C\u6708\u5929\u6570
        &quot;1&quot;
    ]
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-4-\u7528\u6237\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-4-\u7528\u6237\u5206\u9875" aria-hidden="true">#</a> 4.3.4 \u7528\u6237\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/page/list</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;&quot;,  //\u7528\u6237\u540D
    &quot;role&quot;: 1,   //\u89D2\u8272
    &quot;pageIndex&quot;: 1,  //\u9875\u7801
    &quot;pageSize&quot;: 10   //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 81,  //\u603B\u6570
        &quot;list&quot;: [
            {
                &quot;id&quot;: 100,     //\u7528\u6237id
                &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //\u7528\u6237uuid
                &quot;userName&quot;: &quot;\u738B&quot;,  //\u7528\u6237\u540D
                &quot;realName&quot;: null,  //\u771F\u5B9E\u59D3\u540D
                &quot;age&quot;: null,  //\u5E74\u9F84
                &quot;role&quot;: 1,  //\u89D2\u8272
                &quot;sex&quot;: null,  //\u6027\u522B
                &quot;birthDay&quot;: &quot;&quot;,  //\u51FA\u751F\u65E5\u671F          
                &quot;phone&quot;: null,   //\u624B\u673A\u53F7                 
                &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
                &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //\u4FEE\u6539\u65F6\u95F4
                &quot;status&quot;: 1,  //\u72B6\u6001
                &quot;userLevel&quot;: 1,  //\u5E74\u7EA7
                &quot;imagePath&quot;: null   //\u5934\u50CF
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-5-\u7528\u6237\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-3-5-\u7528\u6237\u67E5\u8BE2" aria-hidden="true">#</a> 4.3.5 \u7528\u6237\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/select/1</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 100,     //\u7528\u6237id
        &quot;userUuid&quot;: &quot;fd31ab62-c32f-433c-8dc4-c07e653d390a&quot;,  //\u7528\u6237uuid
        &quot;userName&quot;: &quot;\u738B&quot;,  //\u7528\u6237\u540D
        &quot;realName&quot;: null,  //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: null,  //\u5E74\u9F84
        &quot;role&quot;: 1,  //\u89D2\u8272
        &quot;sex&quot;: null,  //\u6027\u522B
        &quot;birthDay&quot;: &quot;&quot;,  //\u51FA\u751F\u65E5\u671F          
        &quot;phone&quot;: null,   //\u624B\u673A\u53F7                 
        &quot;lastActiveTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
        &quot;createTime&quot;: &quot;2021-06-21 20:01:26&quot;,  //\u521B\u5EFA\u65F6\u95F4
        &quot;modifyTime&quot;: &quot;2021-06-21 20:01:35&quot;,  //\u4FEE\u6539\u65F6\u95F4
        &quot;status&quot;: 1,  //\u72B6\u6001
        &quot;userLevel&quot;: 1,  //\u5E74\u7EA7
        &quot;imagePath&quot;: null   //\u5934\u50CF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-6-\u7528\u6237\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#_4-3-6-\u7528\u6237\u7F16\u8F91" aria-hidden="true">#</a> 4.3.6 \u7528\u6237\u7F16\u8F91</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;userName&quot;: &quot;testzz&quot;,  //\u7528\u6237\u540D
    &quot;password&quot;: &quot;123456&quot;,  //\u5BC6\u7801
    &quot;realName&quot;: &quot;tesx&quot;,  //\u771F\u5B9E\u59D3\u540D
    &quot;role&quot;: 1,  //\u89D2\u8272
    &quot;status&quot;: 1, //\u72B6\u6001
    &quot;age&quot;: &quot;&quot;, //\u5E74\u9F84
    &quot;sex&quot;: &quot;&quot;, //\u6027\u522B
    &quot;birthDay&quot;: null, //\u751F\u65E5
    &quot;phone&quot;: null,  //\u624B\u673A\u53F7
    &quot;userLevel&quot;: 1  //\u5E74\u7EA7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 109,
        &quot;userUuid&quot;: &quot;321dec89-0656-4736-ae4c-e2b07f4fcc67&quot;,  //\u7528\u6237id
        &quot;userName&quot;: &quot;testzz&quot;, //\u7528\u6237\u540D
        &quot;password&quot;: &quot;&quot; //\u5BC6\u7801
        &quot;realName&quot;: &quot;tesx&quot;,  //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: null, //\u5E74\u9F84
        &quot;sex&quot;: null, //\u6027\u522B
        &quot;birthDay&quot;: null, //\u751F\u65E5
        &quot;userLevel&quot;: 1, //\u5E74\u7EA7
        &quot;phone&quot;: null, //\u624B\u673A\u53F7
        &quot;role&quot;: 1, //\u89D2\u8272
        &quot;status&quot;: 1, //\u72B6\u6001
        &quot;imagePath&quot;: null, //\u5934\u50CF
        &quot;createTime&quot;: 1624538837259, //\u521B\u5EFA\u65E5\u671F
        &quot;modifyTime&quot;: null, //\u4FEE\u6539\u65F6\u95F4
        &quot;lastActiveTime&quot;: 1624538837259, //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
        &quot;deleted&quot;: false, //\u662F\u5426\u5220\u9664
        &quot;wxOpenId&quot;: null //\u5FAE\u4FE1openId
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-7-\u7528\u6237\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-3-7-\u7528\u6237\u5220\u9664" aria-hidden="true">#</a> 4.3.7 \u7528\u6237\u5220\u9664</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/delete/3</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //\u8FD4\u56DE\u72B6\u6001
    &quot;message&quot;: &quot;\u6210\u529F&quot;, //\u8FD4\u56DE\u6D88\u606F
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-8-\u7528\u6237\u72B6\u6001\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_4-3-8-\u7528\u6237\u72B6\u6001\u4FEE\u6539" aria-hidden="true">#</a> 4.3.8 \u7528\u6237\u72B6\u6001\u4FEE\u6539</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/changeStatus/1</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-9-\u5B66\u79D1\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-3-9-\u5B66\u79D1\u5217\u8868" aria-hidden="true">#</a> 4.3.9 \u5B66\u79D1\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/education/subject/list</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 48,  //\u5B66\u79D1id
            &quot;name&quot;: &quot;\u8BED\u6587&quot;,  //\u5B66\u79D1\u540D\u79F0
            &quot;level&quot;: 1,  //\u5E74\u7EA7
            &quot;levelName&quot;: &quot;\u4E00\u5E74\u7EA7&quot;,  //\u5E74\u7EA7\u540D\u79F0
            &quot;itemOrder&quot;: null,  //\u6392\u5E8F
            &quot;deleted&quot;: false  //\u662F\u5426\u5220\u9664
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-10-\u5B66\u79D1\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-10-\u5B66\u79D1\u5206\u9875" aria-hidden="true">#</a> 4.3.10 \u5B66\u79D1\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/education/subject/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;level&quot;: null,  //\u5E74\u7EA7
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 2,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 6,
                &quot;name&quot;: &quot;\u6570\u5B66&quot;,  //\u5B66\u79D1\u540D\u79F0
                &quot;level&quot;: 1,  //\u5E74\u7EA7
                &quot;levelName&quot;: &quot;\u4E00\u5E74\u7EA7&quot;  //\u5E74\u7EA7\u540D\u79F0
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-11-\u5B66\u79D1\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-3-11-\u5B66\u79D1\u67E5\u8BE2" aria-hidden="true">#</a> 4.3.11 \u5B66\u79D1\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/education/subject/select/2</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 57,
        &quot;name&quot;: &quot;\u6570\u5B66&quot;,  //\u5B66\u79D1\u540D\u79F0
        &quot;level&quot;: 1,    //\u5E74\u7EA7
        &quot;levelName&quot;: &quot;\u4E00\u5E74\u7EA7&quot;   //\u5E74\u7EA7\u540D\u79F0
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-12-\u5B66\u79D1\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#_4-3-12-\u5B66\u79D1\u7F16\u8F91" aria-hidden="true">#</a> 4.3.12 \u5B66\u79D1\u7F16\u8F91</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/education/subject/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 23,
    &quot;name&quot;: &quot;\u6570\u5B66&quot;,  //\u5B66\u79D1\u540D\u79F0
    &quot;level&quot;: 2,   //\u5E74\u7EA7
    &quot;levelName&quot;: &quot;\u4E8C\u5E74\u7EA7&quot;  //\u5E74\u7EA7\u540D\u79F0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-13-\u5B66\u79D1\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-3-13-\u5B66\u79D1\u5220\u9664" aria-hidden="true">#</a> 4.3.13 \u5B66\u79D1\u5220\u9664</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/education/subject/delete/3</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-14-\u8BD5\u5377\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-14-\u8BD5\u5377\u5206\u9875" aria-hidden="true">#</a> 4.3.14 \u8BD5\u5377\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/exam/paper/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;level&quot;: null,   //\u5E74\u7EA7
    &quot;subjectId&quot;: null,  //\u5B66\u79D1
    &quot;pageIndex&quot;: 1,  //\u9875\u7801
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6570\u91CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 9,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 52,     //\u8BD5\u5377id
                &quot;name&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1\u4E8C&quot;,    //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 5,  //\u9898\u76EE\u603B\u6570
                &quot;score&quot;: 180, //\u8BD5\u5377\u5206\u6570
                &quot;createTime&quot;: &quot;2021-01-21 11:49:31&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                &quot;paperType&quot;: 6, //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 13  //\u8BD5\u5377\u5185\u5BB9
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-15-\u8BD5\u5377\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-3-15-\u8BD5\u5377\u67E5\u8BE2" aria-hidden="true">#</a> 4.3.15 \u8BD5\u5377\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/exam/paper/select/9</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 34,   //\u8BD5\u5377id
        &quot;level&quot;: 1,  //\u5E74\u7EA7
        &quot;subjectId&quot;: 1,  //\u5B66\u79D1
        &quot;paperType&quot;: 1,  //\u8BD5\u5377\u7C7B\u578B
        &quot;name&quot;: &quot;\u8BED\u6587\u8BD5\u5377&quot;, //\u8BD5\u5377\u540D\u79F0  
        &quot;suggestTime&quot;: 20,  //\u8003\u8BD5\u65F6\u95F4
        &quot;limitDateTime&quot;: null,  //\u9650\u65F6\u8003\u8BD5
        &quot;titleItems&quot;: [
            {
                &quot;name&quot;: &quot;\u4E00\u3001\u9009\u62E9\u9898&quot;,  //\u8BD5\u5377\u6807\u9898
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 61,   //\u9898\u76EEid
                        &quot;questionType&quot;: 5,  //\u9898\u76EE\u7C7B\u578B
                        &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                        &quot;title&quot;: &quot;\u9ED8\u5199\u548F\u9E45&quot;, //\u9898\u5E72
                        &quot;gradeLevel&quot;: 1, //\u5E74\u7EA7
                        &quot;items&quot;: [], //\u9898\u76EE\u9009\u9879
                        &quot;analyze&quot;: &quot;\u548F\u9E45\u53EF\u4EE5\u5E26\u62FC\u97F3&quot;,  //\u89E3\u6790
                        &quot;correctArray&quot;: null,  //\u6807\u7B54\u6570\u7EC4
                        &quot;correct&quot;: &quot;\u9E45\u9E45\u9E45\uFF0C \u66F2\u9879\u5411\u5929\u6B4C\u3002 \u767D\u6BDB\u6D6E\u7EFF\u6C34\uFF0C \u7EA2\u638C\u62E8\u6E05\u6CE2\u3002&quot;,  //\u6807\u7B54
                        &quot;score&quot;: &quot;10&quot;,  //\u9898\u76EE\u5206\u6570
                        &quot;difficult&quot;: 3,  //\u96BE\u5EA6
                        &quot;itemOrder&quot;: 1  //\u9898\u5E8F
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;10&quot;  //\u8BD5\u5377\u603B\u5206
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-16-\u8BD5\u5377\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#_4-3-16-\u8BD5\u5377\u7F16\u8F91" aria-hidden="true">#</a> 4.3.16 \u8BD5\u5377\u7F16\u8F91</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/exam/paper/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 23,  //\u8BD5\u5377id
    &quot;level&quot;: 1,  //\u5E74\u7EA7
    &quot;subjectId&quot;: 1,  //\u5B66\u79D1
    &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
    &quot;name&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1\u4E8C&quot;,  //\u8BD5\u5377\u540D\u79F0
    &quot;suggestTime&quot;: 20,  //\u8003\u8BD5\u65F6\u957F
    &quot;limitDateTime&quot;: null,  //\u9650\u65F6
    &quot;titleItems&quot;: [
        {
            &quot;name&quot;: &quot;\u4E00\u3001\u9009\u62E9\u9898&quot;,  //\u6807\u9898
            &quot;questionItems&quot;: [   //\u9898\u76EE\u5217\u8868
                {
                    &quot;id&quot;: 23,   //\u9898\u76EEid
                    &quot;questionType&quot;: 2,  //\u9898\u578B
                    &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                    &quot;title&quot;: &quot;\u4EE5\u4E0B\u54EA\u4E9B\u8BD7\u53E5\u662F\u9759\u591C\u601D\u7684\uFF1F&quot;,  //\u9898\u5E72
                    &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
                    &quot;items&quot;: [   //\u9009\u9879
                        {
                            &quot;prefix&quot;: &quot;A&quot;,   //\u9009\u9879\u6807\u8BB0
                            &quot;content&quot;: &quot;\u5E8A\u524D\u660E\u6708\u5149&quot;,  //\u9009\u9879\u5185\u5BB9
                            &quot;score&quot;: null,  //\u9009\u9879\u5206\u6570
                            &quot;itemUuid&quot;: null  //\u9009\u9879\u6807\u8BC6
                        }
                    ],
                    &quot;analyze&quot;: &quot;\u5E8A\u524D\u660E\u6708\u5149\uFF0C \u7591\u662F\u5730\u4E0A\u971C\u3002 \u4E3E\u5934\u671B\u660E\u6708\uFF0C \u4F4E\u5934\u601D\u6545\u4E61\u3002&quot;,  //\u89E3\u6790
                    &quot;correctArray&quot;: [  //\u6B63\u786E\u7B54\u6848
                        &quot;A&quot;,
                        &quot;C&quot;
                    ],
                    &quot;correct&quot;: &quot;A,C&quot;, //\u6B63\u786E\u7B54\u6848
                    &quot;score&quot;: &quot;0&quot;,  //\u9898\u76EE\u5206\u6570
                    &quot;difficult&quot;: 3,  //\u96BE\u5EA6
                    &quot;itemOrder&quot;: 1  //\u9898\u5E8F
                }
            ]
        }
    ],
    &quot;score&quot;: &quot;18&quot;  //\u8BD5\u5377\u603B\u5206
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 6,  //\u8BD5\u5377id
        &quot;level&quot;: 1,  //\u5E74\u7EA7
        &quot;subjectId&quot;: 1,   //\u5B66\u79D1
        &quot;paperType&quot;: 6,   //\u8BD5\u5377\u7C7B\u578B
        &quot;name&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1\u4E8C&quot;,   //\u8BD5\u5377\u540D\u79F0
        &quot;suggestTime&quot;: 20,  //\u8003\u8BD5\u65F6\u957F
        &quot;limitDateTime&quot;: null,  //\u9650\u65F6
        &quot;titleItems&quot;: [
            {
                &quot;name&quot;: &quot;\u4E00\u3001\u9009\u62E9\u9898&quot;,  //\u6807\u9898
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 80,   //\u9898\u76EEid
                        &quot;questionType&quot;: 2,    //\u9898\u578B
                        &quot;subjectId&quot;: 1,   //\u5B66\u79D1
                        &quot;title&quot;: &quot;\u4EE5\u4E0B\u54EA\u4E9B\u8BD7\u53E5\u662F\u9759\u591C\u601D\u7684\uFF1F&quot;,   //\u9898\u5E72
                        &quot;gradeLevel&quot;: 1,    //\u5E74\u7EA7
                        &quot;items&quot;: [   //\u9009\u9879
                            {
                                &quot;prefix&quot;: &quot;A&quot;,   //\u9009\u9879\u6807\u8BB0
                                &quot;content&quot;: &quot;\u5E8A\u524D\u660E\u6708\u5149&quot;,     //\u9009\u9879\u5185\u5BB9
                                &quot;score&quot;: null,   //\u9009\u9879\u5206\u6570
                                &quot;itemUuid&quot;: null  //\u9009\u9879\u6807\u8BC6
                            }
                        ],
                        &quot;analyze&quot;: &quot;\u5E8A\u524D\u660E\u6708\u5149\uFF0C \u7591\u662F\u5730\u4E0A\u971C\u3002 \u4E3E\u5934\u671B\u660E\u6708\uFF0C \u4F4E\u5934\u601D\u6545\u4E61\u3002&quot;,   //\u89E3\u6790
                        &quot;correctArray&quot;: [   //\u6B63\u786E\u7B54\u6848
                            &quot;A&quot;,
                            &quot;C&quot;
                        ],
                        &quot;correct&quot;: &quot;A,C&quot;,   //\u6B63\u786E\u7B54\u6848
                        &quot;score&quot;: &quot;0&quot;,   //\u9898\u76EE\u5206\u6570
                        &quot;difficult&quot;: 3,   //\u96BE\u5EA6
                        &quot;itemOrder&quot;: 1   //\u9898\u5E8F
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;18&quot;  //\u9898\u5E8F
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-17-\u8BD5\u5377\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-3-17-\u8BD5\u5377\u5220\u9664" aria-hidden="true">#</a> 4.3.17 \u8BD5\u5377\u5220\u9664</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/exam/paper/delete/9</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-18-\u4EFB\u52A1\u8BD5\u5377\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-18-\u4EFB\u52A1\u8BD5\u5377\u5206\u9875" aria-hidden="true">#</a> 4.3.18 \u4EFB\u52A1\u8BD5\u5377\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/exam/paper/taskExamPage</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;subjectId&quot;: null,  //\u5B66\u79D1
    &quot;level&quot;: 1,  //\u5E74\u7EA7
    &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
    &quot;pageIndex&quot;: 1,  //\u9875\u9762
    &quot;pageSize&quot;: 5  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 1,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 60,
                &quot;name&quot;: &quot;\u4EFB\u52A1\u8BD5\u5377\u4E94&quot;,   //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 2,   //\u9898\u76EE\u603B\u6570
                &quot;score&quot;: 60,   //\u8BD5\u5377\u5206\u6570
                &quot;createTime&quot;: &quot;2021-08-02 14:36:26&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 26  //\u8BD5\u5377\u5185\u5BB9
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-19-\u9898\u76EE\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-19-\u9898\u76EE\u5206\u9875" aria-hidden="true">#</a> 4.3.19 \u9898\u76EE\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/question/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: null,
    &quot;questionType&quot;: null,
    &quot;level&quot;: null,
    &quot;subjectId&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 7,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 91,
                &quot;questionType&quot;: 5,  //\u9898\u578B
                &quot;textContentId&quot;: null,
                &quot;createTime&quot;: &quot;2021-01-21 11:45:57&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
                &quot;score&quot;: &quot;10&quot;, //\u5F97\u5206
                &quot;status&quot;: 1,  //\u72B6\u6001
                &quot;correct&quot;: &quot;\u9E45\u9E45\u9E45\uFF0C \u66F2\u9879\u5411\u5929\u6B4C\u3002 \u767D\u6BDB\u6D6E\u7EFF\u6C34\uFF0C \u7EA2\u638C\u62E8\u6E05\u6CE2\u3002&quot;,  //\u6807\u7B54
                &quot;analyzeTextContentId&quot;: null,   //\u89E3\u6790
                &quot;difficult&quot;: 3,  //\u96BE\u5EA6
                &quot;shortTitle&quot;: &quot;\u9ED8\u5199\u548F\u9E45&quot;  //\u9898\u5E72
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-20-\u9898\u76EE\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-3-20-\u9898\u76EE\u67E5\u8BE2" aria-hidden="true">#</a> 4.3.20 \u9898\u76EE\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/question/select/508</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 508,  //\u9898\u76EEid
        &quot;questionType&quot;: 5,  //\u9898\u578B
        &quot;subjectId&quot;: 4,  //\u5B66\u79D1
        &quot;title&quot;: &quot;&lt;p&gt;\u4EC0\u4E48\u662F\u5FEB\u4E50\u661F\u7403\uFF1F&lt;/p&gt;&quot;,   //\u9898\u5E72
        &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
        &quot;items&quot;: [],  //\u9009\u9879
        &quot;analyze&quot;: &quot;\u7167\u6284\u5373\u53EF&quot;,  //\u89E3\u6790
        &quot;correctArray&quot;: null,  //\u6807\u7B54
        &quot;correct&quot;: &quot;\u4EC0\u4E48\u662F\u5FEB\u4E50\u661F\u7403&quot;,  //\u6B63\u786E\u7B54\u6848
        &quot;score&quot;: &quot;5&quot;,  //\u9898\u76EE\u5206\u6570
        &quot;difficult&quot;: 5,  //\u96BE\u5EA6
        &quot;itemOrder&quot;: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-21-\u9898\u76EE\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#_4-3-21-\u9898\u76EE\u7F16\u8F91" aria-hidden="true">#</a> 4.3.21 \u9898\u76EE\u7F16\u8F91</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/question/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 47, //\u9898\u76EEid
    &quot;questionType&quot;: 5, //\u9898\u578B
    &quot;subjectId&quot;: 1,  //\u5B66\u79D1
    &quot;title&quot;: &quot;\u9ED8\u5199\u548F\u9E45&quot;,   //\u9898\u5E72
    &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
    &quot;items&quot;: [],  //\u9009\u9879
    &quot;analyze&quot;: &quot;\u548F\u9E45\u53EF\u4EE5\u5E26\u62FC\u97F3&quot;,   //\u89E3\u6790
    &quot;correctArray&quot;: null, //\u6807\u7B54
    &quot;correct&quot;: &quot;\u9E45\u9E45\u9E45\uFF0C \u66F2\u9879\u5411\u5929\u6B4C\u3002 \u767D\u6BDB\u6D6E\u7EFF\u6C34\uFF0C \u7EA2\u638C\u62E8\u6E05\u6CE2\u3002&quot;, //\u6B63\u786E\u7B54\u6848
    &quot;score&quot;: 10,  //\u9898\u76EE\u5206\u6570
    &quot;difficult&quot;: 3, //\u96BE\u5EA6
    &quot;itemOrder&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-22-\u9898\u76EE\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-3-22-\u9898\u76EE\u5220\u9664" aria-hidden="true">#</a> 4.3.22 \u9898\u76EE\u5220\u9664</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/question/delete/7</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-23-\u4EFB\u52A1\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-23-\u4EFB\u52A1\u5206\u9875" aria-hidden="true">#</a> 4.3.23 \u4EFB\u52A1\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/task/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;gradeLevel&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 2,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 91,   //\u4EFB\u52A1id
                &quot;title&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1&quot;,   //\u4EFB\u52A1\u6807\u9898
                &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
                &quot;createUserName&quot;: &quot;admin&quot;,  //\u521B\u5EFA\u4EBA\u7528\u6237\u540D
                &quot;createTime&quot;: &quot;2021-01-21 11:50:24&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;deleted&quot;: false  //\u662F\u5426\u5220\u9664
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-24-\u4EFB\u52A1\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-3-24-\u4EFB\u52A1\u67E5\u8BE2" aria-hidden="true">#</a> 4.3.24 \u4EFB\u52A1\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/task/select/22</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 24,  //\u4EFB\u52A1id
        &quot;gradeLevel&quot;: 12,  //\u5E74\u7EA7
        &quot;title&quot;: &quot;\u8003\u8BD5&quot;,  //\u4EFB\u52A1\u6807\u9898
        &quot;paperItems&quot;: [
            {
                &quot;id&quot;: 592,  //\u8BD5\u5377id
                &quot;name&quot;: &quot;\u8003\u8BD5&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 5,  //\u9898\u76EE\u6570\u91CF
                &quot;score&quot;: 275,  //\u8BD5\u5377\u5206\u6570
                &quot;createTime&quot;: &quot;2021-08-12 15:02:50&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 46,  //\u5B66\u79D1
                &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 2897,  //\u8BD5\u5377\u5185\u5BB9
                &quot;allClasses&quot;: null
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-25-\u4EFB\u52A1\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#_4-3-25-\u4EFB\u52A1\u7F16\u8F91" aria-hidden="true">#</a> 4.3.25 \u4EFB\u52A1\u7F16\u8F91</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/task/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 47,
    &quot;gradeLevel&quot;: 1,
    &quot;title&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1&quot;,
    &quot;paperItems&quot;: [
        {
            &quot;id&quot;: 64,  //\u8BD5\u5377id
            &quot;name&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1\u4E00&quot;,  //\u8BD5\u5377\u540D\u79F0
            &quot;questionCount&quot;: 5,  //\u9898\u76EE\u6570\u91CF
            &quot;score&quot;: 180,  //\u8BD5\u5377\u5206\u6570
            &quot;createTime&quot;: &quot;2021-01-21 11:49:11&quot;,  //\u521B\u5EFA\u65F6\u95F4
            &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
            &quot;subjectId&quot;: 1,  //\u5B66\u79D1
            &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
            &quot;frameTextContentId&quot;: 12  //\u8BD5\u5377\u5185\u5BB9
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 14,  //\u4EFB\u52A1id
        &quot;gradeLevel&quot;: 1,   //\u5E74\u7EA7
        &quot;title&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1&quot;,  //\u4EFB\u52A1\u6807\u9898
        &quot;paperItems&quot;: [
            {
                &quot;id&quot;: 66,  //\u8BD5\u5377id
                &quot;name&quot;: &quot;\u4E2D\u7EA7\u4EFB\u52A1\u4E00&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 5,  //\u9898\u76EE\u6570\u91CF
                &quot;score&quot;: 180,  //\u8BD5\u5377\u5206\u6570
                &quot;createTime&quot;: &quot;2021-01-21 11:49:11&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2,  //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                &quot;paperType&quot;: 6,  //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 12  //\u8BD5\u5377\u5185\u5BB9
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-26-\u4EFB\u52A1\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-3-26-\u4EFB\u52A1\u5220\u9664" aria-hidden="true">#</a> 4.3.26 \u4EFB\u52A1\u5220\u9664</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/task/delete/1</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //\u8FD4\u56DE\u72B6\u6001
    &quot;message&quot;: &quot;\u6210\u529F&quot;, //\u8FD4\u56DE\u6D88\u606F
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-27-\u6D88\u606F\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-27-\u6D88\u606F\u5206\u9875" aria-hidden="true">#</a> 4.3.27 \u6D88\u606F\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/message/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;sendUserName&quot;: null,
    &quot;pageIndex&quot;: 4,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 36,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 64,   //\u6D88\u606Fid
                &quot;title&quot;: &quot;\u4F60\u597D\uFF0C\u540C\u5B66\uFF01&quot;,  //\u6D88\u606F\u6807\u9898
                &quot;content&quot;: &quot;\u8003\u8BD5\u8BF7\u4E0D\u8981\u4F5C\u5F0A&quot;,  //\u6D88\u606F\u5185\u5BB9
                &quot;sendUserName&quot;: &quot;admin&quot;,  //\u53D1\u9001\u4EBA\u7528\u6237\u540D
                &quot;receives&quot;: &quot;student&quot;,  //\u63A5\u6536\u4EBA\u7528\u6237\u540D
                &quot;receiveUserCount&quot;: 1,  //\u63A5\u6536\u4EBA\u6570\u91CF
                &quot;readCount&quot;: 1,  //\u5DF2\u8BFB\u6570\u91CF
                &quot;createTime&quot;: &quot;2020-09-22 11:37:49&quot; //\u521B\u5EFA\u65F6\u95F4
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-28-\u6D88\u606F\u53D1\u9001" tabindex="-1"><a class="header-anchor" href="#_4-3-28-\u6D88\u606F\u53D1\u9001" aria-hidden="true">#</a> 4.3.28 \u6D88\u606F\u53D1\u9001</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/message/send</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;title&quot;: &quot;\u5168\u6821\u5E08\u751F\u8BF7\u6CE8\u610F&quot;,  //\u6D88\u606F\u6807\u9898
    &quot;content&quot;: &quot;\u5927\u5BB6\u597D&quot;,  //\u6D88\u606F\u5185\u5BB9
    &quot;receiveUserIds&quot;: [  //\u63A5\u6536\u4EBA
        1
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,  //\u8FD4\u56DE\u72B6\u6001
    &quot;message&quot;: &quot;\u6210\u529F&quot;, //\u8FD4\u56DE\u6D88\u606F
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-29-\u7B54\u5377\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-3-29-\u7B54\u5377\u5206\u9875" aria-hidden="true">#</a> 4.3.29 \u7B54\u5377\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/examPaperAnswer/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;subjectId&quot;: null,  //\u5B66\u79D1
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 4,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 79,
                &quot;createTime&quot;: &quot;2021-07-07 14:03:02&quot;,  //\u63D0\u4EA4\u65F6\u95F4
                &quot;userScore&quot;: &quot;16&quot;,  //\u7528\u6237\u5F97\u5206
                &quot;subjectName&quot;: &quot;\u8BED\u6587&quot;,  //\u5B66\u79D1\u540D\u79F0
                &quot;subjectId&quot;: 1,  //\u5B66\u79D1Id  
                &quot;questionCount&quot;: 5,  //\u9898\u76EE\u6570\u91CF
                &quot;questionCorrect&quot;: 4,  //\u6B63\u786E\u9898\u76EE\u6570
                &quot;paperScore&quot;: &quot;18&quot;, //\u8BD5\u5377\u603B\u5206
                &quot;doTime&quot;: &quot;14 \u79D2&quot;,  //\u8017\u65F6
                &quot;paperType&quot;: 4,  //\u8BD5\u5377\u7C7B\u578B
                &quot;systemScore&quot;: &quot;2&quot;,  //\u81EA\u52A8\u6279\u6539\u5F97\u5206
                &quot;status&quot;: 2,  //\u7B54\u5377\u72B6\u6001
                &quot;paperName&quot;: &quot;\u9650\u65F6\u8003\u8BD5\u4E8C&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;userName&quot;: &quot;student&quot; //\u7528\u6237\u540D
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-30-\u7528\u6237\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_4-3-30-\u7528\u6237\u65E5\u5FD7" aria-hidden="true">#</a> 4.3.30 \u7528\u6237\u65E5\u5FD7</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/event/page/list</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;userId&quot;: null,
    &quot;userName&quot;: null,
    &quot;pageIndex&quot;: 1,
    &quot;pageSize&quot;: 10
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 68,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 33,  //\u65E5\u5FD7id
                &quot;userId&quot;: 2,  //\u7528\u6237id
                &quot;userName&quot;: &quot;admin&quot;,  //\u7528\u6237\u540D
                &quot;realName&quot;: &quot;\u7BA1\u7406\u5458&quot;, //\u771F\u5B9E\u59D3\u540D
                &quot;content&quot;: &quot;admin \u767B\u5F55\u4E86\u5B66\u4E4B\u601D\u5F00\u6E90\u8003\u8BD5\u7CFB\u7EDF&quot;, //\u65E5\u5FD7\u5185\u5BB9
                &quot;createTime&quot;: &quot;2021-08-24 20:05:02&quot; //\u521B\u5EFA\u65F6\u95F4
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-31-\u5F53\u524D\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-3-31-\u5F53\u524D\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> 4.3.31 \u5F53\u524D\u7528\u6237\u4FE1\u606F</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/current</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 5,
        &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;, //\u7528\u6237uuid
        &quot;userName&quot;: &quot;admin&quot;,  //\u7528\u6237\u540D
        &quot;realName&quot;: &quot;\u7BA1\u7406\u5458&quot;, //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: 30, //\u5E74\u9F84
        &quot;role&quot;: 3, //\u89D2\u8272
        &quot;sex&quot;: 1, //\u6027\u522B
        &quot;birthDay&quot;: &quot;2019-09-07 18:56:07&quot;, //\u51FA\u751F\u65E5\u671F
        &quot;phone&quot;: null, //\u624B\u673A\u53F7
        &quot;lastActiveTime&quot;: &quot;&quot;,  //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
        &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;,  //\u521B\u5EFA\u65F6\u95F4
        &quot;modifyTime&quot;: &quot;&quot;, //\u4FEE\u6539\u65F6\u95F4
        &quot;status&quot;: 1, //\u72B6\u6001
        &quot;userLevel&quot;: null, //\u7528\u6237\u5E74\u7EA7
        &quot;imagePath&quot;: null  //\u5934\u50CF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-32-\u7528\u6237\u4FE1\u606F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_4-3-32-\u7528\u6237\u4FE1\u606F\u66F4\u65B0" aria-hidden="true">#</a> 4.3.32 \u7528\u6237\u4FE1\u606F\u66F4\u65B0</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/update</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 27,  //\u7528\u6237id
    &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;, //\u7528\u6237\u6807\u8BC6
    &quot;userName&quot;: &quot;admin&quot;, //\u7528\u6237\u540D
    &quot;realName&quot;: &quot;\u7BA1\u7406\u5458&quot;, //\u771F\u5B9E\u59D3\u540D
    &quot;age&quot;: 30, //\u5E74\u9F84
    &quot;role&quot;: 3, //\u89D2\u8272
    &quot;sex&quot;: 1,  //\u6027\u522B
    &quot;birthDay&quot;: &quot;2019-09-07 18:56:07&quot;, //\u751F\u65E5
    &quot;phone&quot;: &quot;11&quot;, //\u624B\u673A\u53F7
    &quot;lastActiveTime&quot;: &quot;&quot;, //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
    &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;, //\u521B\u5EFA\u65F6\u95F4
    &quot;modifyTime&quot;: &quot;2021-08-17 11:28:52&quot;, //\u4FEE\u6539\u65F6\u95F4
    &quot;status&quot;: 1, //\u72B6\u6001
    &quot;userLevel&quot;: null, //\u5E74\u7EA7
    &quot;imagePath&quot;: null //\u5934\u50CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-32-\u7528\u6237\u4FE1\u606F\u66F4\u65B0-1" tabindex="-1"><a class="header-anchor" href="#_4-3-32-\u7528\u6237\u4FE1\u606F\u66F4\u65B0-1" aria-hidden="true">#</a> 4.3.32 \u7528\u6237\u4FE1\u606F\u66F4\u65B0</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/selectByUserName</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>student  //\u7528\u6237\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;name&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
            &quot;value&quot;: 1  //\u7528\u6237id
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-33-\u56FE\u7247\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_4-3-33-\u56FE\u7247\u4E0A\u4F20" aria-hidden="true">#</a> 4.3.33 \u56FE\u7247\u4E0A\u4F20</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/upload/configAndUpload</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;original&quot;: &quot;\u5934\u50CF.jpg&quot;,
    &quot;name&quot;: &quot;\u5934\u50CF.jpg&quot;,
    &quot;url&quot;: &quot;http://xzs.file.mindskip.net/Fi4vlEf1ri4VMGSONwN2Ch0o8Ed_&quot;,
    &quot;size&quot;: 19665,
    &quot;type&quot;: &quot;.jpg&quot;,
    &quot;state&quot;: &quot;SUCCESS&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-34-\u4E2A\u4EBA\u4FE1\u606F\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_4-3-34-\u4E2A\u4EBA\u4FE1\u606F\u4FEE\u6539" aria-hidden="true">#</a> 4.3.34 \u4E2A\u4EBA\u4FE1\u606F\u4FEE\u6539</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/admin/user/update</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 33,
    &quot;userUuid&quot;: &quot;52045f5f-a13f-4ccc-93dd-f7ee8270ad4c&quot;,  //\u7528\u6237uuid
    &quot;userName&quot;: &quot;admin&quot;, //\u7528\u6237\u540D
    &quot;realName&quot;: &quot;\u7BA1\u7406\u5458&quot;, //\u771F\u5B9E\u59D3\u540D
    &quot;age&quot;: 30, //\u5E74\u9F84
    &quot;role&quot;: 3, //\u89D2\u8272
    &quot;sex&quot;: 1, //\u6027\u522B
    &quot;birthDay&quot;: &quot;2021-09-07 18:56:07&quot;,  //\u51FA\u751F\u65E5\u671F
    &quot;phone&quot;: &quot;2112112&quot;, //\u624B\u673A\u53F7
    &quot;lastActiveTime&quot;: &quot;&quot;, //\u6700\u540E\u6D3B\u52A8\u65F6\u95F4
    &quot;createTime&quot;: &quot;2019-09-07 18:56:21&quot;,  //\u521B\u5EFA\u65F6\u95F4
    &quot;modifyTime&quot;: &quot;2021-08-31 10:08:03&quot;, //\u4FEE\u6539\u65F6\u95F4
    &quot;status&quot;: 1, //\u72B6\u6001
    &quot;userLevel&quot;: null,  //\u5E74\u7EA7
    &quot;imagePath&quot;: null //\u5934\u50CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,144),s=[d];function t(a,o){return i(),n("div",null,s)}const r=e(l,[["render",t],["__file","admin.html.vue"]]);export{r as default};
