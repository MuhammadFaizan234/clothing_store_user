import Footer from "../component/Footer.jsx";
import Header from "../component/Header.jsx";
import Stars from "../component/Stars.jsx";

function Home() {
  const card = [
    {
      img: "/image/Frame32.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      stars: "4.5",
      realprise: "120",
    },
    {
      img: "/image/Frame33.png",
      title: "SKINNY FIT JEANS",
      stars: "3.5",
      realprise: "240",
      secondprice: "260",
      discount: "20",
    },
    {
      img: "/image/Frame34.png",
      title: "CHECKERED SHIRT",
      stars: "4.5",
      realprise: "180",
    },
    {
      img: "/image/Frame38.png",
      title: "SLEEVE STRIPED T-SHIRT",
      stars: "4.5",
      realprise: "130",
      secondprice: "160",
      discount: "30",
    },
  ];
  const top = [
    {
      img: "/image/Frame32(1).png",
      title: "VERTICAL STRIPED SHIRT",
      stars: "5.0",
      realprise: "212",
      secondprice: "232",
      discount: "20",
    },
    {
      img: "/image/Frame33(1).png",
      title: "COURAGE GRAPHIC T-SHIRT",
      stars: "4.0",
      realprise: "145",
    },
    {
      img: "/image/Frame34(1).png",
      title: "LOOSE FIT BERMUDA SHORTS",
      stars: "3.0",
      realprise: "80",
    },
    {
      img: "/image/Frame38(1).png",
      title: "FADED SKINNY JEANS",
      stars: "4.5",
      realprise: "210",
    },
  ];

  return (
    <>
      <Header />
      <header className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-black">
              <h1 className="pt-5">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className="fs-7">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="btn btn-dark"> Shop Now</button>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-2 mb-4 border-end">
              <h4 className="fs-3">200+</h4>
              <p className="fs-0">International Brands</p>
            </div>
            <div className="col-md-2 mb-4 border-end">
              <h4 className="fs-3">2,000+</h4>
              <p className="fs-0">High-Quality Products</p>
            </div>
            <div className="col-md-2">
              <h4 className="fs-3">30,000+</h4>
              <p className="fs-0">Happy Customers</p>
            </div>
          </div>
        </div>
      </header>
      <div className="brand bg-black">
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col gx-5">
              <img src="/image/Group3.png" className="img-fluid" alt="" />
            </div>
            <div className="col gx-5">
              <img src="/image/Group4.png" className="img-fluid" alt="" />
            </div>
            <div className="col gx-5">
              <img src="/image/Group1.png" className="img-fluid" alt="" />
            </div>
            <div className="col gx-5">
              <img src="/image/Group2.png" className="img-fluid" alt="" />
            </div>
            <div className="col gx-5">
              <img src="/image/Group.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="new">
        <div className="container">
          <div className="row">
            <h1 className="text-center mb-5 mt-5">NEW ARRIVALS</h1>
            {card.map((d, i) => {
              return (
                <>
                  <div className="col-md-3 d-inline">
                    <div
                      className="card border-0"
                      key={i}
                      style={{ width: "auto" }}
                    >
                      <img src={d.img} alt="" />
                      <div className="card-body fs-9 ps-0">
                        <div className="card-title">
                          <h5 className="fs-8">{d.title}</h5>
                          <Stars star={d.stars} />
                          {d.secondprice ? (
                            <h4>
                              ${d.realprise}{" "}
                              <span className="text-secondary text-decoration-line-through">
                                ${d.secondprice}
                              </span>
                              <span className="fs-8 text-danger bg-danger rounded-5 p-1 ms-1 satoshi-medium">
                                -{d.discount}%
                              </span>
                            </h4>
                          ) : (
                            <h4>${d.realprise}</h4>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <a
              className="w-auto text-decoration-none btn btn-outline-light text-dark border px-5 py-2 rounded-5 mx-auto mb-5 mt-3 satoshi-medium"
              href="#"
            >
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="top">
        <div className="container">
          <div className="row">
            <h1 className="text-center mb-5 mt-5">top selling</h1>
            {top.map((d, i) => {
              return (
                <>
                  <div className="col-md-3 d-inline">
                    <div
                      className="card border-0"
                      key={i}
                      style={{ width: "auto" }}
                    >
                      <img src={d.img} alt="" />
                      <div className="card-body fs-9 ps-0">
                        <div className="card-title">
                          <h5 className="fs-8">{d.title}</h5>
                          <Stars star={d.stars} />
                          {d.secondprice ? (
                            <h4>
                              ${d.realprise}{" "}
                              <span className="text-secondary text-decoration-line-through">
                                ${d.secondprice}
                              </span>
                              <span className="fs-8 text-danger bg-danger rounded-5 p-1 ms-1 satoshi-medium">
                                -{d.discount}%
                              </span>
                            </h4>
                          ) : (
                            <h4>${d.realprise}</h4>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <a
              className="w-auto text-decoration-none btn btn-outline-light text-dark border px-5 py-2 satoshi-medium rounded-5 mx-auto mb-5 mt-3"
              href="#"
            >
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="container bg-custom rounded-5">
        <div className="container w-custom">
          <div className="row">
            <h1 className="text-center pt-5 pb-5">BROWSE BY dress STYLE</h1>
          </div>
          <div className="row pb-4">
            <div className="col-md-5">
              <div className="bg-1 rounded-4 pb-5">
                <h4 className="fs-2 pt-4 ps-3 mb-5 pb-5">Casual</h4>
              </div>
            </div>
            <div className="col-md-7">
              <div className="bg-2 rounded-4 pb-5">
                <h4 className="fs-2 pt-4 ps-3 mb-5 pb-5">Formal</h4>
              </div>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-7">
              <div className="bg-3 rounded-4 pb-5">
                <h4 className="fs-2 pt-4 ps-3 mb-5 pb-5">Party</h4>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-4 rounded-4 pb-5">
                <h4 className="fs-2 pt-4 ps-3 mb-5 pb-5">Gym</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customer">
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
