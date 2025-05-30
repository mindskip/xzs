import{_ as e,o as i,c as n,e as u}from"./app.35506946.js";const d={},s=u(`<h1 id="_4-1-\u5B66\u751F\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5B66\u751F\u7AEF" aria-hidden="true">#</a> 4.1 \u5B66\u751F\u7AEF</h1><h3 id="_4-1-1-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u767B\u5F55" aria-hidden="true">#</a> 4.1.1 \u767B\u5F55</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/user/login</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
    &quot;password&quot;: &quot;&quot;,  //\u5BC6\u7801
    &quot;remember&quot;: false  //\u4E0B\u6B21\u81EA\u52A8\u767B\u5F55
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
        &quot;userName&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
        &quot;imagePath&quot;: &quot;&quot;,  //\u5934\u50CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-2-\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u6CE8\u518C" aria-hidden="true">#</a> 4.1.2 \u6CE8\u518C</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/register</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;userName&quot;: &quot;student5&quot;, //\u7528\u6237\u540D
    &quot;password&quot;: &quot;123456&quot;,  //\u5BC6\u7801
    &quot;userLevel&quot;: 1  //\u5E74\u7EA7
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-3-\u767B\u51FA" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u767B\u51FA" aria-hidden="true">#</a> 4.1.3 \u767B\u51FA</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/user/logout</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-4-\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#_4-1-4-\u9996\u9875" aria-hidden="true">#</a> 4.1.4 \u9996\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/dashboard/index</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;fixedPaper&quot;: [  //\u56FA\u5B9A\u8BD5\u5377
        {
            &quot;id&quot;: 2399,  //\u8BD5\u5377Id
            &quot;name&quot;: &quot;test33333&quot;,  //\u8BD5\u5377\u540D\u79F0
            &quot;limitStartTime&quot;: null,  //\u8003\u8BD5\u5F00\u59CB\u65F6\u95F4
            &quot;limitEndTime&quot;: null     //\u8003\u8BD5\u7ED3\u675F\u65F6\u95F4
        }
    ],
    &quot;timeLimitPaper&quot;: []    //\u65F6\u6BB5\u8BD5\u5377
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-5-\u4EFB\u52A1\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#_4-1-5-\u4EFB\u52A1\u4E2D\u5FC3" aria-hidden="true">#</a> 4.1.5 \u4EFB\u52A1\u4E2D\u5FC3</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/dashboard/task</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[
        {
            &quot;id&quot;: 74,  //\u4EFB\u52A1id
            &quot;title&quot;: &quot;2021-04-25\u4F5C\u4E1A&quot;,  //\u4EFB\u52A1\u6807\u9898
            &quot;paperItems&quot;: [
                {
                    &quot;examPaperId&quot;: 181,   //\u4EFB\u52A1\u8BD5\u5377id
                    &quot;examPaperName&quot;: &quot;\u7B2C\u4E00\u6B21\u51FA\u5377&quot;,  //\u4EFB\u52A1\u8BD5\u5377\u540D\u79F0
                    &quot;examPaperAnswerId&quot;: 579,  //\u7B54\u5377id
                    &quot;status&quot;: 2  //\u7B54\u5377\u72B6\u6001
                }
            ]
        }
    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-6-\u5B66\u79D1\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-1-6-\u5B66\u79D1\u5217\u8868" aria-hidden="true">#</a> 4.1.6 \u5B66\u79D1\u5217\u8868</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/education/subject/list</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: &quot;18&quot;,  //\u5B66\u79D1id
            &quot;name&quot;: &quot;\u82F1\u8BED&quot;  //\u5B66\u79D1\u540D\u79F0
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-7-\u8BD5\u5377\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-1-7-\u8BD5\u5377\u5206\u9875" aria-hidden="true">#</a> 4.1.7 \u8BD5\u5377\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exam/paper/pageList</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;paperType&quot;: 1, //\u8BD5\u5377\u7C7B\u578B
    &quot;subjectId&quot;: 158, //\u5B66\u79D1id
    &quot;pageIndex&quot;: 1, //\u9875\u6570
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 1,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 2520,  //\u8BD5\u5377id
                &quot;name&quot;: &quot;\u751F\u7406\u536B\u751F&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;questionCount&quot;: 1,  //\u9898\u76EE\u6570
                &quot;score&quot;: 20,  //\u8BD5\u5377\u5206\u6570
                &quot;createTime&quot;: &quot;2021-05-31 13:34:49&quot;, //\u521B\u5EFA\u65F6\u95F4
                &quot;createUser&quot;: 2,   //\u521B\u5EFA\u4EBA
                &quot;subjectId&quot;: 158,  //\u5B66\u79D1
                &quot;subjectName&quot;: &quot;\u82F1\u8BED&quot;,  //\u5B66\u79D1
                &quot;paperType&quot;: 1,   //\u8BD5\u5377\u7C7B\u578B
                &quot;frameTextContentId&quot;: 9016  //\u8BD5\u5377\u5185\u5BB9
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-8-\u8BD5\u5377\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-1-8-\u8BD5\u5377\u67E5\u8BE2" aria-hidden="true">#</a> 4.1.8 \u8BD5\u5377\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exam/paper/select/9</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 29,  //\u8BD5\u5377id
        &quot;level&quot;: 1,  //\u5E74\u7EA7
        &quot;subjectId&quot;: 1,  //\u5B66\u79D1
        &quot;paperType&quot;: 1,  //\u8BD5\u5377\u7C7B\u578B
        &quot;name&quot;: &quot;\u6D4B\u8BD5\u4E00&quot;,  //\u8BD5\u5377\u540D\u79F0
        &quot;suggestTime&quot;: 22,  //\u5EFA\u8BAE\u65F6\u957F
        &quot;limitDateTime&quot;: null,  //\u8003\u8BD5\u65F6\u95F4\u9650\u5236
        &quot;titleItems&quot;: [  
            {
                &quot;name&quot;: &quot;\u4E00\u3001\u9009\u62E9\u9898&quot;,  //\u8BD5\u5377\u6807\u9898
                &quot;questionItems&quot;: [
                    {
                        &quot;id&quot;: 5,      //\u9898\u76EEid
                        &quot;questionType&quot;: 5,  //\u9898\u578B
                        &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                        &quot;title&quot;: &quot;\u9ED8\u5199\u548F\u9E45&quot;,  //\u6807\u9898
                        &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
                        &quot;items&quot;: [],  //\u9009\u9879
                        &quot;analyze&quot;: &quot;\u548F\u9E45\u53EF\u4EE5\u5E26\u62FC\u97F3&quot;,  //\u89E3\u6790
                        &quot;correctArray&quot;: null,  //\u6807\u7B54
                        &quot;correct&quot;: &quot;\u9E45\u9E45\u9E45\uFF0C \u66F2\u9879\u5411\u5929\u6B4C\u3002 \u767D\u6BDB\u6D6E\u7EFF\u6C34\uFF0C \u7EA2\u638C\u62E8\u6E05\u6CE2\u3002&quot;,  //\u6807\u7B54
                        &quot;score&quot;: &quot;10&quot;, //\u5206\u6570
                        &quot;difficult&quot;: 3,  //\u96BE\u5EA6
                        &quot;itemOrder&quot;: 1  //\u987A\u5E8F
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;10&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-9-\u8BD5\u5377\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_4-1-9-\u8BD5\u5377\u63D0\u4EA4" aria-hidden="true">#</a> 4.1.9 \u8BD5\u5377\u63D0\u4EA4</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exampaper/answer/answerSubmit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;questionId&quot;: null, 
    &quot;doTime&quot;: 14,    //\u8017\u65F6
    &quot;answerItems&quot;: [
        {
            &quot;questionId&quot;: 4,  //\u9898\u76EEid
            &quot;content&quot;: null,  //\u7B54\u9898\u5185\u5BB9
            &quot;contentArray&quot;: [   //\u586B\u7A7A\u9898\u5185\u5BB9
                &quot;\u6D4B\u8BD5&quot;,
                &quot;1&quot;
            ],
            &quot;completed&quot;: true, //\u662F\u5426\u5B8C\u6210
            &quot;itemOrder&quot;: 1   //\u9898\u76EE\u5E8F\u53F7
        } 
    ],
    &quot;id&quot;: 4   //\u8BD5\u5377id
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: &quot;2&quot;   //\u8BD5\u5377\u5F97\u5206
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-10-\u7B54\u5377\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-1-10-\u7B54\u5377\u67E5\u8BE2" aria-hidden="true">#</a> 4.1.10 \u7B54\u5377\u67E5\u8BE2</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exampaper/answer/read/4</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;paper&quot;: {  //\u8BD5\u5377\u4FE1\u606F
            &quot;id&quot;: 40,  //\u8BD5\u5377id
            &quot;level&quot;: 1, //\u5E74\u7EA7
            &quot;subjectId&quot;: 1,  //\u5B66\u79D1
            &quot;paperType&quot;: 4,  //\u8BD5\u5377\u7C7B\u578B
            &quot;name&quot;: &quot;\u9650\u65F6\u8003\u8BD5\u4E8C&quot;,  //\u8BD5\u5377\u540D\u79F0
            &quot;suggestTime&quot;: 20,  //\u8003\u8BD5\u65F6\u957F
            &quot;limitDateTime&quot;: [  //\u8003\u8BD5\u65F6\u95F4\u9650\u5236
                &quot;2021-06-22 00:00:00&quot;,
                &quot;2021-08-06 00:00:00&quot;
            ],
            &quot;titleItems&quot;: [
                {
                    &quot;name&quot;: &quot;\u4E00\u3001\u5B8C\u6210\u9898\u76EE&quot;,  //\u6807\u9898
                    &quot;questionItems&quot;: [   //\u9898\u76EE\u5217\u8868
                        {
                            &quot;id&quot;: 46,  //\u9898\u76EEid
                            &quot;questionType&quot;: 4,   //\u9898\u76EE\u7C7B\u578B
                            &quot;subjectId&quot;: 1,  //\u5B66\u79D1
                            &quot;title&quot;: &quot;\u66F2\u9879\u5411\u5929\u6B4C\u7EA2\u638C\u62E8\u6E05\u6CE2&quot;,  //\u9898\u76EE\u6807\u9898
                            &quot;gradeLevel&quot;: 1,  //\u5E74\u7EA7
                            &quot;items&quot;: [   //\u9898\u76EE\u9009\u9879
                                {
                                    &quot;prefix&quot;: &quot;1&quot;,   //\u9009\u9879\u6807\u8BC6
                                    &quot;content&quot;: &quot;\u9E45\u9E45\u9E45&quot;,   //\u9009\u9879\u5185\u5BB9
                                    &quot;score&quot;: &quot;2&quot;  //\u9009\u9879\u5206\u6570
                                },
                                {
                                    &quot;prefix&quot;: &quot;2&quot;,
                                    &quot;content&quot;: &quot;\u767D\u6BDB\u6D6E\u7EFF\u6C34&quot;,
                                    &quot;score&quot;: &quot;2&quot;
                                }
                            ],
                            &quot;analyze&quot;: &quot;\u548F\u9E45&quot;,  //\u89E3\u6790
                            &quot;correctArray&quot;: [  //\u6807\u7B54
                                &quot;\u9E45\u9E45\u9E45&quot;,
                                &quot;\u767D\u6BDB\u6D6E\u7EFF\u6C34&quot;
                            ],
                            &quot;correct&quot;: &quot;&quot;,  //\u6807\u7B54
                            &quot;score&quot;: &quot;4&quot;,  //\u9898\u76EE\u5206\u6570
                            &quot;difficult&quot;: 4, //\u9898\u76EE\u96BE\u5EA6
                            &quot;itemOrder&quot;: 1 //\u9898\u76EE\u987A\u5E8F
                        }
                    ]
                }
            ],
            &quot;score&quot;: &quot;18&quot;   //\u8BD5\u5377\u5206\u6570
        },
        &quot;answer&quot;: {  //\u7B54\u5377\u4FE1\u606F
            &quot;id&quot;: 43,  //\u7B54\u5377id
            &quot;doTime&quot;: 14,  //\u8017\u65F6
            &quot;score&quot;: &quot;2&quot;,  //\u5F97\u5206
            &quot;answerItems&quot;: [   //\u7B54\u9898\u4FE1\u606F
                {
                    &quot;id&quot;: 98,  //\u7B54\u9898id
                    &quot;questionId&quot;: 4,  //\u9898\u76EEid
                    &quot;doRight&quot;: null,  //\u662F\u5426\u6B63\u786E
                    &quot;content&quot;: null, //\u7B54\u9898\u5185\u5BB9
                    &quot;itemOrder&quot;: 1, //\u9898\u5E8F
                    &quot;contentArray&quot;: [  //\u7B54\u9898\u5185\u5BB9
                        &quot;\u6D4B\u8BD5&quot;,
                        &quot;1&quot;
                    ],
                    &quot;score&quot;: &quot;0&quot;, //\u5F97\u5206
                    &quot;questionScore&quot;: &quot;4&quot;  //\u9898\u76EE\u5206\u6570
                }
            ]
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-11-\u8BD5\u5377\u6279\u6539" tabindex="-1"><a class="header-anchor" href="#_4-1-11-\u8BD5\u5377\u6279\u6539" aria-hidden="true">#</a> 4.1.11 \u8BD5\u5377\u6279\u6539</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exampaper/answer/edit</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 12,  //\u7B54\u5377id
    &quot;doTime&quot;: 14,  //\u8017\u65F6
    &quot;score&quot;: &quot;2&quot;,  //\u5F97\u5206\u6570
    &quot;answerItems&quot;: [
        {
            &quot;id&quot;: 45, //\u7B54\u9898id
            &quot;questionId&quot;: 4, //\u9898\u76EEid
            &quot;doRight&quot;: null,  //\u662F\u5426\u6B63\u786E
            &quot;content&quot;: null,  //\u7B54\u9898\u5185\u5BB9
            &quot;itemOrder&quot;: 1,  //\u9898\u76EE\u987A\u5E8F
            &quot;contentArray&quot;: [  //\u7B54\u9898\u5185\u5BB9
                &quot;\u6D4B\u8BD5&quot;,
                &quot;1&quot;
            ],
            &quot;score&quot;: &quot;4&quot;,  //\u5F97\u5206
            &quot;questionScore&quot;: &quot;4&quot;  //\u9898\u76EE\u5206\u6570
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: &quot;16&quot;  //\u8BD5\u5377\u5F97\u5206
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-12-\u8003\u8BD5\u8BB0\u5F55\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-1-12-\u8003\u8BD5\u8BB0\u5F55\u5206\u9875" aria-hidden="true">#</a> 4.1.12 \u8003\u8BD5\u8BB0\u5F55\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/exampaper/answer/pageList</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //\u9875\u7801
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 6204,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 6534,  //\u8BD5\u5377id
                &quot;createTime&quot;: &quot;2021-06-01 17:56:38&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;userScore&quot;: &quot;0&quot;,  //\u8003\u8BD5\u5206\u6570
                &quot;subjectName&quot;: &quot;\u6570\u5B66&quot;,  //\u8003\u8BD5\u5B66\u79D1
                &quot;subjectId&quot;: 129, //\u5B66\u79D1id
                &quot;questionCount&quot;: 1,  //\u9898\u76EE\u6570\u91CF
                &quot;questionCorrect&quot;: 0,  //\u9898\u76EE\u6B63\u786E\u6570
                &quot;paperScore&quot;: &quot;3&quot;,  //\u8BD5\u5377\u603B\u5206
                &quot;doTime&quot;: &quot;4 \u79D2&quot;,  //\u8017\u65F6
                &quot;paperType&quot;: 7,  //\u8BD5\u5377\u7C7B\u578B
                &quot;systemScore&quot;: &quot;0&quot;,  //\u7CFB\u7EDF\u6279\u6539\u5F97\u5206
                &quot;status&quot;: 2,   //\u8BD5\u5377\u72B6\u6001
                &quot;paperName&quot;: &quot;\u667A\u80FD\u8BAD\u7EC3\u8BD5\u5377 - 1845&quot;,  //\u8BD5\u5377\u540D\u79F0
                &quot;userName&quot;: null  //\u7528\u6237\u540D
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-13-\u9519\u9898\u672C\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-1-13-\u9519\u9898\u672C\u5206\u9875" aria-hidden="true">#</a> 4.1.13 \u9519\u9898\u672C\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/question/answer/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //\u9875\u7801
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 17002,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 24928,   //\u9898\u76EEid
                &quot;questionType&quot;: 1,  //\u9898\u578B
                &quot;createTime&quot;: &quot;2021-06-02 16:07:11&quot;,  //\u521B\u5EFA\u65F6\u95F4
                &quot;subjectName&quot;: &quot;\u8BED\u6587&quot;,  //\u5B66\u79D1
                &quot;shortTitle&quot;: &quot;666&quot;  //\u9898\u5E72
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-14-\u7B54\u9898\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#_4-1-14-\u7B54\u9898\u8BE6\u60C5" aria-hidden="true">#</a> 4.1.14 \u7B54\u9898\u8BE6\u60C5</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/question/answer/select/25067</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //\u9875\u7801
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;questionVM&quot;: {
            &quot;id&quot;: 507,    //\u9898\u76EEid
            &quot;questionType&quot;: 1,   //\u9898\u76EE\u7C7B\u578B
            &quot;subjectId&quot;: 46,  //\u5B66\u79D1id
            &quot;title&quot;: &quot;111&quot;,   //\u9898\u5E72
            &quot;gradeLevel&quot;: 12,    //\u5E74\u7EA7
            &quot;items&quot;: [        //\u9009\u9879
                {
                    &quot;prefix&quot;: &quot;A&quot;,  //\u9009\u9879
                    &quot;content&quot;: &quot;A&quot;,  //\u9009\u9879\u5185\u5BB9
                    &quot;score&quot;: null    //\u9009\u9879\u5206\u6570
                }
            ],
            &quot;analyze&quot;: &quot;D&quot;,     //\u89E3\u6790
            &quot;correctArray&quot;: null,  //\u6807\u7B54
            &quot;correct&quot;: &quot;D&quot;,   //\u6807\u7B54
            &quot;score&quot;: &quot;2&quot;,  //\u5206\u6570
            &quot;difficult&quot;: 3,  //\u96BE\u5EA6
            &quot;itemOrder&quot;: null  //\u6392\u5E8F
        },
        &quot;questionAnswerVM&quot;: {   //\u7528\u6237\u7B54\u6848
            &quot;id&quot;: 25067,  
            &quot;questionId&quot;: 507,  //\u9898\u76EEid
            &quot;doRight&quot;: false,   //\u662F\u5426\u6B63\u786E
            &quot;content&quot;: &quot;A&quot;,   //\u7528\u6237\u7B54\u6848
            &quot;itemOrder&quot;: 2,   //\u6392\u5E8F
            &quot;contentArray&quot;: null,   //\u7528\u6237\u7B54\u6848
            &quot;score&quot;: &quot;0&quot;,  //\u5F97\u5206
            &quot;questionScore&quot;: &quot;2&quot;  //\u9898\u76EE\u5206\u6570
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-15-\u7528\u6237\u52A8\u6001" tabindex="-1"><a class="header-anchor" href="#_4-1-15-\u7528\u6237\u52A8\u6001" aria-hidden="true">#</a> 4.1.15 \u7528\u6237\u52A8\u6001</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/log</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 1812,  
            &quot;userId&quot;: 1,  //\u7528\u6237id
            &quot;userName&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
            &quot;realName&quot;: &quot;Test&quot;,  //\u7528\u6237\u771F\u5B9E\u59D3\u540D
            &quot;content&quot;: &quot;student \u767B\u5F55\u4E86\u5B66\u4E4B\u601D\u5F00\u6E90\u8003\u8BD5\u7CFB\u7EDF&quot;,  //\u52A8\u6001\u5185\u5BB9
            &quot;createTime&quot;: &quot;2021-06-08 17:12:50&quot;  //\u521B\u5EFA\u65F6\u95F4
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-16-\u5F53\u524D\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-1-16-\u5F53\u524D\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> 4.1.16 \u5F53\u524D\u7528\u6237\u4FE1\u606F</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/current</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 23,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,
        &quot;userName&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
        &quot;realName&quot;: &quot;Test&quot;,  //\u771F\u5B9E\u59D3\u540D
        &quot;age&quot;: 18,   //\u5E74\u9F84
        &quot;role&quot;: 1,   //\u89D2\u8272
        &quot;sex&quot;: 1,  //\u6027\u522B
        &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //\u751F\u65E5
        &quot;phone&quot;: &quot;158800882&quot;,  //\u624B\u673A\u53F7
        &quot;lastActiveTime&quot;: &quot;&quot;,
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,
        &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,
        &quot;status&quot;: 1,  //\u72B6\u6001
        &quot;userLevel&quot;: 1,   //\u5E74\u7EA7
        &quot;classes&quot;: &quot;1\u73ED&quot;,  //\u7528\u6237\u73ED\u7EA7
        &quot;imagePath&quot;: &quot;&quot;  //\u7528\u6237\u5934\u50CF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-17-\u4FEE\u6539\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-1-17-\u4FEE\u6539\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> 4.1.17 \u4FEE\u6539\u7528\u6237\u4FE1\u606F</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/update</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;id&quot;: 64,
    &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,
    &quot;userName&quot;: &quot;student&quot;,  //\u7528\u6237\u540D
    &quot;realName&quot;: &quot;Test&quot;,  //\u771F\u5B9E\u59D3\u540D
    &quot;age&quot;: 18,   //\u5E74\u9F84
    &quot;role&quot;: 1,   //\u89D2\u8272
    &quot;sex&quot;: 1,  //\u6027\u522B
    &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //\u751F\u65E5
    &quot;phone&quot;: &quot;158800882&quot;,  //\u624B\u673A\u53F7
    &quot;lastActiveTime&quot;: &quot;&quot;,
    &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,
    &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,
    &quot;status&quot;: 1,  //\u72B6\u6001
    &quot;userLevel&quot;: 1,   //\u5E74\u7EA7
    &quot;classes&quot;: &quot;1\u73ED&quot;,  //\u7528\u6237\u73ED\u7EA7
    &quot;imagePath&quot;: &quot;&quot;  //\u7528\u6237\u5934\u50CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-18-\u6D88\u606F\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_4-1-18-\u6D88\u606F\u5206\u9875" aria-hidden="true">#</a> 4.1.18 \u6D88\u606F\u5206\u9875</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/message/page</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;pageIndex&quot;: 1, //\u9875\u7801
    &quot;pageSize&quot;: 10  //\u6BCF\u9875\u6761\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 5,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 4,
                &quot;title&quot;: &quot;rwerw&quot;,   //\u6D88\u606F\u6807\u9898
                &quot;messageId&quot;: 10,
                &quot;content&quot;: &quot;sfsdf&quot;,  //\u6D88\u606F\u5185\u5BB9
                &quot;readed&quot;: true, //\u662F\u5426\u5DF2\u8BFB
                &quot;createTime&quot;: &quot;2021-06-11 16:32:40&quot;,   //\u521B\u5EFA\u65F6\u95F4
                &quot;sendUserName&quot;: &quot;admin&quot;  //\u53D1\u9001\u4EBA
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-19-\u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB" tabindex="-1"><a class="header-anchor" href="#_4-1-19-\u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB" aria-hidden="true">#</a> 4.1.19 \u6D88\u606F\u6807\u8BB0\u5DF2\u8BFB</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/message/read/14</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-20-\u672A\u8BFB\u6D88\u606F\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-1-20-\u672A\u8BFB\u6D88\u606F\u6570\u91CF" aria-hidden="true">#</a> 4.1.20 \u672A\u8BFB\u6D88\u606F\u6570\u91CF</h3><ul><li>\u63A5\u53E3\u5730\u5740\uFF1A/api/student/user/message/unreadCount</li><li>\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</li><li>\u8FD4\u56DE\u53C2\u6570\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;\u6210\u529F&quot;,
    &quot;response&quot;: 0  //\u672A\u8BFB\u6D88\u606F\u6570\u91CF
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,81),l=[s];function t(a,o){return i(),n("div",null,l)}const r=e(d,[["render",t],["__file","student.html.vue"]]);export{r as default};
