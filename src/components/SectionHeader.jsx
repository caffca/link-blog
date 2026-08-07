export default function SectionHeader({ title, subtitle, light }) {
  return (
    <div className="mb-10 text-center">
      <h2
        className={`text-2xl font-bold md:text-3xl ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 ${
            light ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
