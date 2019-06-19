//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"sc",
  connectionLimit:15
})
//3:创建express对象 nodejs app.js
var server = express();
//4:指定静态资源目录
server.use(express.static("public"))
//5:处理跨域请求
const cors = require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));
//9:绑定监听端口
server.listen(3000);

//功能一：接收用户登录请求
server.get("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var uname = req.query.uname;
   var upass = req.query.upass;
   //2:sql
   //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
   var sql =" SELECT id FROM t_login";       sql+=" WHERE uname = ?";
       sql+=" AND upass = md5(?)";
   //3:返回结果 
   pool.query(sql,[uname,upass],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       //result=[{id:1}]
       req.session.uid = result[0].id;
       console.log(1);
       console.log(req.session); 
       res.send({code:1,msg:"登录成功"});
     }
   });
});
//功能二:书列表 66~85
server.get("/booklist",(req,res)=>{
 //1:参数 pno pageSize
 var pno = req.query.pno;
 var ps = req.query.pageSize;
 //2:默认值 
 if(!pno){pno=1}
 if(!ps){ps=3}
 //2:sql
 var sql = " SELECT bid,bookimg,booktitle,bookwriter,booktype,bookstatus,booknumber,bookintroduction FROM sc_new_book_list LIMIT ?,?";
 var offset = (pno-1)*ps;
 ps = parseInt(ps);
 //3:json
 pool.query(sql,[offset,ps],(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"查询成功",data:result});
 })
});

server.get("/fullbook",(req,res)=>{
 //1:参数 pno pageSize
 var pno = req.query.pno;
 var ps = req.query.pageSize;
 //2:默认值 
 if(!pno){pno=1}
 if(!ps){ps=3}
 //2:sql
 var sql = " SELECT fid,bookimg,booktitle,bookwriter,booktype,bookstatus,booknumber,bookintroduction FROM full_book_list LIMIT ?,?";
 var offset = (pno-1)*ps;
 ps = parseInt(ps);
 //3:json
 pool.query(sql,[offset,ps],(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"查询成功",data:result});
 })
});



server.get("/newbooklist",(req,res)=>{
  //1:参数 pno pageSize
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //2:默认值 
  if(!pno){pno=1}
  if(!ps){ps=6}
  //2:sql
  var sql = " SELECT bid,bookimg,booktitle,bookwriter,booktype,bookstatus,booknumber,bookintroduction FROM sc_new_book_list LIMIT ?,?";
  var offset = (pno-1)*ps;
  ps = parseInt(ps);
  //3:json
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
 });
 
 server.get("/newfullbook",(req,res)=>{
   //1:参数 pno pageSize
   var pno = req.query.pno;
   var ps = req.query.pageSize;
   //2:默认值 
   if(!pno){pno=1}
   if(!ps){ps=6}
   //2:sql
   var sql = " SELECT fid,bookimg,booktitle,bookwriter,booktype,bookstatus,booknumber,bookintroduction FROM full_book_list LIMIT ?,?";
   var offset = (pno-1)*ps;
   ps = parseInt(ps);
   //3:json
   pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:"查询成功",data:result});
   })
  });


 server.get("/boutiquebook",(req,res)=>{
   //1:参数 pno pageSize
   var pno = req.query.pno;
   var ps = req.query.pageSize;
   //2:默认值 
   if(!pno){pno=1}
   if(!ps){ps=4}
   //2:sql
   var sql = " SELECT jid,bookimg,booktitle,bookwriter FROM boutique_book LIMIT ?,?";
   var offset = (pno-1)*ps;
   ps = parseInt(ps);
   //3:json
   pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:"查询成功",data:result});
   })
  });


//功能三,图书管理后台,可以通过组件添加内容到数据库
server.get("/bookbackstage",(req,res)=>{
 //1:参数 pno pageSize
 var bookimg = req.query.bookimg;
 var booktitle = req.query.booktitle;
 var bookwriter = req.query.bookwriter;
 var booktype = req.query.booktype;
 var bookstatus = req.query.bookstatus;
 var booknumber = req.query.booknumber;
 var bookintroduction = req.query.bookintroduction;
 //2:sql
 var sql = "INSERT INTO sc_new_book_list VALUES (NULL,?,?,?,?,?,?,?);"
 pool.query(sql,[bookimg,booktitle,bookwriter,booktype,bookstatus,booknumber,bookintroduction],(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"插入成功",data:result});
 })
});

//账号注册
server.get("/userregistered",(req,res)=>{
 //1:参数 pno pageSize
	var uname = req.query.uname;
	var upwd = req.query.upwd;
 //2:sql
 var sql = "INSERT INTO sc_user_list VALUES (NULL,?,?);"
 pool.query(sql,[uname,upwd],(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"注册成功",data:result});
 })
});

//账号登录
server.get("/userlogin",(req,res)=>{
	var uname = req.query.uname;
	var upwd = req.query.upwd;
 var sql = "SELECT * FROM sc_user_list WHERE uname=?&&upwd=?;"
 pool.query(sql,[uname,upwd],(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"登录成功",data:result});
 })
});
//热销连载
server.get("/minute",(req,res)=>{
  var bid = req.query.bid;
  var sql = "select * from sc_new_book_list where bid=?;";
  pool.query(sql,[bid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
 });
 //畅销完本
 server.get("/minute2",(req,res)=>{
   var fid = req.query.fid;
   var sql = "select * from full_book_list where fid=?;";
   pool.query(sql,[fid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:"查询成功",data:result});
   })
  });
	
	//往我的书架数据库中添加数据
	server.get("/addmybook",(req,res)=>{
	 var bookimg = req.query.bookimg;
	 var booktitle = req.query.booktitle;
	 var bookwriter = req.query.bookwriter;
	 var booktype = req.query.booktype;
	 var booknumber = req.query.booknumber;
	 //2:sql
	 var sql = "INSERT INTO my_book_list VALUES (NULL,?,?,?,?,?);"
	 pool.query(sql,[bookimg,booktitle,bookwriter,booktype,booknumber],(err,result)=>{
	   if(err)throw err;
	   res.send({code:1,msg:"插入成功",data:result});
	 })
	});
	
	//查询我的书架
	server.get("/selectmybook",(req,res)=>{
	 var sql="select * from my_book_list;";
	 pool.query(sql,(err,result)=>{
	   if(err)throw err;
	   res.send({code:1,msg:"查询成功",data:result});
	 })
	});
	
	//删除我的书架里的图书
	server.get("/delmybook",(req,res)=>{
		var mybid = req.query.mybid;
	 var sql = "DELETE FROM my_book_list WHERE mybid = ?;"
	 pool.query(sql,[mybid],(err,result)=>{
	   if(err)throw err;
	   res.send({code:1,msg:"删除成功",data:result});
	 })
	});