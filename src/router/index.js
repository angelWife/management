import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
import Login from "@/views/login/index";
import loginMandatory from "@/views/login/loginMandatory";
import GetPassword from '@/views/login/getPassword'
import SetPassword from '@/views/login/setPassword'
import Register from '@/views/login/register'
import LoginSuccess from '@/views/login/success'
import NotFound from "@/views/Error/404";
import Home from "@/views/Home";
import Index from "@/views/myHome/index";
import userApply from '@/views/users/apply'
import progressApply from '@/views/users/progressApply';
import costInfo from '@/views/users/costInfo';
import userMsg from '@/views/users/userMsg';
import approManage from '@/views/approval/approManage';
import approMember from '@/views/approval/approMember';
import memberInfo from '@/views/member/memberInfo';
import paperDown from '@/views/member/paperDownload';
import annualConfirm from '@/views/member/annualConfirm';
import yearFee from '@/views/approval/yearFee';
import Generator from "@/views/Generator/Generator";
import api from "@/http/api";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  routes: [
    { // 首页
      path: "/",
      name: "首页",
      component: Home,
      iconCls: 'fa fa-address-card',
      leaf: true, //只有一个节点
      children: [{
        path: '/myHome/index',
        component: Index,
        name: '首页',
        iconCls: 'el-icon-star-on'
      }]
    },
    {
      path: "/",
      name: "会员信息",
      component: Home,
      iconCls: 'el-icon-s-flag',
      leaf: false, //只有一个节点
      children:[
        {
          path: "/users/apply",
          name: "会员认定申请",
          component: userApply
        },
        {
          path: "/users/progressApply",
          name: "审批进度",
          component: progressApply
        },
        {
          path: "/users/costInfo",
          name: "会费缴纳",
          component: costInfo
        },
        {
          path: "/users/userMsg",
          name: "会员信息",
          component: userMsg
        },
      ]
    },
    // 审批中心
    {
      path: "/",
      name: "审批中心",
      component: Home,
      iconCls: 'el-icon-s-flag',
      leaf: false, //只有一个节点
      children:[
        {
          path: "/approval/manager",
          name: "审批管理",
          component: approManage
        },{
          path: "/approval/memberDetails",
          name: "会员认定审批详情",
          component: approMember
        }, {
          path: "/approval/yearFee",
          name: "年费核对管理",
          component: yearFee
        }
      ]
    },
    // 会员服务
    {
      path: "/",
      name: "",
      component: Home,
      iconCls: 'el-icon-s-flag',
      leaf: false, //只有一个节点
      children:[
        {
          path: "/member/memberInfo",
          name: "会员信息",
          component: memberInfo
        },
        {
          path: "/member/paperDown",
          name: "证书下载",
          component: paperDown
        }, 
        {
          path: "/member/annualConfirm",
          name: "年审确认",
          component: annualConfirm
        }
      ]
    },
    { // 登录 注册 重置密码
      path: "/login/index",
      name: "登录",
      component: Login
    },
    { 
      path: "/login/loginMandatory",
      name: "强制登录",
      component: loginMandatory
    },
    {
      path: "/login/getPassword",
      name: "GetPassword",
      component: GetPassword
    },
    {
      path: "/login/setPassword",
      name: "SetPassword",
      component: SetPassword
    },
    {
      path: "/login/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login/success",
      name: "LoginSuccess",
      component: LoginSuccess
    },
    {
      path: "/404",
      name: "notFound",
      component: NotFound
    }
  ],
  mode: "history"
});


