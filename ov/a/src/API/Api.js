import instance from './commapi'

//请求 连个 json  摁键  
//async   await   同步操作
/* async  函数等到 异步代码执行完毕 在向下 执行 */
function  getcate(){
 /* 等待  await */ 
 let data = await  instance.get("")
/*  await  instance.get("").then(res=>{
    })    */ 
  /* 返回的 data  是一个  promcse 函数*/   return  data
}

/* 导出  多个方法  加上{} , 不加  default */
/* 导出  一个方法  不加{} , 加上  default */
export { getcate   }