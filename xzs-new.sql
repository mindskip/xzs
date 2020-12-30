/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50640
 Source Host           : localhost:3306
 Source Schema         : xzs

 Target Server Type    : MySQL
 Target Server Version : 50640
 File Encoding         : 65001

 Date: 24/12/2020 17:08:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_exam_paper
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper`;
CREATE TABLE `t_exam_paper`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试卷名称',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `paper_type` int(11) NULL DEFAULT NULL COMMENT '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 5.推送试卷)',
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `score` int(11) NULL DEFAULT NULL COMMENT '试卷总分(千分制)',
  `question_count` int(11) NULL DEFAULT NULL COMMENT '题目数量',
  `suggest_time` int(11) NULL DEFAULT NULL COMMENT '建议时长(分钟)',
  `limit_start_time` datetime(0) NULL DEFAULT NULL COMMENT '时段试卷 开始时间',
  `limit_end_time` datetime(0) NULL DEFAULT NULL COMMENT '时段试卷 结束时间',
  `frame_text_content_id` int(11) NULL DEFAULT NULL COMMENT '试卷框架 内容为JSON',
  `create_user` int(11) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL,
  `task_exam_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_exam_paper
-- ----------------------------
INSERT INTO `t_exam_paper` VALUES (1, '试卷名称', 1, 1, 1, 10, 2, 30, NULL, NULL, 2, 2, '2020-12-24 11:23:29', b'0', 1);

-- ----------------------------
-- Table structure for t_exam_paper_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper_answer`;
CREATE TABLE `t_exam_paper_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exam_paper_id` int(11) NULL DEFAULT NULL,
  `paper_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试卷名称',
  `paper_type` int(11) NULL DEFAULT NULL COMMENT '试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `system_score` int(11) NULL DEFAULT NULL COMMENT '系统判定得分',
  `user_score` int(11) NULL DEFAULT NULL COMMENT '最终得分(千分制)',
  `paper_score` int(11) NULL DEFAULT NULL COMMENT '试卷总分',
  `question_correct` int(11) NULL DEFAULT NULL COMMENT '做对题目数量',
  `question_count` int(11) NULL DEFAULT NULL COMMENT '题目总数量',
  `do_time` int(11) NULL DEFAULT NULL COMMENT '做题时间(秒)',
  `status` int(11) NULL DEFAULT NULL COMMENT '试卷状态(1待判分 2完成)',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '学生',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '提交时间',
  `task_exam_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_exam_paper_answer
-- ----------------------------
INSERT INTO `t_exam_paper_answer` VALUES (1, 1, '试卷名称', 6, 1, 0, 0, 10, 0, 1, 4, 2, 1, '2020-12-24 11:38:00', 1);
INSERT INTO `t_exam_paper_answer` VALUES (2, 1, '试卷名称', 1, 1, 0, 0, 10, 1, 2, 1800, 1, 1, '2020-12-24 14:30:07', 1);
INSERT INTO `t_exam_paper_answer` VALUES (3, 1, '试卷名称', 1, 1, 0, 0, 10, 1, 2, 1800, 1, 1, '2020-12-24 14:31:22', 1);

-- ----------------------------
-- Table structure for t_exam_paper_question_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_exam_paper_question_customer_answer`;
CREATE TABLE `t_exam_paper_question_customer_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NULL DEFAULT NULL COMMENT '题目Id',
  `exam_paper_id` int(11) NULL DEFAULT NULL COMMENT '答案Id',
  `exam_paper_answer_id` int(11) NULL DEFAULT NULL,
  `question_type` int(11) NULL DEFAULT NULL COMMENT '题型',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `customer_score` int(11) NULL DEFAULT NULL COMMENT '得分',
  `question_score` int(11) NULL DEFAULT NULL COMMENT '题目原始分数',
  `question_text_content_id` int(11) NULL DEFAULT NULL COMMENT '问题内容',
  `answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '做题答案',
  `text_content_id` int(11) NULL DEFAULT NULL COMMENT '做题内容',
  `do_right` bit(1) NULL DEFAULT NULL COMMENT '是否正确',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '做题人',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `item_order` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_exam_paper_question_customer_answer
