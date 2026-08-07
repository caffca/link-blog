import { useMemo, useState } from 'react'
import { BookOpen, Search, Inbox } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'
import { articles, articleCategories } from '../data/articles'

export default function Articles() {
  const [category, setCategory] = useState('全部')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchCat = category === '全部' || a.category === category
      const matchQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
  }, [category, query])

  return (
    <div>
      {/* 页头 */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-accent-dark py-16 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <BookOpen className="h-4 w-4 text-amber-300" /> 技术文章
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">技术文章</h1>
            <p className="mt-3 text-slate-300">
              分享嵌入式系统、硬件设计、通信技术等领域的专业知识与项目经验
            </p>
          </div>
        </div>
      </section>

      {/* 搜索与筛选 */}
      <section className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 py-4 backdrop-blur">
        <div className="container-page flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {articleCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-accent text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索文章..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-accent focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* 文章列表 */}
      <section className="section-pad container-page">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Inbox className="mx-auto mb-4 h-14 w-14 text-slate-300" />
            <h3 className="text-lg font-semibold text-slate-700">暂无文章</h3>
            <p className="mt-1 text-sm text-slate-500">
              试试调整搜索条件或选择其他分类
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
