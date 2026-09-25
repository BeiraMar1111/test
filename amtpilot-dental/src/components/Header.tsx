import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo" aria-hidden="true">
          A
        </div>
        <div>
          <div className="header__title">AmtPilot</div>
          <div className="header__subtitle">Dein KI-Assistent für Behördenwege</div>
        </div>
      </div>
      <div className="header__status">
        <span className="header__status-dot" aria-hidden="true" />
        Online
      </div>
    </header>
  )
}
