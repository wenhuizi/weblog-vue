import Index from "@/pages/frontend/index.vue";
import Login from "@/pages/admin/login.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import AdminIndex from "@/pages/admin/index.vue";
import Admin from "@/layouts/admin/admin.vue";
import AdminArticleList from "@/pages/admin/article-list.vue";
import AdminCategoryList from "@/pages/admin/category-list.vue";
import AdminTagList from "@/pages/admin/tag-list.vue";
import AdminBlogSettings from "@/pages/admin/blog-settings.vue";
import ArchiveList from "@/pages/frontend/archive-list.vue";
import CategoryList from "@/pages/frontend/category-list.vue";
import CategoryArticleList from "@/pages/frontend/category-article-list.vue";
import TagArticleList from "@/pages/frontend/tag-article-list.vue";
import ArticleDetail from "@/pages/frontend/article-detail.vue";
import NotFound from "@/pages/frontend/404.vue";

// 统一在这里声明所有路由
const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "Weblog 首页",
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "Weblog 登录页",
    },
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "/admin/index",
        component: AdminIndex,
        meta: {
          title: "仪表盘",
        },
      },
      {
        path: "/admin/article/list",
        component: AdminArticleList,
        meta: {
          title: "文章管理",
        },
      },
      {
        path: "/admin/category/list",
        component: AdminCategoryList,
        meta: {
          title: "分类管理",
        },
      },
      {
        path: "/admin/tag/list",
        component: AdminTagList,
        meta: {
          title: "标签管理",
        },
      },
      {
        path: "/admin/blog/settings",
        component: AdminBlogSettings,
        meta: {
          title: "博客设置",
        },
      },
    ],
  },
  {
    path: "/archive/list", //归档页
    component: ArchiveList,
    meta: {
      title: "Weblog归档页",
    },
  },
  {
    path: "/category/list",
    component: CategoryList,
    meta: {
      title: "Weblog分类页",
    },
  },
  {
    path: "/category/article/list", // 分类文章页
    component: CategoryArticleList,
    meta: {
      // meta 信息
      title: "Weblog 分类文章页",
    },
  },
  {
    path: "/tag/article/list",
    component: TagArticleList, //标签列表页
    meta: {
      title: "Weblog标签文章页",
    },
  },
  {
    path: "/article/:articleId", //文章详情页
    component: ArticleDetail,
    meat: {
      title: "Weblog详情页",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404页",
    },
  },
];

// 创建路由
const router = createRouter({
  // 指定路由的历史管理方式，hash 模式指的是 URL 的路径是通过 hash 符号（#）进行标识
  history: createWebHashHistory(),
  // routes: routes 的缩写
  routes,
});

// ES6 模块导出语句，它用于将 router 对象导出，以便其他文件可以导入和使用这个对象
export default router;