-- ----------------------------
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (1, 1, 1, 1, 5, 1, 0, 10, 1, NULL, 4, b'0', 1, '2020-12-24 11:38:00', 1);
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (2, 1, 1, 2, 5, 1, 0, 10, 1, NULL, 7, NULL, 1, '2020-12-24 14:30:07', 1);
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (3, 2, 1, 2, 5, 1, 0, 0, 6, NULL, 8, NULL, 1, '2020-12-24 14:30:07', 2);
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (4, 1, 1, 3, 5, 1, 0, 10, 1, NULL, 9, NULL, 1, '2020-12-24 14:31:22', 1);
INSERT INTO `t_exam_paper_question_customer_answer` VALUES (5, 2, 1, 3, 5, 1, 0, 0, 6, NULL, 10, NULL, 1, '2020-12-24 14:31:22', 2);

-- ----------------------------
-- Table structure for t_industry
-- ----------------------------
DROP TABLE IF EXISTS `t_industry`;
CREATE TABLE `t_industry`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_industry
-- ----------------------------
INSERT INTO `t_industry` VALUES (2, '费尔法');

-- ----------------------------
-- Table structure for t_message
-- ----------------------------
DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `send_user_id` int(11) NULL DEFAULT NULL COMMENT '发送者用户ID',
  `send_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '发送者用户名',
  `send_real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '发送者真实姓名',
  `receive_user_count` int(11) NULL DEFAULT NULL COMMENT '接收人数',
  `read_count` int(11) NULL DEFAULT NULL COMMENT '已读人数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_message_user
-- ----------------------------
DROP TABLE IF EXISTS `t_message_user`;
CREATE TABLE `t_message_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) NULL DEFAULT NULL COMMENT '消息内容ID',
  `receive_user_id` int(11) NULL DEFAULT NULL COMMENT '接收人ID',
  `receive_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收人用户名',
  `receive_real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收人真实姓名',
  `readed` bit(1) NULL DEFAULT NULL COMMENT '是否已读',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `read_time` datetime(0) NULL DEFAULT NULL COMMENT '阅读时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for t_question
-- ----------------------------
DROP TABLE IF EXISTS `t_question`;
CREATE TABLE `t_question`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_type` int(11) NULL DEFAULT NULL COMMENT '1.单选题  2.多选题  3.判断题 4.填空题 5.简答题',
  `subject_id` int(11) NULL DEFAULT NULL COMMENT '学科',
  `industry_id` int(11) NULL DEFAULT NULL COMMENT '行业',
  `skill_id` int(11) NULL DEFAULT NULL COMMENT '技能',
  `score` int(11) NULL DEFAULT NULL COMMENT '题目总分(千分制)',
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `difficult` int(11) NULL DEFAULT NULL COMMENT '题目难度',
  `correct` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '正确答案',
  `info_text_content_id` int(11) NULL DEFAULT NULL COMMENT '题目  填空、 题干、解析、答案等信息',
  `create_user` int(11) NULL DEFAULT NULL COMMENT '创建人',
  `status` int(11) NULL DEFAULT NULL COMMENT '1.正常',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `deleted` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_question
-- ----------------------------
INSERT INTO `t_question` VALUES (1, 5, 1, 1, 1, 40, 1, 5, 'wfewf', 1, 2, 1, '2020-12-24 10:18:29', b'0');
INSERT INTO `t_question` VALUES (2, 5, 2, NULL, 1, 0, 1, 5, '111', 6, 2, 1, '2020-12-24 11:56:33', b'0');
INSERT INTO `t_question` VALUES (3, 5, 1, NULL, NULL, 40, 1, 5, 'wfewf', 11, 2, 1, '2020-12-24 16:52:53', b'0');
INSERT INTO `t_question` VALUES (4, 5, 1, 1, 1, 40, 1, 5, 'wfewf', 12, 2, 1, '2020-12-24 17:01:49', b'0');
INSERT INTO `t_question` VALUES (5, 5, NULL, 1, 1, 40, NULL, 5, 'wfewf', 13, 2, 1, '2020-12-24 17:04:10', b'0');

-- ----------------------------
-- Table structure for t_skill
-- ----------------------------
DROP TABLE IF EXISTS `t_skill`;
CREATE TABLE `t_skill`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_skill
-- ----------------------------
INSERT INTO `t_skill` VALUES (2, '费尔法');

