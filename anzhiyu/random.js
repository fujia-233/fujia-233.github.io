var posts=["2020/12/04/Java基础/","2023/12/12/二叉树上的结点路径/","2024/12/04/Nginx/","2024/06/29/X-Music音乐平台/","2024/06/19/CNN算法解决垃圾分类问题/","2023/12/25/冬日济南/","2024/06/28/决策树分类算法研究/","2024/05/23/决策树实验/","2024/06/09/基于循环神经网络的对联自动生成研究/","2024/06/15/斑马问题实验/","2023/12/23/Android焕壁/","2024/06/15/格记--引导型开放日记/","2024/04/22/搜索算法实验/","2024/03/12/线性回归实验/","2024/05/06/穷举搜索实验/","2024/05/08/深度学习论文阅读报告/","2024/06/28/辟雍学府APP/","2024/06/29/高校实习就业信息化管理系统/","2024/06/28/职业生涯规划书/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };