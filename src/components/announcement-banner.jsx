import * as React from 'react'

const announcementId = 'urgent-message-2026-10-23'
const dismissedKey = `kwb-dismissed-announcement-${announcementId}`

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    if (window.localStorage.getItem(dismissedKey) === 'true') {
      setIsVisible(false)
    }
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(dismissedKey, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside
      role="region"
      aria-label="Dringende mededeling"
      className="w-full bg-red-700 px-4 py-4 text-white shadow-md"
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4">
        <p className="m-0 text-center text-sm font-semibold sm:text-base">
          <span className="font-extrabold uppercase tracking-wide">
            Dringende mededeling:
          </span>{' '}
          Het Mysterie van de Nacht 2026 is geannuleerd. Meer info op <a href="/mysterie/" className="underline">deze pagina</a>.
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Sluit dringende mededeling"
          className="shrink-0 rounded p-2 text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default AnnouncementBanner
