module.exports = {
  apps: [
    {
      name: "searchServer",// app启动名称
      script: "./app.js",// 脚本位置
      args: [
        // "arg1", 
        // "arg2"
      ],// 脚本执行参数，通过 process.argv 获取，从[2]开始
      env:  {
        // "NODE_ENV": "production",
      },// 脚本执行前，设置的环境变量，通过 process.env 获取
      log_file: "./log_file.log",// 保存 log 文件路径
      error_file: "./error_file.log",// 保存 error log 文件路径
      out_file: "./out_file.log"// 保存 out log 文件路径
    },
  ],
};
