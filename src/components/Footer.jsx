import { Link } from 'react-router-dom'
import { Github, Mail, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
                <Zap className="h-4 w-4" />
              </span>
              <span className="font-bold text-white">linkk</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              linkk 的个人知识库，致力于分享电子技术相关文章、项目资料和学习资源。
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/articles" className="transition-colors hover:text-accent">
                  技术文章
                </Link>
              </li>
              <li>
                <Link to="/resources" className="transition-colors hover:text-accent">
                  资料下载
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-accent">
                  关于
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">联系我们</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:xinmenghhh@163.com"
                  className="transition-colors hover:text-accent"
                >
                  xinmenghhh@163.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 shrink-0" />
                <a
                  href="https://github.com/caffca"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  github.com/caffca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700/50 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} linkk · 探索电子世界，分享技术精华
        </div>
      </div>
    </footer>
  )
}
