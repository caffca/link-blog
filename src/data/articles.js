// 技术文章数据（文章 = PDF 文件）
//
// 一篇文章的格式：
// {
//   id: 1,
//   title: '文章标题',
//   category: '分类',            // 用于筛选
//   excerpt: '文章简介，一两句话',
//   file: 'articles/文件名.pdf',  // PDF 文件，放在 public/files/articles/ 下
//   date: '2026-08-07',
//   readTime: '5 分钟',          // 可选
// }
//
// 上传步骤：
// 1. 把 PDF 放入 public/files/articles/
// 2. 在下方 articles 数组中新增一条记录
// 3. git push 后自动部署上线

export const articles = []

export const articleCategories = ['全部']
