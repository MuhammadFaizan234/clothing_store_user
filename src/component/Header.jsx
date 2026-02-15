function Header() {
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div
            className="alert text-center alert-warning alert-dismissible fade show mb-0"
            role="alert"
          >
            <p className="mb-0 fs-29">
              Sign up and get 20% off to your first order.
              <span className="text-decoration-underline">Sign Up Now</span>
            </p>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg mt-2">
        <div className="container">
          <span className="d-flex">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand ms-3" href="#">
              <h3 className="fw-bolder">SHOP.CO</h3>
            </a>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  On Sale
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Man
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Woman
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product">
                      Product
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brand
                </a>
              </li>
            </ul>
            <form className="" role="search">
              <input
                className="form-control me-2 d-none d-lg-inline-block"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="icon ms-4">
            <a
              href="#"
              className="text-decoration-none text-black d-sm-none d-sm-inline-block"
            >
              <i className="fa fa-search fs-4"></i>
            </a>
            <a href="#" className="text-decoration-none text-black">
              <i className="fa-solid fa-cart-shopping ms-2 fs-4"></i>
            </a>
            <a href="#" className="text-decoration-none text-black">
              <i className="fa-regular fa-circle-user ms-2 fs-4"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
