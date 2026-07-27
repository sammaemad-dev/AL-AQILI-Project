
import { useNavigate } from "react-router-dom";
import "./MenuHeader.css";
import { categories } from "./MenuData";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="menu-header__search-icon">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export default function MenuHeader({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  cartCount = 0,
}) {
  const navigate = useNavigate();

  return (
    <header className="menu-header">
      {/* ── Top bar ── */}
      <div className="menu-header__top">
        {/* Logo left */}
        <div className="menu-header__brand">
          <div className="menu-header__brand-text">
            <span className="menu-header__brand-name">VELOURA</span>
            <span className="menu-header__brand-tagline">Cafe</span>
          </div>
        </div>

        {/* Cart right — navigates to /cart */}
        <button
          className="menu-header__cart-btn"
          aria-label="View cart"
          onClick={() => navigate("/cart")}
        >
          <IconCart />
          {cartCount > 0 && (
            <span className="menu-header__cart-badge">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Search ── */}
      <div className="menu-header__search-wrap">
        <div className="menu-header__search">
          <IconSearch />
          <input
            type="text"
            placeholder="Search coffee..."
            className="menu-header__search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="menu-header__filter-btn" aria-label="Filter">
            <IconFilter />
          </button>
        </div>
      </div>

      {/* ── Category tabs ── */}
      <div className="menu-header__categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu-header__cat-btn ${
              activeCategory === cat.id
                ? "menu-header__cat-btn--active"
                : "menu-header__cat-btn--inactive"
            }`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </header>
  );
}