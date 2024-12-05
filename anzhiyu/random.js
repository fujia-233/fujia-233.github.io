var posts=["2024/12/04/Java基础/","2024/12/04/Nginx/","2024/12/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };