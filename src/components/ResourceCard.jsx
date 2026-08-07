import { Archive, Database, Download, ExternalLink, FileText } from 'lucide-react'

const baseUrl = import.meta.env.BASE_URL

const formatIcons = {
  PDF: FileText,
  ZIP: Archive,
  EXE: Download,
  MSI: Download,
}

export default function ResourceCard({ item }) {
  const hasFile = !!item.file
  const hasUrl = !!item.url
  const Icon = formatIcons[item.format] || Database

  return (
    <div className="card flex flex-col gap-3 p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-900">{item.name}</h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            {item.description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs text-slate-400">
          {item.format}
          {item.size && ` · ${item.size}`}
        </span>
        {hasFile ? (
          <a
            href={`${baseUrl}files/${item.file}`}
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent-dark"
          >
            <Download className="h-3.5 w-3.5" /> 下载
          </a>
        ) : hasUrl ? (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-light"
          >
            <ExternalLink className="h-3.5 w-3.5" /> 官网
          </a>
        ) : (
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-400">
            资源整理中
          </span>
        )}
      </div>
    </div>
  )
}