// router.beforeEach((to, from, next) => {
//   // 登录界面登录成功之后，会把用户信息保存在会话
//   // 存在时间为会话生命周期，页面关闭即失效。
//   let token = Cookies.get('token')
//   let userName = sessionStorage.getItem('user')
//   if(token) {
//     if (to.path === '/login/index') {
//       next({ path: '/' })
//     }else{
//       addDynamicMenuAndRoutes(userName, to, from)
//       next()
//     }
//   }else{
//     next({ path: '/login/index' })
//   }
// })

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from) {
  // 处理IFrame嵌套页面
  handleIFrameUrl(to.path);
  if (store.state.app.menuRouteLoaded) {
    console.log("动态菜单和路由已经存在.");
    return;
  }
  api.menu
    .findNavTree({
      userName: userName
    })
    .then(res => {
      // 添加动态路由
      let dynamicRoutes = addDynamicRoutes(res.data);
      // 处理静态组件绑定路由
      handleStaticComponent(router, dynamicRoutes);
      router.addRoutes(router.options.routes);
      // 保存加载状态
      store.commit("menuRouteLoaded", true);
      // 保存菜单树
      store.commit("setNavTree", res.data);
    })
    .then(res => {
      api.user.findPermissions({
        name: userName
      }).then(res => {
        // 保存用户权限标识集合
        store.commit("setPerms", res.data);
      });
    })
    .catch(function (res) {});
}

/**
 * 处理路由到本地直接指定页面组件的情况
 * 比如'代码生成'是要求直接绑定到'Generator'页面组件
 */
function handleStaticComponent(router, dynamicRoutes) {
  for (let j = 0; j < dynamicRoutes.length; j++) {
    if (dynamicRoutes[j].name == "代码生成") {
      dynamicRoutes[j].component = Generator;
      break;
    }
  }
  router.options.routes[0].children = router.options.routes[0].children.concat(
    dynamicRoutes
  );
}

/**
 * 处理IFrame嵌套页面
 */
function handleIFrameUrl(path) {
  // 嵌套页面，保存iframeUrl到store，供IFrame组件读取展示
  let url = path;
  let length = store.state.iframe.iframeUrls.length;
  for (let i = 0; i < length; i++) {
    let iframe = store.state.iframe.iframeUrls[i];
    if (path != null && path.endsWith(iframe.path)) {
      url = iframe.url;
      store.commit("setIFrameUrl", url);
      break;
    }
  }
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
// function addDynamicRoutes(menuList = [], routes = []) {
//   var temp = [];
//   for (var i = 0; i < menuList.length; i++) {
//     if (menuList[i].children && menuList[i].children.length >= 1) {
//       temp = temp.concat(menuList[i].children);
//     } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
//       menuList[i].url = menuList[i].url.replace(/^\//, "");
//       // 创建路由配置
//       var route = {
//         path: menuList[i].url,
//         component: null,
//         name: menuList[i].name,
//         meta: {
//           icon: menuList[i].icon,
//           index: menuList[i].id
//         }
//       };
//       let path = getIFramePath(menuList[i].url);
//       if (path) {
//         // 如果是嵌套页面, 通过iframe展示
//         route["path"] = path;
//         route["component"] = resolve =>
//           require([`@/views/IFrame/IFrame`], resolve);
//         // 存储嵌套页面路由路径和访问URL
//         let url = getIFrameUrl(menuList[i].url);
//         let iFrameUrl = {
//           path: path,
//           url: url
//         };
//         store.commit("addIFrameUrl", iFrameUrl);
//       } else {
//         try {
//           // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
//           // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
//           let array = menuList[i].url.split("/");
//           let url = "";
//           for (let i = 0; i < array.length; i++) {
//             url +=
//               array[i].substring(0, 1).toUpperCase() +
//               array[i].substring(1) +
//               "/";
//           }
//           url = url.substring(0, url.length - 1);
//           route["component"] = resolve => require([`@/views/${url}`], resolve);
//         } catch (e) {}
//       }
//       routes.push(route);
//     }
//   }
//   if (temp.length >= 1) {
//     addDynamicRoutes(temp, routes);
//   } else {
//     console.log("动态路由加载...");
//     console.log(routes);
//     console.log("动态路由加载完成.");
//   }
//   return routes;
// }

export default router;
