import { Github, Mail, MapPin, MessageSquare, Send, Users } from 'lucide-react'

const contactCards = [
  {
    icon: Mail,
    title: '邮箱',
    lines: ['link@example.com'],
    note: '欢迎来信交流技术问题',
  },
  {
    icon: MapPin,
    title: '地址',
    lines: ['校园嵌入式实验室', '电子协会活动室'],
    note: '欢迎来实验室参观交流',
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
            <h1 className="text-3xl font-bold md:text-4xl">联系我们</h1>
            <p className="mt-3 text-slate-300">
              有任何问题或建议，欢迎随时联系我们，我们期待与你交流。
            </p>
          </div>
        </div>
      </section>

      {/* 联系卡片 */}
      <section className="section-pad container-page">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {/* 反馈 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-md">
              <Users className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              加入我们
            </h2>
            <p className="mt-3 text-slate-500">
              电子协会欢迎每一位热爱电子的同学！无论你是初学者还是有经验的老手，都能在这里找到属于自己的舞台。
            </p>
            <a
              href="mailto:link@example.com"
              className="btn-primary mt-8"
            >
              <Send className="h-4 w-4" /> 发送邮件联系我们
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
