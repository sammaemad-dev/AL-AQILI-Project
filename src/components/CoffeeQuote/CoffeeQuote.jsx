import "./CoffeeQuote.css";

function CoffeeBean() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="8" ry="10" />
      <path d="M12 2c-3 3-3 7 0 10s3 7 0 10" strokeLinecap="round" />
    </svg>
  );
}

function CoffeeCup() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3c0 1-1 1-1 2s1 1 1 2" />
      <path d="M12.5 3c0 1-1 1-1 2s1 1 1 2" />
      <path d="M4 9h13v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V9Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M3 21h15" />
    </svg>
  );
}

function CoffeeQuote() {
  return (
    <section className="coffee-quote">

      <div className="beans bean1"><CoffeeBean /></div>
      <div className="beans bean2"><CoffeeBean /></div>
      <div className="beans bean3"><CoffeeBean /></div>
      <div className="beans bean4"><CoffeeBean /></div>
      <div className="beans bean5"><CoffeeBean /></div>

      <div className="line"></div>

      <div className="quote-content">
        <span className="coffee-icon">
          <CoffeeCup />
        </span>

        <h2>
          "Great coffee, good mood,
          <br />
          perfect day."
        </h2>
      </div>

      <div className="line right"></div>

    </section>
  );
}

export default CoffeeQuote;