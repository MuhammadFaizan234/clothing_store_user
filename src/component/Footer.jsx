function Footer() {
  return (
    <>
      <div className="container">
        <div className="bg-black text-white rounded-4">
          <div className="row">
            <div className="col-md-7">
              <h3 className="fs-2 ps-5 ms-2 py-4">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h3>
            </div>
            <div className="col-md-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="border-0 outline-none mt-4"
              />
              <button href="" className="btn btn-light mt-2 px-5 rounded-5">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>SHOP.CO</h3>
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
