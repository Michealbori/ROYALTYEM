import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <section className="preloader">
          <div className="spinner">
            <span className="sk-inner-circle"></span>
          </div>
        </section>
      )}

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="/">
            <strong>
              <span>Royalty</span> EM
            </strong>
          </a>

          <div className="d-lg-none">
            <a href="/sign-in" className="bi-person custom-icon me-3"></a>
            <a href="/product-detail" className="bi-bag custom-icon"></a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {["Home", "Story", "Products", "FAQs", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-none d-lg-block">
              <a href="/sign-in" className="bi-person custom-icon me-3"></a>
              <a href="/product-detail" className="bi-bag custom-icon"></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
