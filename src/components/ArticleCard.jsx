import { ArrowUpRight, Calendar, Clock } from 'lucide-react'

export default function ArticleCard({ article }) {
  return (
    <article className="card group flex flex-col gap-3 p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {article.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <h3 className="text-lg font-semibold leading-snug text-slate-900">
        {article.title}
      </h3>

      <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
        {article.excerpt}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> {article.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {article.readTime}
        </span>
      </div>
    </article>
  )
}
