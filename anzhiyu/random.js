var posts=["2025/01/14/hello-world/","2025/01/13/02.SQL-通用语法及分类/","2025/01/13/03.SQL-DDL-数据库操作/","2025/01/13/04.SQL-DDL-表操作/","2025/01/12/01.MySQL 下载与安装/","2025/01/13/05.SQL-DDL-数据类型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };