import { Building, Flag, Heart, Sparkles } from 'lucide-react'
import { association } from '../data/association'

const valueCards = [
  {
    icon: Heart,
    title: '我的使命',
    desc: association.mission,
  },
  {
    icon: Sparkles,
    title: '价值观',
    desc: association.values,
  },
  {
    icon: Flag,
    title: '未来展望',
    desc: association.vision,
  },
]

export default function About() {
  return (
    <div>
      {/* 页头 */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-accent-dark py-16 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <Building className="h-4 w-4 text-amber-300" /> 关于
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">关于 linkk</h1>
            <p className="mt-3 text-slate-300">
              {association.slogan}，这里是 linkk 的个人技术知识库。
            </p>
          </div>
        </div>
      </section>

      {/* 简介 */}
      <section className="section-pad container-page">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              个人简介
            </h2>
            <p className="mt-2 text-slate-500">记录学习，分享成长</p>
          </div>
          <div className="card p-8 text-center md:p-10">
            <p className="text-lg leading-relaxed text-slate-600">
              {association.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 使命 / 价值观 / 展望 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {valueCards.map((v) => (
              <div key={v.title} className="card flex flex-col items-center gap-3 p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-slate-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
