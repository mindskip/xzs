### 试卷表 t_exam_paper

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int |  |
| name  | varchar | 试卷名称 |
| subject_id  | int | 学科 |
| paper_type  | int  | 试卷类型( 1固定试卷  4.时段试卷 6.任务试卷) |
| grade_level  | int  | 年级 |
| score  | int  | 试卷总分(千分制) |
| question_count  | int  | 题目数量 |
| suggest_time  | int  | 建议时长(分钟) |
| limit_start_time  | datetime  | 时段试卷 开始时间 |
| limit_end_time  | datetime  | 时段试卷 结束时间 |
| frame_text_content_id  | int  | 试卷框架 内容为JSON |
| create_user  | int  |  |
| create_time  | datetime  | |
| deleted  | bit  | |
| task_exam_id  | int  |  |

### 试卷答案表 t_exam_paper_answer

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| exam_paper_id  | int  |  |
| paper_name  | varchar  | 试卷名称 |
| paper_type  | int  | 试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 ) |
| subject_id  | int  | 学科 |
| system_score  | int  | 系统判定得分 |
| user_score  | int  | 最终得分(千分制) |
| paper_score  | int  | 试卷总分 |
| question_correct  | int  | 做对题目数量 |
| question_count  | int  | 题目总数量 |
| do_time  | int  | 做题时间(秒) |
| status  | int  | 试卷状态(1待判分 2完成) |
| create_user  | int  | 学生 |
| create_time  | datetime  | 提交时间 |
| task_exam_id  | int  |  |

### 试卷题目答案表 t_exam_paper_question_customer_answer

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| question_id  | int  | 题目Id |
| exam_paper_id  | int  | 答案Id |
| exam_paper_answer_id  | int  |  |
| question_type  | int  | 题型 |
| subject_id  | int  | 学科 |
| customer_score  | int  | 得分 |
| question_score  | int  | 题目原始分数 |
| question_text_content_id  | int  | 问题内容 |
| answer  | varchar  | 做题答案 |
| text_content_id  | int  | 做题内容 |
| do_right  | bit  | 是否正确 |
| create_user  | int  | 做题人 |
| create_time  | datetime  |  |
| item_order  | int  |  |

### 消息表 t_message

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| title  | varchar  | 标题 |
| content  | varchar  | 内容 |
| create_time  | datetime  |  |
| send_user_id  | int  | 发送者用户ID |
| send_user_name  | varchar  | 发送者用户名 |
| send_real_name  | varchar  | 发送者真实姓名 |
| receive_user_count  | int  | 接收人数 |
| read_count  | int  | 已读人数 |

### 用户消息表 t_message_user

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| message_id  | int  | 消息内容ID |
| receive_user_id  | int  | 接收人ID |
| receive_user_name  | varchar  | 接收人用户名 |
| receive_real_name  | varchar  | 接收人真实姓名 |
| readed  | bit  | 是否已读 |
| create_time  | datetime  |  |
| read_time  | datetime  | 阅读时间 |

### 题目表 t_question

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| question_type  | int  | 1.单选题  2.多选题  3.判断题 4.填空题 5.简答题 |
| subject_id  | int  | 学科 |
| score  | int  | 题目总分(千分制) |
| grade_level  | int  | 级别 |
| difficult  | int  | 题目难度 |
| correct  | text  | 正确答案 |
| info_text_content_id  | int  | 题目  填空、 题干、解析、答案等信息 |
| create_user  | int  | 创建人 |
| status  | int  | 1.正常 |
| create_time  | datetime  | 创建时间 |
| deleted  | bit  |  |

### 学科表 t_subject

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| name  | varchar  | 语文 数学 英语 等 |
| level  | int  | 年级 (1-12) 小学 初中 高中  大学 |
| level_name  | varchar  | 一年级、二年级等 |
| item_order  | int  | 排序 |
| deleted  | bit  |  |

### 任务表 t_task_exam

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| title  | varchar  |  |
| grade_level  | int  | 级别 |
| frame_text_content_id  | int  | 任务框架 内容为JSON |
| create_user  | int  |  |
| create_time  | datetime  |  |
| deleted  | bit  |  |
| create_user_name  | varchar  |  |

### 用户任务表 t_task_exam_customer_answer

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| task_exam_id  | int  |  |
| create_user  | int  |  |
| create_time  | datetime  |  |
| text_content_id  | int  | 任务完成情况(Json) |

### 文本表 t_text_content

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| content  | text  |  |
| create_time  | datetime  |  |

### 用户表 t_user

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| user_uuid  | varchar  |  |
| user_name  | varchar  | 用户名  |
| password  | varchar  |  |
| real_name  | varchar  |  真实姓名 |
| age  | int  |  |
| sex  | int  | 1.男 2女 |
| birth_day  | datetime  |  |
| user_level  | int  | 学生年级(1-12) |
| phone  | varchar  |  |
| role  | int  | 1.学生 2.老师 3.管理员 |
| status  | int  | 1.启用 2禁用 |
| image_path  | varchar  | 头像地址 |
| create_time  | datetime  |  |
| modify_time  | datetime  |  |
| last_active_time  | datetime  |  |
| deleted  | bit  | 是否删除 |
| wx_open_id  | varchar  | 微信openId |

### 用户日志表 t_user_event_log

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| user_id  | int  | 用户id |
| user_name  | varchar  | 用户名 |
| real_name  | varchar  | 真实姓名 |
| content  | text  | 内容 |
| create_time  | datetime  | 时间 |

### 用户Token表 t_user_token

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| token  | varchar  |  |
| user_id  | int  | 用户Id |
| wx_open_id  | varchar  | 微信openId |
| create_time  | datetime  |  |
| end_time  | datetime  |  |
| user_name  | varchar  | 用户名 |