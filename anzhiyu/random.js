var posts=["2025/01/12/01.MySQL 下载与安装/","2025/01/13/03.SQL-DDL-数据库操作/","2025/01/13/02.SQL-通用语法及分类/","2025/01/13/04.SQL-DDL-表操作/","2025/01/13/05.SQL-DDL-数据类型/","2025/01/20/07.SQL-DML-更新和删除/","2025/01/16/06.SQL-DML-插入/","2025/01/22/09.SQL-DCL/","2025/01/20/08.SQL-DQL-查询/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };