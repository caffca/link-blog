import { Github, Mail, MessageSquare, Send, User } from 'lucide-react'

const contactCards = [
  {
    icon: Mail,
    title: '邮箱',
    lines: ['xinmenghhh@163.com'],
    note: '欢迎来信交流技术问题',
  },
  {
    icon: Github,
    title: 'GitHub',
    lines: ['github.com/caffca'],
    note: '开源项目与代码仓库',
  },
]

export default function Contact() {
  return (
    <div>
      {/* 页头 */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-accent-dark py-16 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <MessageSquare className="h-4 w-4 text-amber-300" /> 联系方式
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">联系我</h1>
            <p className="mt-3 text-slate-300">
              有任何问题或建议，欢迎随时联系交流。
            </p>
          </div>
        </div>
      </section>

      {/* 联系卡片 */}
      <section className="section-pad container-page">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {contactCards.map((c) => (
            <div key={c.title} className="card p-6 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-md">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {c.title}
              </h3>
              <div className="mt-2 space-y-1">
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-slate-600">
                    {l}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 交流 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-md">
              <User className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              一起交流
            </h2>
            <p className="mt-3 text-slate-500">
              欢迎通过邮箱与我交流技术问题、分享经验，或者对本站提出建议。
            </p>
            <a href="mailto:xinmenghhh@163.com" className="btn-primary mt-8">
              <Send className="h-4 w-4" /> 发送邮件联系我
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
