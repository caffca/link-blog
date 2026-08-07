import {
  Award,
  BookOpen,
  Building,
  Cpu,
  Flag,
  Heart,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'
import {
  association,
  teamMembers,
  honors,
  stats,
  milestones,
} from '../data/association'

const statIcons = {
  users: Users,
  trophy: Trophy,
  rocket: Rocket,
  book: BookOpen,
}

const valueCards = [
  {
    icon: Heart,
    title: '我们的使命',
    desc: association.mission,
  },
  {
    icon: Sparkles,
    title: '核心价值观',
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
              <Building className="h-4 w-4 text-amber-300" /> 关于协会
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">关于电子协会</h1>
            <p className="mt-3 text-slate-300">
              探索电子世界，分享技术精华。我们致力于为电子爱好者提供一个学习、交流、成长的平台。
            </p>
          </div>
        </div>
      </section>

      {/* 简介 */}
      <section className="section-pad container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
              协会简介
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {association.name}成立于{' '}
              <span className="font-semibold text-accent">
                {association.foundingYear} 年
              </span>
              ，现有会员 200+ 人。
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              专注于嵌入式系统、硬件设计、通信技术等领域，获省级以上奖项，定期举办技术培训和项目实践，为同学们提供学习和交流的平台。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => {
                const Icon = statIcons[s.icon] || Cpu
                return (
                  <div
                    key={s.label}
                    className="card p-4 text-center"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                    <div className="text-2xl font-bold text-primary">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {s.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-4">
            {valueCards.map((v) => (
              <div key={v.title} className="card flex items-start gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              协会团队
            </h2>
            <p className="mt-2 text-slate-500">
              团结协作，共创未来
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m) => (
              <div key={m.role} className="card p-6 text-center">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20 text-2xl font-bold text-primary">
                  {m.role[0]}
                </span>
                <h3 className="font-semibold text-slate-900">{m.role}</h3>
                <p className="mt-1 text-xs text-slate-400">{m.major}</p>
                <p className="mt-3 text-sm text-slate-500">{m.duty}</p>
                <span className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                  {m.honor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 荣誉 */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              获奖荣誉
            </h2>
            <p className="mt-2 text-slate-500">凝聚汗水与智慧的每一份荣耀</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {honors.map((h) => (
              <div key={h} className="card flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Award className="h-5 w-5" />
                </span>
                <p className="font-medium text-slate-700">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              发展历程
            </h2>
            <p className="mt-2 text-slate-500">记录电子协会的每一步成长</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-slate-200 md:before:left-1/2">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:ml-0 md:pr-10 md:text-right'
                      : 'md:ml-auto md:pl-10'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-xs font-bold text-white shadow-md md:top-1 ${
                      i % 2 === 0
                        ? 'md:left-auto md:-right-[18px]'
                        : 'md:-left-[18px]'
                    }`}
                  >
                    {m.year.slice(2)}
                  </span>
                  <div className="card flex-1 p-5">
                    <div className="text-sm font-bold text-accent">
                      {m.year}
                    </div>
                    <h3 className="mt-1 font-semibold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