-- ----------------------------
-- Table structure for t_subject
-- ----------------------------
DROP TABLE IF EXISTS `t_subject`;
CREATE TABLE `t_subject`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '语文 数学 英语 等',
  `level` int(11) NULL DEFAULT NULL COMMENT '年级 (1-12) 小学 初中 高中  大学',
  `level_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '一年级、二年级等',
  `item_order` int(11) NULL DEFAULT NULL COMMENT '排序',
  `deleted` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_subject
-- ----------------------------
INSERT INTO `t_subject` VALUES (1, 'IT', 1, '一年级', NULL, b'0');
INSERT INTO `t_subject` VALUES (2, 'fe', 2, '二年级', NULL, b'0');
INSERT INTO `t_subject` VALUES (3, 'fwwe', 1, '一年级', NULL, b'0');
INSERT INTO `t_subject` VALUES (4, '费尔法', 1, '一年级', NULL, b'1');

-- ----------------------------
-- Table structure for t_task_exam
-- ----------------------------
DROP TABLE IF EXISTS `t_task_exam`;
CREATE TABLE `t_task_exam`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `grade_level` int(11) NULL DEFAULT NULL COMMENT '级别',
  `frame_text_content_id` int(11) NULL DEFAULT NULL COMMENT '任务框架 内容为JSON',
  `create_user` int(11) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL,
  `create_user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_task_exam
-- ----------------------------
INSERT INTO `t_task_exam` VALUES (1, '任务标题', 1, 3, 2, '2020-12-24 11:37:20', b'0', 'admin');

-- ----------------------------
-- Table structure for t_task_exam_customer_answer
-- ----------------------------
DROP TABLE IF EXISTS `t_task_exam_customer_answer`;
CREATE TABLE `t_task_exam_customer_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_exam_id` int(11) NULL DEFAULT NULL,
  `create_user` int(255) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `text_content_id` int(11) NULL DEFAULT NULL COMMENT '任务完成情况(Json)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_task_exam_customer_answer
-- ----------------------------
INSERT INTO `t_task_exam_customer_answer` VALUES (1, 1, 1, '2020-12-24 11:38:00', 5);

-- ----------------------------
-- Table structure for t_text_content
-- ----------------------------
DROP TABLE IF EXISTS `t_text_content`;
CREATE TABLE `t_text_content`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_text_content
-- ----------------------------
INSERT INTO `t_text_content` VALUES (1, '{\"titleContent\":\"wfwe\",\"analyze\":\"fwefew\",\"questionItemObjects\":[],\"correct\":\"wfewf\"}', '2020-12-24 10:18:29');
INSERT INTO `t_text_content` VALUES (2, '[{\"name\":\"试卷标题\",\"questionItems\":[{\"id\":1,\"itemOrder\":1},{\"id\":2,\"itemOrder\":2}]}]', '2020-12-24 11:23:29');
INSERT INTO `t_text_content` VALUES (3, '[{\"examPaperId\":1,\"examPaperName\":\"试卷名称\",\"itemOrder\":null}]', '2020-12-24 11:37:20');
INSERT INTO `t_text_content` VALUES (4, '而分为氛围', '2020-12-24 11:38:00');
INSERT INTO `t_text_content` VALUES (5, '[{\"examPaperId\":1,\"examPaperAnswerId\":1,\"status\":2}]', '2020-12-24 11:38:00');
INSERT INTO `t_text_content` VALUES (6, '{\"titleContent\":\"111\",\"analyze\":\"111\",\"questionItemObjects\":[],\"correct\":\"111\"}', '2020-12-24 11:56:33');
INSERT INTO `t_text_content` VALUES (7, NULL, '2020-12-24 14:30:07');
INSERT INTO `t_text_content` VALUES (8, NULL, '2020-12-24 14:30:07');
INSERT INTO `t_text_content` VALUES (9, NULL, '2020-12-24 14:31:22');
INSERT INTO `t_text_content` VALUES (10, NULL, '2020-12-24 14:31:22');
INSERT INTO `t_text_content` VALUES (11, '{\"titleContent\":\"wfwe\",\"analyze\":\"fwefew\",\"questionItemObjects\":[],\"correct\":\"wfewf\"}', '2020-12-24 16:52:53');
INSERT INTO `t_text_content` VALUES (12, '{\"titleContent\":\"wfwe\",\"analyze\":\"fwefew\",\"questionItemObjects\":[],\"correct\":\"wfewf\"}', '2020-12-24 17:01:49');
INSERT INTO `t_text_content` VALUES (13, '{\"titleContent\":\"wfwe\",\"analyze\":\"fwefew\",\"questionItemObjects\":[],\"correct\":\"wfewf\"}', '2020-12-24 17:04:10');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_uuid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `age` int(11) NULL DEFAULT NULL,
  `sex` int(11) NULL DEFAULT NULL COMMENT '1.男 2女',
  `birth_day` datetime(0) NULL DEFAULT NULL,
  `user_level` int(11) NULL DEFAULT NULL COMMENT '学生年级(1-12)',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` int(11) NULL DEFAULT NULL COMMENT '1.学生 2.老师 3.管理员',
  `status` int(11) NULL DEFAULT NULL COMMENT '1.启用 2禁用',
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像地址',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `modify_time` datetime(0) NULL DEFAULT NULL,
  `last_active_time` datetime(0) NULL DEFAULT NULL,
  `deleted` bit(1) NULL DEFAULT NULL COMMENT '是否删除',
  `wx_open_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信openId',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'd2d29da2-dcb3-4013-b874-727626236f47', 'student', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '学生', 18, 1, '2019-09-01 00:00:00', 1, '158800882', 1, 1, 'http://image.alvisu.com/Fn4CyLHWvT-kxIrK1ZaqTDidvXzj', '2019-09-07 18:55:02', '2020-12-24 11:37:45', NULL, b'0', NULL);
