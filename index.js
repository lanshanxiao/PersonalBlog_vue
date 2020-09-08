const express = require("express");

const app = new express();

app.use(express.static("./page/"));//指定静态页面路径

app.listen(8080, function(){//监听8080端口
    console.log("server start");
})