import { ArrowUpRight, BookOpen, Calendar, Clock, FileText } from 'lucide-react'

const baseUrl = import.meta.env.BASE_URL

export default function ArticleCard({ article }) {
  const hasFile = !!article.file
  const href = hasFile ? `${baseUrl}files/${article.file}` : undefined

  const card = (
    <>
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

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {article.date}
          </span>
          {article.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {article.readTime}
            </span>
          )}
        </div>
        {hasFile && (
          <span className="inline-flex items-center gap-1 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white">
            <FileText className="h-3.5 w-3.5" /> 阅读 PDF
          </span>
        )}
      </div>
    </>
  )

  return hasFile ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="card group flex flex-col gap-3 p-6"
    >
      {card}
    </a>
  ) : (
    <article className="card group flex flex-col gap-3 p-6">{card}</article>
  )
}
