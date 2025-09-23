function Header() {
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div
            className="alert text-center alert-warning alert-dismissible fade show mb-0"
            role="alert"
          >
            <p>
              Sign up and get 20% off to your first order.{" "}
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

      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h4 className="fw-bolder">SHOP.CO</h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  On Sale
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Brand
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
