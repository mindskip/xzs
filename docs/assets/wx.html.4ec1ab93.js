import{_ as e,o as i,c as n,e as u}from"./app.35506946.js";const d={},s=u(`<h1 id="_4-2-\u5C0F\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5C0F\u7A0B\u5E8F" aria-hidden="true">#</a> 4.2 \u5C0F\u7A0B\u5E8F</h1><h3 id="_4-2-1-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u767B\u5F55" aria-hidden="true">#</a> 4.2.1 \u767B\u5F55</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/auth/bind</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     userName: student  //\u7528\u6237\u540D
     password: 123456   //\u5BC6\u7801
     code: 023BNuFa1CQ14B07KVHa16RHM94BNuF0   //\u6388\u6743\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: &quot;950efd96-ecd1-4482-9204-c54cd3325a8a&quot;  //\u767B\u5F55Token
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-2-\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u6CE8\u518C" aria-hidden="true">#</a> 4.2.2 \u6CE8\u518C</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/register</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    userName: student2  //\u7528\u6237\u540D
    password: 123456 //\u5BC6\u7801
    userLevel: 1   //\u5E74\u7EA7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-\u68C0\u67E5\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u68C0\u67E5\u7ED1\u5B9A" aria-hidden="true">#</a> 4.2.3 \u68C0\u67E5\u7ED1\u5B9A</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/register</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    code: 063MMx000eoAnM15Tj400hq8l64MMx0Z  //\u4EE4\u724C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: &quot;2fa8cbb7-6be9-4e54-bc68-1265348cf703&quot;  //\u767B\u5F55\u4EE4\u724C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-\u89E3\u7ED1\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u89E3\u7ED1\u9000\u51FA" aria-hidden="true">#</a> 4.2.3 \u89E3\u7ED1\u9000\u51FA</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/auth/unBind</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //\u4EE4\u724C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-\u4E3B\u9875\u8BD5\u5377\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u4E3B\u9875\u8BD5\u5377\u5217\u8868" aria-hidden="true">#</a> 4.2.3 \u4E3B\u9875\u8BD5\u5377\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/dashboard/index</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //\u4EE4\u724C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;fixedPaper&quot;: [  //\u56FA\u5B9A\u8BD5\u5377
            {
                &quot;id&quot;: 25,  //\u8BD5\u5377id
                &quot;name&quot;: &quot;aaa&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;limitStartTime&quot;: null,
                &quot;limitEndTime&quot;: null
            }
        ],
        &quot;timeLimitPaper&quot;: [  //\u65F6\u6BB5\u8BD5\u5377
            {
                &quot;id&quot;: 90,  //\u8BD5\u5377id
                &quot;name&quot;: &quot;202008705&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;limitStartTime&quot;: 1600704000000,
                &quot;limitEndTime&quot;: 1664985600000,
                &quot;startTime&quot;: &quot;2020-09-22 00:00:00&quot;,  //\u8003\u8BD5\u5F00\u59CB\u65F6\u95F4
                &quot;endTime&quot;: &quot;2022-10-06 00:00:00&quot;  //\u8003\u8BD5\u7ED3\u675F\u65F6\u95F4
            }
        ],
        &quot;classPaper&quot;: [  //\u73ED\u7EA7\u8BD5\u5377
            {
                &quot;paperId&quot;: 21,  //\u8BD5\u5377id
                &quot;paperName&quot;: &quot;20200908&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;className&quot;: &quot;1\u73ED&quot;  //\u73ED\u7EA7
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-\u4EFB\u52A1\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#_4-2-4-\u4EFB\u52A1\u4E2D\u5FC3" aria-hidden="true">#</a> 4.2.4 \u4EFB\u52A1\u4E2D\u5FC3</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/dashboard/index</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //\u4EE4\u724C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 90,
            &quot;title&quot;: &quot;\u57FA\u7840\u4EFB\u52A1&quot;, //\u4EFB\u52A1\u6807\u9898
            &quot;paperItems&quot;: [
                {
                    &quot;examPaperId&quot;: 19,  //\u8BD5\u5377id
                    &quot;examPaperName&quot;: &quot;\u57FA\u7840\u4EFB\u52A1\u4E00&quot;,  //\u8BD5\u5377\u540D\u79F0
                    &quot;examPaperAnswerId&quot;: 9,  //\u7B54\u5377id
                    &quot;status&quot;: 2 //\u7B54\u5377\u72B6\u6001
                }
            ]
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-\u8BD5\u5377\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-2-4-\u8BD5\u5377\u5217\u8868" aria-hidden="true">#</a> 4.2.4 \u8BD5\u5377\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/exam/paper/pageList</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    paperType: 1,  //\u8BD5\u5377\u7C7B\u578B
    pageIndex: 1,  //\u9875\u7801
    pageSize: 20  //\u6BCF\u9875\u6570\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 9,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 51,
                &quot;name&quot;: &quot;\u56FA\u5B9A\u8BD5\u5377&quot;, //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 1, //\u9898\u76EE\u6570\u91CF
                &quot;score&quot;: 50, //\u5206\u6570
                &quot;createTime&quot;: &quot;2021-09-10 16:06:45&quot;, //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2, //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 4, //\u5B66\u79D1
                &quot;subjectName&quot;: &quot;\u8BED\u6587&quot;, //\u5B66\u79D1\u540D\u79F0
                &quot;paperType&quot;: 1, //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 294,  \u8BD5\u5377\u5185\u5BB9
                &quot;startTime&quot;: &quot;&quot;,  //\u8003\u8BD5\u5F00\u59CB\u65F6\u95F4
                &quot;endTime&quot;: &quot;&quot;, //\u8003\u8BD5\u7ED3\u675F\u65F6\u95F4
                &quot;paperTypeStr&quot;: &quot;\u56FA\u5B9A\u8BD5\u5377&quot;, //\u8BD5\u5377\u7C7B\u578B
                &quot;scoreStr&quot;: &quot;5&quot;, //\u5206\u6570
                &quot;suggestTimeStr&quot;: &quot;20\u5206\u949F&quot; //\u8003\u8BD5\u65F6\u957F
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-5-\u8BD5\u5377\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-2-5-\u8BD5\u5377\u67E5\u8BE2" aria-hidden="true">#</a> 4.2.5 \u8BD5\u5377\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/exam/paper/select/24</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 27, //\u8BD5\u5377id
        &quot;level&quot;: 1,  //\u5E74\u7EA7
        &quot;subjectId&quot;: 4,  //\u5B66\u79D1
        &quot;paperType&quot;: 1,  //\u8BD5\u5377\u7C7B\u578B
        &quot;name&quot;: &quot;20200912\u5377&quot;,  //\u8BD5\u5377\u540D\u79F0
        &quot;suggestTime&quot;: 30,  //\u8003\u8BD5\u65F6\u957F
        &quot;limitDateTime&quot;: null,  
        &quot;titleItems&quot;: [ //\u6807\u9898
            {
                &quot;name&quot;: &quot;\u4E00\u3001\u89E3\u7B54\u9898&quot;,  //\u6807\u9898\u540D\u79F0
                &quot;questionItems&quot;: [  //\u9898\u76EE\u5217\u8868
                    {
                        &quot;id&quot;: 37,  //\u9898\u76EEid
                        &quot;questionType&quot;: 1, //\u9898\u76EE\u7C7B\u578B
                        &quot;subjectId&quot;: 4, //\u5B66\u79D1
                        &quot;title&quot;: &quot;\u4E2D\u534E\u56DB\u5927\u540D\u8457\u90FD\u6709\u54EA\u4E9B\uFF0C\u4E0B\u5217\u6B63\u786E\u7684\u662F&quot;,  //\u9898\u5E72
                        &quot;gradeLevel&quot;: 1, //\u5E74\u7EA7
                        &quot;items&quot;: [  //\u9009\u9879
                            {
                                &quot;prefix&quot;: &quot;A&quot;,  //\u9009\u9879\u6807\u8BC6
                                &quot;content&quot;: &quot;\u7EA2\u697C\u68A6&quot;,  //\u9009\u9879\u5185\u5BB9
                                &quot;score&quot;: null //\u5206\u6570
                            }
                        ],
                        &quot;analyze&quot;: &quot;\u9898\u76EE\u6BD4\u8F83\u7B80\u5355\uFF0C\u81EA\u884C\u5206\u6790&quot;, //\u89E3\u6790
                        &quot;correctArray&quot;: null,  //\u6807\u7B54
                        &quot;correct&quot;: &quot;A&quot;,  //\u6807\u7B54
                        &quot;score&quot;: &quot;2.5&quot;, //\u5F97\u5206
                        &quot;difficult&quot;: 3, //\u96BE\u5EA6
                        &quot;itemOrder&quot;: 1, //\u9898\u76EE\u6392\u5E8F
                        &quot;knowledgeIdList&quot;: [ //\u9898\u76EE\u77E5\u8BC6\u70B9
                            8,
                            9
                        ]
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;20&quot;, //\u8BD5\u5377\u5F97\u5206
        &quot;classes&quot;: null //\u73ED\u7EA7
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-6-\u7B54\u5377\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-2-6-\u7B54\u5377\u5217\u8868" aria-hidden="true">#</a> 4.2.6 \u7B54\u5377\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/exam/paper/pageList</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    pageIndex: 1,  //\u9875\u7801
    pageSize: 20  //\u6BCF\u9875\u6570\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 248,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 262,
                &quot;createTime&quot;: &quot;2021-09-15 14:42:22&quot;,  //\u63D0\u4EA4\u65F6\u95F4
                &quot;userScore&quot;: &quot;0&quot;,  //\u5F97\u5206
                &quot;subjectName&quot;: &quot;\u8BED\u6587&quot;, //\u5B66\u79D1
                &quot;subjectId&quot;: 4, //\u5B66\u79D1
                &quot;questionCount&quot;: 2, //\u9898\u76EE\u6570\u91CF
                &quot;questionCorrect&quot;: 1, //\u6B63\u786E\u9898\u6570
                &quot;paperScore&quot;: &quot;1&quot;, //\u8BD5\u5377\u603B\u5206
                &quot;doTime&quot;: &quot;2\u79D2&quot;, //\u8017\u65F6
                &quot;paperType&quot;: 7, //\u8BD5\u5377\u7C7B\u578B
                &quot;paperTypeStr&quot;: &quot;\u968F\u673A\u8BD5\u5377&quot;, //\u8BD5\u5377\u7C7B\u578B
                &quot;systemScore&quot;: &quot;0&quot;, //\u81EA\u52A8\u6279\u6539\u5F97\u5206
                &quot;status&quot;: 2, //\u72B6\u6001
                &quot;paperName&quot;: &quot;\u667A\u80FD\u8BAD\u7EC3\u8BD5\u5377 - 51&quot;, //\u8BD5\u5377\u540D\u79F0
                &quot;userName&quot;: null
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-7-\u8BD5\u5377\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_4-2-7-\u8BD5\u5377\u63D0\u4EA4" aria-hidden="true">#</a> 4.2.7 \u8BD5\u5377\u63D0\u4EA4</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/exampaper/answer/answerSubmit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;1_42_1&quot;: &quot;A&quot; //\u7B54\u9898\u4FE1\u606F
    &quot;id&quot;: &quot;78&quot; //\u8BD5\u5377id
    &quot;doTime&quot;: 3  //\u8017\u65F6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: &quot;0&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-8-\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-2-8-\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> 4.2.8 \u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/current</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 21,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;, //\u7528\u6237uuid
        &quot;userName&quot;: &quot;student&quot;, //\u7528\u6237\u540D
        &quot;realName&quot;: &quot;\u5B66\u751F&quot;, //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: 18, //\u5E74\u9F84
        &quot;role&quot;: 1, //\u89D2\u8272
        &quot;sex&quot;: 1, //\u6027\u522B
        &quot;birthDay&quot;: &quot;2019-09-17&quot;, //\u751F\u65E5
        &quot;phone&quot;: &quot;158800882&quot;, //\u624B\u673A\u53F7
        &quot;lastActiveTime&quot;: &quot;&quot;,
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //\u521B\u5EFA\u65F6\u95F4
        &quot;modifyTime&quot;: &quot;2021-09-15 18:38:34&quot;, //\u4FEE\u6539\u65F6\u95F4
        &quot;status&quot;: 1, //\u72B6\u6001
        &quot;userLevel&quot;: 1, //\u5E74\u7EA7
        &quot;userLevelStr&quot;: &quot;\u4E00\u5E74\u7EA7&quot;, //\u5E74\u7EA7
        &quot;classes&quot;: &quot;1\u73ED&quot;, //\u73ED\u7EA7
        &quot;imagePath&quot;: &quot;&quot; //\u7528\u6237\u5934\u50CF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-9-\u7528\u6237\u4FE1\u606F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_4-2-9-\u7528\u6237\u4FE1\u606F\u66F4\u65B0" aria-hidden="true">#</a> 4.2.9 \u7528\u6237\u4FE1\u606F\u66F4\u65B0</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/update</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;realName&quot;: &quot;\u5B66\u751F&quot;,  //\u771F\u5B9E\u59D3\u540D
    &quot;age&quot;: 18, //\u5E74\u9F84
    &quot;sex&quot;: &quot;1&quot;, //\u6027\u522B
    &quot;birthDay&quot;: &quot;2019-09-17&quot;,  //\u51FA\u751F\u65E5\u671F
    &quot;phone&quot;: &quot;158800882&quot; //\u624B\u673A\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 57,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,  //\u7528\u6237uuid
        &quot;userName&quot;: &quot;student&quot;, //\u7528\u6237\u540D
        &quot;realName&quot;: &quot;\u5B66\u751F&quot;,  //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: 18, //\u5E74\u9F84
        &quot;role&quot;: 1, //\u89D2\u8272
        &quot;sex&quot;: 1, //\u6027\u522B
        &quot;birthDay&quot;: &quot;2019-09-17 00:00:00&quot;, //\u51FA\u751F\u65E5\u671F
        &quot;phone&quot;: &quot;158800882&quot;, //\u624B\u673A\u53F7
        &quot;lastActiveTime&quot;: &quot;&quot;, //\u6700\u597D\u6D3B\u52A8\u65F6\u95F4
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //\u521B\u5EFA\u65F6\u95F4
        &quot;modifyTime&quot;: &quot;2021-09-23 21:20:34&quot;, //\u4FEE\u6539\u65F6\u95F4
        &quot;status&quot;: 1, //\u72B6\u6001
        &quot;userLevel&quot;: 1, //\u5E74\u7EA7
        &quot;userLevelStr&quot;: null,  //\u5E74\u7EA7
        &quot;classes&quot;: null, //\u73ED\u7EA7
        &quot;imagePath&quot;: &quot;&quot; //\u5934\u50CF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-10-\u7528\u6237\u52A8\u6001" tabindex="-1"><a class="header-anchor" href="#_4-2-10-\u7528\u6237\u52A8\u6001" aria-hidden="true">#</a> 4.2.10 \u7528\u6237\u52A8\u6001</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/log</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 6136,  
            &quot;userId&quot;: 1, //\u7528\u6237id
            &quot;userName&quot;: &quot;student&quot;, //\u7528\u6237\u540D
            &quot;realName&quot;: &quot;\u5B66\u751F&quot;, //\u771F\u5B9E\u59D3\u540D
            &quot;content&quot;: &quot;student \u767B\u5F55\u4E86\u5B66\u4E4B\u601D\u5F00\u6E90\u8003\u8BD5\u7CFB\u7EDF&quot;, //\u65E5\u5FD7\u5185\u5BB9
            &quot;createTime&quot;: &quot;2021-09-24 21:52:05&quot; //\u521B\u5EFA\u65F6\u95F4
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-11-\u6D88\u606F\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-2-11-\u6D88\u606F\u5217\u8868" aria-hidden="true">#</a> 4.2.11 \u6D88\u606F\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/message/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    pageIndex: 1,  //\u9875\u7801
    pageSize: 20   //\u6BCF\u9875\u6570\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 7,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 1, //\u6D88\u606F
                &quot;title&quot;: &quot;\u56FD\u5E86\u5047\u8BF4\u660E&quot;,  //\u6D88\u606F\u6807\u9898
                &quot;messageId&quot;: 17,  //\u6D88\u606Fid
                &quot;content&quot;: &quot;\u5047\u671F\u4E03\u5929\u8BF7\u6CE8\u610F\u5B89\u5168\u3002\u3002\u3002&quot;,  //\u6D88\u606F\u5185\u5BB9
                &quot;readed&quot;: true, //\u662F\u5426\u5DF2\u8BFB
                &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;, //\u521B\u5EFA\u65F6\u95F4
                &quot;sendUserName&quot;: &quot;admin&quot; //\u53D1\u9001\u4EBA\u7528\u6237\u540D
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-12-\u6D88\u606F\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#_4-2-12-\u6D88\u606F\u8BE6\u60C5" aria-hidden="true">#</a> 4.2.12 \u6D88\u606F\u8BE6\u60C5</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/message/read/26</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 0,
        &quot;title&quot;: &quot;\u56FD\u5E86\u5047\u8BF4\u660E&quot;,  //\u6D88\u606F\u6807\u9898
        &quot;content&quot;: &quot;\u5047\u671F\u4E03\u5929\u8BF7\u6CE8\u610F\u5B89\u5168\u3002\u3002\u3002&quot;,  //\u6D88\u606F\u5185\u5BB9
        &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;,  //\u521B\u5EFA\u65F6\u95F4
        &quot;sendUserId&quot;: 2, //\u53D1\u9001\u4EBAid
        &quot;sendUserName&quot;: &quot;admin&quot;, //\u53D1\u9001\u4EBA\u7528\u6237\u540D
        &quot;sendRealName&quot;: &quot;\u7BA1\u7406\u5458&quot;, //\u53D1\u9001\u4EBA\u771F\u5B9E\u59D3\u540D
        &quot;receiveUserCount&quot;: 4,
        &quot;readCount&quot;: 1 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-13-\u6D88\u606F\u672A\u8BFB\u6570" tabindex="-1"><a class="header-anchor" href="#_4-1-13-\u6D88\u606F\u672A\u8BFB\u6570" aria-hidden="true">#</a> 4.1.13 \u6D88\u606F\u672A\u8BFB\u6570</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/message/unreadCount</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: 0  //\u672A\u8BFB\u6D88\u606F\u6570\u91CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-14-\u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB" tabindex="-1"><a class="header-anchor" href="#_4-1-14-\u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB" aria-hidden="true">#</a> 4.1.14 \u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/wx/student/user/message/read/14</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),l=[s];function t(a,o){return i(),n("div",null,l)}const r=e(d,[["render",t],["__file","wx.html.vue"]]);export{r as default};
