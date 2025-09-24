function Header() {
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div
            className="alert text-center alert-warning alert-dismissible fade show mb-0"
            role="alert"
          >
            <p className="mb-0">
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
          <a className="navbar-brand" href="#">
            <h3 className="fw-bolder">SHOP.CO</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  On Sale
                </a>
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div className="icon ms-4">
              <a href="#" className="text-decoration-none text-black">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <a href="#" className="text-decoration-none text-black">
                <i className="fa-regular fa-circle-user ms-4"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