INSERT INTO `t_user` VALUES (2, '52045f5f-a13f-4ccc-93dd-f7ee8270ad4c', 'admin', 'D1AGFL+Gx37t0NPG4d6biYP5Z31cNbwhK5w1lUeiHB2zagqbk8efYfSjYoh1Z/j1dkiRjHU+b0EpwzCh8IGsksJjzD65ci5LsnodQVf4Uj6D3pwoscXGqmkjjpzvSJbx42swwNTA+QoDU8YLo7JhtbUK2X0qCjFGpd+8eJ5BGvk=', '管理员', 30, 1, '2019-09-07 18:56:07', NULL, NULL, 3, 1, NULL, '2019-09-07 18:56:21', NULL, NULL, b'0', NULL);

-- ----------------------------
-- Table structure for t_user_event_log
-- ----------------------------
DROP TABLE IF EXISTS `t_user_event_log`;
CREATE TABLE `t_user_event_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_user_event_log
-- ----------------------------
INSERT INTO `t_user_event_log` VALUES (1, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-23 18:12:21');
INSERT INTO `t_user_event_log` VALUES (2, 1, 'student', '学生', 'student 登录了学之思考试系统', '2020-12-24 11:29:25');
INSERT INTO `t_user_event_log` VALUES (3, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 11:29:51');
INSERT INTO `t_user_event_log` VALUES (4, 1, 'student', '学生', 'student 登录了学之思考试系统', '2020-12-24 11:30:38');
INSERT INTO `t_user_event_log` VALUES (5, 1, 'student', '学生', 'student 更新了个人资料', '2020-12-24 11:37:45');
INSERT INTO `t_user_event_log` VALUES (6, 1, 'student', '学生', 'student 提交试卷：试卷名称 得分：0 耗时：4 秒', '2020-12-24 11:38:00');
INSERT INTO `t_user_event_log` VALUES (7, 1, 'student', '学生', 'student 批改试卷：试卷名称 得分：0', '2020-12-24 11:38:47');
INSERT INTO `t_user_event_log` VALUES (8, 1, 'student', '学生', 'student 登录了学之思考试系统', '2020-12-24 13:49:06');
INSERT INTO `t_user_event_log` VALUES (9, 1, 'student', '学生', 'student 提交试卷：试卷名称 得分：0 耗时：30分 0秒', '2020-12-24 14:30:07');
INSERT INTO `t_user_event_log` VALUES (10, 1, 'student', '学生', 'student 提交试卷：试卷名称 得分：0 耗时：30分 0秒', '2020-12-24 14:31:22');
INSERT INTO `t_user_event_log` VALUES (11, 2, 'admin', '管理员', 'admin 登出了学之思考试系统', '2020-12-24 14:50:56');
INSERT INTO `t_user_event_log` VALUES (12, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 14:51:01');
INSERT INTO `t_user_event_log` VALUES (13, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 14:51:37');
INSERT INTO `t_user_event_log` VALUES (14, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 15:56:00');
INSERT INTO `t_user_event_log` VALUES (15, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 15:56:05');
INSERT INTO `t_user_event_log` VALUES (16, 2, 'admin', '管理员', 'admin 登录了学之思考试系统', '2020-12-24 16:51:24');

-- ----------------------------
-- Table structure for t_user_token
-- ----------------------------
DROP TABLE IF EXISTS `t_user_token`;
CREATE TABLE `t_user_token`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户Id',
  `wx_open_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信openId',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `end_time` datetime(0) NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;

(SELECT * FROM t_question WHERE skill_id = 1 LIMIT 2) UNION (SELECT * FROM t_question WHERE skill_id = 11 LIMIT 2)  ;