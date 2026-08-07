import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Download,
  Mail,
  Sparkles,
  Zap,
} from 'lucide-react'
import ResourceCard from '../components/ResourceCard'
import { allResources } from '../data/resources'
import { association } from '../data/association'

const quickLinks = [
  {
    to: '/resources',
    icon: Download,
    title: '资料下载',
    desc: '下载数据手册、项目源码、设计文件等资料',
  },
  {
    to: '/articles',
    icon: BookOpen,
    title: '技术文章',
    desc: '浏览嵌入式系统、硬件设计等领域的专业文章',
  },
  {
    to: '/about',
    icon: Sparkles,
    title: '关于 linkk',
    desc: '了解 linkk 的知识库和愿景',
  },
  {
    to: '/contact',
    icon: Mail,
    title: '联系方式',
    desc: '有任何问题或建议，欢迎随时联系',
  },
]

export default function Home() {
  const hotResources = allResources.filter((r) => r.file || r.url).slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent-dark text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0, transparent 40%)',
          }}
        />
        <div className="container-page relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-slate-200 ring-1 ring-white/20 backdrop-blur">
              <Zap className="h-4 w-4 text-amber-300" /> {association.slogan}
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {association.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300">{association.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary shadow-lg transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" /> 下载资料
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/30 backdrop-blur transition-transform hover:scale-105"
              >
                <Sparkles className="h-4 w-4" /> 了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section className="section-pad container-page -mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((q) => (
            <Link key={q.to} to={q.to} className="card group p-6">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white shadow-md">
                <q.icon className="h-6 w-6" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-slate-900">
                {q.title}
              </h3>
              <p className="text-sm text-slate-500">{q.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                进入{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 热门资料 */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                热门资料
              </h2>
              <p className="mt-2 text-slate-500">
                常用工具与学习资源，点击即可下载
              </p>
            </div>
            <Link
              to="/resources"
              className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex"
            >
              全部资源 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotResources.map((r) => (
              <ResourceCard key={r.id} item={r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad container-page">
        <div className="relative overflow-hidden rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-slate-100 md:p-14">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10" />
          <div className="relative">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white">
              <Cpu className="h-7 w-7" />
            </span>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              探索电子世界，分享技术精华
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              这里是 linkk 的个人知识库，持续记录嵌入式、硬件设计与通信技术的学习与项目经验。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/about" className="btn-primary">
                了解更多 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/resources" className="btn-outline">
                获取资料
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
