/* 封装 axios  可以加上 拦截器  */
/* 设置  baseURL(基准地址) */
/* 设置  token  需要 后台支持 */
// 引入 axios
import axios from "axios";
/* 配置 axios  */
/* 创建  axios 的 实例 */
const instance = axios.create({
  baseURL: "", // 基准地址
  timeout: 5000, //超时 时间 超出不在请求
});

/* 拦截器  */
/* 一共有 四个 拦截器 */
/* 请求 拦截   可以携带 token 设置 请求头 */
/* 添加  loading (加载) 动画 */
instance.interceptors.request.use(
  /* 请求成功的 回调函数 */
  (config) => {
     /* 设置 请求头  添加 动画 */

    /* config  是个形参  可以自己起名字 */
    /* 为什么 return 不结束 无法进行下一步 */
    return config;
  },
  /* 请求失败的回调函数 */
  (err) => {
       /* 对 请求 失败的处理 */
    return Promise.reject(err)
  }
);

/* 响应 拦截    */
/* 处理错误 编码 字典 */
/* 停止  loading  动画 */
instance.interceptors.response.use(
    // 响应成公 
    (res)=>{
        //错误编码   关闭  loding 动画 
        return res 
    },
    //响应失败
    (err)=>{

        /* 响应失败的回应 */
        return Promise.reject(err)
    }
)
/* 最后 异步 导出 */
export default instance
