export function StatusBar({ time = '9:41' }) {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[15px] font-semibold leading-none">
      <span>{time}</span>
      <div className="flex items-center gap-1.5 pr-0.5">
        <svg className="h-3.5 w-5" viewBox="0 0 24 12" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" />
          <rect x="15" y="1" width="3" height="11" rx="0.5" />
        </svg>
        <svg className="h-3.5 w-4" viewBox="0 0 20 14" fill="currentColor" aria-hidden>
          <path d="M10 2c3 2.5 5 5.5 5 8.5H5c0-3 2-6 5-8.5z" />
        </svg>
        <div className="flex items-center rounded border border-black/20 px-1 py-0.5 text-[10px] font-bold leading-none">
          100%
        </div>
      </div>
    </div>
  )
}
