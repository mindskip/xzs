import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index'),
    meta: { title: 'Login' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Home', icon: 'home', affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'UserPage',
    meta: {
      title: 'User Management',
      icon: 'users'
    },
    children: [
      {
        path: 'student/list',
        component: () => import('@/views/user/student/list'),
        name: 'UserStudentPageList',
        meta: { title: 'Recruiter List', noCache: true }
      },
      {
        path: 'student/edit',
        component: () => import('@/views/user/student/edit'),
        name: 'UserStudentEdit',
        meta: { title: 'Recruiter edit', noCache: true, activeMenu: '/user/student/list' },
        hidden: true
      },
      {
        path: 'admin/list',
        component: () => import('@/views/user/admin/list'),
        name: 'UserAdminPageList',
        meta: { title: 'Admin List', noCache: true }
      },
      {
        path: 'admin/edit',
        component: () => import('@/views/user/admin/edit'),
        name: 'UserAdminEdit',
        meta: { title: 'Admin edit', noCache: true, activeMenu: '/user/admin/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/exam',
    component: Layout,
    name: 'ExamPage',
    meta: {
      title: 'Paper management',
      icon: 'exam'
    },
    children: [
      {
        path: 'paper/list',
        component: () => import('@/views/exam/paper/list'),
        name: 'ExamPaperPageList',
        meta: { title: '试卷列表', noCache: true },
        hidden: true
      },
      {
        path: 'paper/edit',
        component: () => import('@/views/exam/paper/edit'),
        name: 'ExamPaperEdit',
        meta: { title: '试卷编辑', noCache: true, activeMenu: '/exam/paper/list' },
        hidden: true
      },
      {
        path: 'question/list',
        component: () => import('@/views/exam/question/list'),
        name: 'ExamQuestionPageList',
        meta: { title: 'Question List', noCache: true }
      },
      {
        path: 'question/edit/singleChoice',
        component: () => import('@/views/exam/question/edit/single-choice'),
        name: 'singleChoicePage',
        meta: { title: '单选题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/multipleChoice',
        component: () => import('@/views/exam/question/edit/multiple-choice'),
        name: 'multipleChoicePage',
        meta: { title: '多选题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/trueFalse',
        component: () => import('@/views/exam/question/edit/true-false'),
        name: 'trueFalsePage',
        meta: { title: '判断题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/gapFilling',
        component: () => import('@/views/exam/question/edit/gap-filling'),
        name: 'gapFillingPage',
        meta: { title: '填空题编辑', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      },
      {
        path: 'question/edit/shortAnswer',
        component: () => import('@/views/exam/question/edit/short-answer'),
        name: 'shortAnswerPage',
        meta: { title: 'Question edit', noCache: true, activeMenu: '/exam/question/list' },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/task',
  //   component: Layout,
  //   name: 'TaskPage',
  //   meta: {
  //     title: '任务管理',
  //     icon: 'task'
  //   },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/task/list'),
  //       name: 'TaskListPage',
  //       meta: { title: '任务列表', noCache: true }
  //     },
  //     {
  //       path: 'edit',
  //       component: () => import('@/views/task/edit'),
  //       name: 'TaskEditPage',
  //       meta: { title: '任务创建', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/education',
    component: Layout,
    name: 'EducationPage',
    meta: {
      title: 'Configuration',
      icon: 'education'
    },
    alwaysShow: true,
    children: [
      {
        path: 'industry/list',
        component: () => import('@/views/education/industry/list'),
        name: 'EducationIndustryPage',
        meta: { title: 'Industry', noCache: true }
      },
      {
        path: 'industry/edit',
        component: () => import('@/views/education/industry/edit'),
        name: 'EducationIndustryEditPage',
        meta: { title: 'Industry edit', noCache: true, activeMenu: '/education/industry/list' },
        hidden: true
      },
      {
        path: 'subject/list',
        component: () => import('@/views/education/subject/list'),
        name: 'EducationSubjectPage',
        meta: { title: 'Skill', noCache: true }
      },
      {
        path: 'subject/edit',
        component: () => import('@/views/education/subject/edit'),
        name: 'EducationSubjectEditPage',
        meta: { title: 'Skill edit', noCache: true, activeMenu: '/education/subject/list' },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/message',
  //   component: Layout,
  //   name: 'MessagePage',
  //   meta: {
  //     title: '消息中心',
  //     icon: 'message'
  //   },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/message/list'),
  //       name: 'MessageListPage',
  //       meta: { title: '消息列表', noCache: true }
  //     },
  //     {
  //       path: 'send',
  //       component: () => import('@/views/message/send'),
  //       name: 'MessageSendPage',
  //       meta: { title: '消息发送', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/log',
    component: Layout,
    name: 'LogPage',
    meta: {
      title: 'Activity Logs',
      icon: 'log'
    },
    alwaysShow: true,
    children: [
      {
        path: 'user/list',
        component: () => import('@/views/log/list'),
        name: 'LogUserPage',
        meta: { title: 'User Activities', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人简介', icon: 'user', noCache: true }
      }
    ]
  },
  { path: '*',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: { title: '404', noCache: true }
  }
]

const router = new Router({
  routes: constantRoutes
})

export {
  constantRoutes,
  router
}
