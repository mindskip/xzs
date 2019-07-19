/*
 Navicat Premium Data Transfer

 Source Server         : 10.103.15.180
 Source Server Type    : PostgreSQL
 Source Server Version : 110004
 Source Host           : 10.103.15.180:5432
 Source Catalog        : exam2
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110004
 File Encoding         : 65001

 Date: 16/07/2019 15:14:32
*/


-- ----------------------------
-- Table structure for t_user
-- ----------------------------
CREATE TABLE "public"."t_user" (
  "id" serial4 primary key,
  "user_uuid" uuid,
  "user_name" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "real_name" varchar(255) COLLATE "pg_catalog"."default",
  "age" int4,
  "sex" int4,
  "birth_day" timestamp(6),
  "user_level" int4,
  "phone" varchar(255) COLLATE "pg_catalog"."default",
  "role" int4,
  "status" int4,
  "image_path" varchar(255) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "modify_time" timestamp(6),
  "last_active_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."t_user"."user_name" IS '用户名';
COMMENT ON COLUMN "public"."t_user"."real_name" IS '真实姓名';
COMMENT ON COLUMN "public"."t_user"."sex" IS '1.男 2女';
COMMENT ON COLUMN "public"."t_user"."user_level" IS '学生年级(1-12)';
COMMENT ON COLUMN "public"."t_user"."role" IS '1.学生 2.老师 3.管理员';
COMMENT ON COLUMN "public"."t_user"."status" IS '1.启用 2禁用';
COMMENT ON COLUMN "public"."t_user"."image_path" IS '头像地址';

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO "public"."t_user" VALUES (1, 'd2d29da2-dcb3-4013-b874-727626236f47', 'student', 'i+/ukCFsMYsIwiSNW1JVXMUCSHe1bugya5u/XagGlja5uEQyBNyeBJCZpQZz0ebdHCQI1NDdgrXYKISyrauwLh3aO9IGRqqjDN+4S8ogAob3Yu85TEmCIaX0OpSkn0sj3+ulfGCC+C+ugVbZlvQ/EjWxio1UdiOf7KXlHHsYMGE=', '学生', 17, 1, NULL, 12, NULL, 1, 1, NULL, '2019-07-16 15:13:02', '2019-07-16 15:13:10', '2019-07-16 15:13:13');
INSERT INTO "public"."t_user" VALUES (2, '52045f5f-a13f-4ccc-93dd-f7ee8270ad4c', 'admin', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '管理员', 30, 1, NULL, NULL, NULL, 3, 1, NULL, '2019-07-16 15:14:12', '2019-07-16 15:14:15', '2019-07-16 15:14:17');

select setval('t_user_id_seq',(select max(id) from t_user));


-- ----------------------------
-- Table structure for t_subject
-- ----------------------------
CREATE TABLE "public"."t_subject" (
  "id" serial4 primary key,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "level" int4,
  "level_name" varchar(255) COLLATE "pg_catalog"."default",
  "item_order" int4
)
;
COMMENT ON COLUMN "public"."t_subject"."name" IS '语文 数学 英语 等';
COMMENT ON COLUMN "public"."t_subject"."level" IS '年级 (1-12) 小学 初中 高中  大学';
COMMENT ON COLUMN "public"."t_subject"."level_name" IS '一年级、二年级等';
COMMENT ON COLUMN "public"."t_subject"."item_order" IS '排序';

-- ----------------------------
-- Records of t_subject
-- ----------------------------
INSERT INTO "public"."t_subject" VALUES (1, '语文', 1, '一年级', NULL);
INSERT INTO "public"."t_subject" VALUES (2, '数学', 1, '一年级', NULL);
INSERT INTO "public"."t_subject" VALUES (4, '语文', 2, '二年级', NULL);
INSERT INTO "public"."t_subject" VALUES (5, '数学', 2, '二年级', NULL);
INSERT INTO "public"."t_subject" VALUES (6, '英语', 2, '二年级', NULL);
INSERT INTO "public"."t_subject" VALUES (3, '英语', 1, '一年级', NULL);
INSERT INTO "public"."t_subject" VALUES (7, '语文', 3, '三年级', NULL);
INSERT INTO "public"."t_subject" VALUES (8, '数学', 3, '三年级', NULL);
INSERT INTO "public"."t_subject" VALUES (9, '英语', 3, '三年级', NULL);
INSERT INTO "public"."t_subject" VALUES (10, '语文', 4, '四年级', NULL);
INSERT INTO "public"."t_subject" VALUES (11, '数学', 4, '四年级', NULL);
INSERT INTO "public"."t_subject" VALUES (12, '英语', 4, '四年级', NULL);
INSERT INTO "public"."t_subject" VALUES (13, '语文', 5, '五年级', NULL);
INSERT INTO "public"."t_subject" VALUES (14, '数学', 5, '五年级', NULL);
INSERT INTO "public"."t_subject" VALUES (15, '英语', 5, '五年级', NULL);
INSERT INTO "public"."t_subject" VALUES (16, '语文', 6, '六年级', NULL);
INSERT INTO "public"."t_subject" VALUES (17, '数学', 6, '六年级', NULL);
INSERT INTO "public"."t_subject" VALUES (18, '英语', 6, '六年级', NULL);
INSERT INTO "public"."t_subject" VALUES (19, '语文', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (20, '数学', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (21, '英语', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (22, '政治', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (23, '历史', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (24, '地理', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (25, '生物', 7, '初一', NULL);
INSERT INTO "public"."t_subject" VALUES (26, '语文', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (27, '数学', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (28, '英语', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (29, '政治', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (30, '历史', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (31, '地理', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (32, '生物', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (33, '物理', 8, '初二', NULL);
INSERT INTO "public"."t_subject" VALUES (34, '语文', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (35, '数学', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (36, '英语', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (37, '政治', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (38, '历史', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (39, '物理', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (40, '化学', 9, '初三', NULL);
INSERT INTO "public"."t_subject" VALUES (41, '语文', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (42, '数学', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (43, '英语', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (44, '历史', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (45, '政治', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (46, '地理', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (47, '化学', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (48, '物理', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (49, '生物', 10, '高一', NULL);
INSERT INTO "public"."t_subject" VALUES (50, '语文', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (51, '数学', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (52, '英语', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (53, '历史', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (54, '政治', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (56, '化学', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (55, '地理', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (57, '物理', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (58, '生物', 11, '高二', NULL);
INSERT INTO "public"."t_subject" VALUES (59, '语文', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (60, '数学', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (61, '英语', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (62, '历史', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (63, '政治', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (64, '地理', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (65, '化学', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (66, '物理', 12, '高三', NULL);
INSERT INTO "public"."t_subject" VALUES (67, '生物', 12, '高三', NULL);


select setval('t_subject_id_seq',(select max(id) from t_subject));


-- ----------------------------
-- Table structure for t_text_content
-- ----------------------------
CREATE TABLE "public"."t_text_content" (
  "id" serial4 primary key,
  "content" text COLLATE "pg_catalog"."default",
  "create_time" timestamp(6)
)
;




-- ----------------------------
-- Table structure for t_question
-- ----------------------------
CREATE TABLE "public"."t_question" (
  "id" serial4 primary key,
  "question_type" int4,
  "subject_id" int4,
  "score" int4,
  "grade_level" int4,
  "difficult" int4,
  "correct" varchar(255) COLLATE "pg_catalog"."default",
  "info_text_content_id" int4,
  "create_user" int4,
  "status" int4,
  "create_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."t_question"."question_type" IS '1.单选题  2.多选题  3.判断题 4.填空题 5.简答题';
COMMENT ON COLUMN "public"."t_question"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_question"."score" IS '题目总分(千分制)';
COMMENT ON COLUMN "public"."t_question"."grade_level" IS '级别';
COMMENT ON COLUMN "public"."t_question"."difficult" IS '题目难度';
COMMENT ON COLUMN "public"."t_question"."correct" IS '正确答案';
COMMENT ON COLUMN "public"."t_question"."info_text_content_id" IS '题目  填空、 题干、解析、答案等信息';
COMMENT ON COLUMN "public"."t_question"."create_user" IS '创建人';
COMMENT ON COLUMN "public"."t_question"."status" IS '1.正常 2.删除';
COMMENT ON COLUMN "public"."t_question"."create_time" IS '创建时间';




-- ----------------------------
-- Table structure for t_exam_paper
-- ----------------------------
CREATE TABLE "public"."t_exam_paper" (
  "id" serial4 primary key,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "subject_id" int4,
  "paper_type" int4,
  "grade_level" int4,
  "score" int4,
  "question_count" int4,
  "suggest_time" int4,
  "limit_start_time" timestamp(6),
  "limit_end_time" timestamp(6),
  "frame_text_content_id" int4,
  "create_user" int4,
  "create_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."t_exam_paper"."name" IS '试卷名称';
COMMENT ON COLUMN "public"."t_exam_paper"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper"."paper_type" IS '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)';
COMMENT ON COLUMN "public"."t_exam_paper"."grade_level" IS '级别';
COMMENT ON COLUMN "public"."t_exam_paper"."score" IS '试卷总分(千分制)';
COMMENT ON COLUMN "public"."t_exam_paper"."question_count" IS '题目数量';
COMMENT ON COLUMN "public"."t_exam_paper"."suggest_time" IS '建议时长(分钟)';
COMMENT ON COLUMN "public"."t_exam_paper"."limit_start_time" IS '时段试卷 开始时间';
COMMENT ON COLUMN "public"."t_exam_paper"."limit_end_time" IS '时段试卷 结束时间';
COMMENT ON COLUMN "public"."t_exam_paper"."frame_text_content_id" IS '试卷框架 内容为JSON';





-- ----------------------------
-- Table structure for t_exam_paper_answer
-- ----------------------------
CREATE TABLE "public"."t_exam_paper_answer" (
  "id" serial4 primary key,
  "exam_paper_id" int4,
  "paper_name" varchar(255) COLLATE "pg_catalog"."default",
  "paper_type" int4,
  "subject_id" int4,
  "system_score" int4,
  "user_score" int4,
  "paper_score" int4,
  "question_correct" int4,
  "question_count" int4,
  "do_time" int4,
  "status" int4,
  "create_user" int4,
  "create_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_name" IS '试卷名称';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_type" IS '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."system_score" IS '系统判定得分';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."user_score" IS '最终得分(千分制)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."paper_score" IS '试卷总分';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."question_correct" IS '做对题目数量';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."question_count" IS '题目总数量';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."do_time" IS '做题时间(秒)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."status" IS '试卷状态(1待判分 2完成)';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."create_user" IS '学生';
COMMENT ON COLUMN "public"."t_exam_paper_answer"."create_time" IS '提交时间';




-- ----------------------------
-- Table structure for t_exam_paper_question_customer_answer
-- ----------------------------
CREATE TABLE "public"."t_exam_paper_question_customer_answer" (
  "id" serial4 primary key,
  "question_id" int4,
  "exam_paper_id" int4,
  "exam_paper_answer_id" int4,
  "question_type" int4,
  "subject_id" int4,
  "customer_score" int4,
  "question_score" int4,
  "question_text_content_id" int4,
  "answer" varchar(255) COLLATE "pg_catalog"."default",
  "text_content_id" int4,
  "do_right" bool,
  "create_user" int4,
  "create_time" timestamp(6)
)
;
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_id" IS '题目Id';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."exam_paper_id" IS '答案Id';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_type" IS '题型';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."subject_id" IS '学科';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."customer_score" IS '得分';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_score" IS '题目原始分数';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."question_text_content_id" IS '问题内容';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."answer" IS '做题答案';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."text_content_id" IS '做题内容';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."do_right" IS '是否正确';
COMMENT ON COLUMN "public"."t_exam_paper_question_customer_answer"."create_user" IS '做题人';