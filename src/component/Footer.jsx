function Footer() {
  const company = ["About", "Features", "Works", "Career"];
  const Help = [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];
  const FAQ = ["Account", "Manage Deliveries", "Orders", "Payments"];
  const Resources = [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    "Youtube Playlist",
  ];

  return (
    <>
      <div className="container z-2 mb-6 position-relative">
        <div className="bg-black text-white rounded-4">
          <div className="row">
            <div className="col-12 col-md-7">
              <h3 className="fs-2 ps-5 ms-2 py-4 p-custom">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h3>
            </div>
            <div className="col-md-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="border-0 outline-none mt-sm-4 d-block mx-auto"
              />
              <button
                href="#"
                className="btn btn-light mt-2 px-5 rounded-5 d-block mx-auto mb-3 mb-sm-0"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom pt-6 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>SHOP.CO</h3>
              <p className="text-break">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <a href="" className="text-black f-b1 me-2">
                <img src="/image/fb.svg" alt="Facebook" />
              </a>
              <a href="" className="text-black f-b me-2">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="" className="text-black f-b me-2">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="text-black f-b me-2">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold mt-3 mt-sm-0">Company</h6>
              <div>
                {company.map((com, index) => {
                  return (
                    <div key={index}>
                      <a
                        href="#"
                        className="text-decoration-none d-block text-black"
                      >
                        <p>{com}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">Help</h6>
              <div>
                {Help.map((com, index) => {
                  return (
                    <div key={index}>
                      <a
                        href="#"
                        className="text-decoration-none d-block text-black"
                      >
                        <p>{com}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">FAQ</h6>
              <div>
                {FAQ.map((com, index) => {
                  return (
                    <div key={index}>
                      <a
                        href="#"
                        className="text-decoration-none d-block text-black"
                      >
                        <p>{com}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">Resources</h6>
              <div>
                {Resources.map((com, index) => {
                  return (
                    <div key={index}>
                      <a
                        href="#"
                        className="text-decoration-none d-block text-black"
                      >
                        <p>{com}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <hr />
          <div className="row pb-5">
            <div className="col-md-6">
              <p className="text-center">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>
            <div className="col-md-6">
              <div className="img ms-sm-6 ms-1">
                <img src="/image/Badge.svg" className="fs-1" alt="" />
                <img src="/image/Badge1.svg" alt="" />
                <img src="/image/Badge2.svg" alt="" />
                <img src="/image/Badge3.svg" alt="" />
                <img src="/image/Badge4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
