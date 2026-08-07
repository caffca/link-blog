import { useMemo, useState } from 'react'
import { Search, Download, Inbox } from 'lucide-react'
import ResourceCard from '../components/ResourceCard'
import { resourceCategories, allResources } from '../data/resources'

export default function Resources() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('全部')

  const categories = ['全部', ...resourceCategories.map((c) => c.name)]

  const filteredAll = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return allResources.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    )
  }, [query])

  const availableCount = allResources.filter((r) => r.file).length

  return (
    <div>
      {/* 页头 */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-accent-dark py-16 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
              <Download className="h-4 w-4 text-amber-300" /> 资料下载
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">资料下载</h1>
            <p className="mt-3 text-slate-300">
              下载数据手册、项目文件、代码示例等资源，共 {availableCount} 项可下载
            </p>
          </div>
        </div>
      </section>

      {/* 搜索与分类 */}
      <section className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 py-4 backdrop-blur">
        <div className="container-page flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCat === c
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
              placeholder="搜索资源..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-accent focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* 内容 */}
      <section className="section-pad container-page">
        {filteredAll ? (
          filteredAll.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAll.map((r) => (
                <ResourceCard key={r.id} item={r} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Inbox className="mx-auto mb-4 h-14 w-14 text-slate-300" />
              <h3 className="text-lg font-semibold text-slate-700">
                未找到相关资源
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                尝试更换搜索关键词或分类
              </p>
            </div>
          )
        ) : (
          <div className="space-y-12">
            {resourceCategories
              .filter((cat) => activeCat === '全部' || cat.name === activeCat)
              .map((cat) => (
                <div key={cat.name}>
                  <div className="mb-5 flex items-center gap-3">
                    <h2 className="text-xl font-bold text-primary">
                      {cat.name}
                    </h2>
                    <span className="text-sm text-slate-400">
                      {cat.description}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs text-slate-400">
                      {cat.items.filter((i) => i.file).length}/
                      {cat.items.length} 可下载
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((item) => (
                      <ResourceCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  )
}
