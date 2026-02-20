import Footer from "../component/Footer.jsx";
import Header from "../component/Header.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Stars1 from "../component/Stars1.jsx";
import Stars from "../component/Stars.jsx";

function Home() {
  const slider = useRef(null);
  // let owl = $(".owl-carousel");
  const option = {
    dots: false,
    arrows: false,
    infinite: true, // Set default infinite behavior (or false, based on your preference)
    speed: 500,
    // Add default slidesToShow and slidesToScroll for desktop
    slidesToShow: 4, // Assuming you want 4 visible on large screens
    slidesToScroll: 4, // Assuming you scroll 4 at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  const review = [
    {
      stars: "5",
      verifid: true,
      title: "Sarah M.",
      paragraph:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      stars: "5",
      verifid: true,
      title: "Alex K.",
      paragraph:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      stars: "5",
      verifid: true,
      title: "Sarah M.",
      paragraph:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      stars: "5",
      verifid: true,
      title: "Sarah M.",
      paragraph:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      stars: "5",
      verifid: true,
      title: "Sarah M.",
      paragraph:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      stars: "5",
      verifid: true,
      title: "Alex K.",
      paragraph:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
  ];

  return (
    <>
      <Header />
      <header className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-black">
              <h1 className="pt-5 fs-sm-1">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="fs-7">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="btn btn-dark"> Shop Now</button>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-2 col-sm-6 col-6 mb-4 border-end text-center">
              <h4 className="fs-3">200+</h4>
              <p className="fs-0">International Brands</p>
            </div>
            <div className="col-md-2 mb-4 col-sm-2 col-6 text-center border-end">
              <h4 className="fs-3">2,000+</h4>
              <p className="fs-0">High-Quality Products</p>
            </div>
            <div className="col-md-2 align-items-center col text-center">
              <h4 className="fs-3">30,000+</h4>
              <p className="fs-0">Happy Customers</p>
            </div>
          </div>
        </div>
      </header>
      <div className="brand bg-black">
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-sm-2 col-4 gx-5 text-center">
              <img src="/image/Group3.png" className="img-fluid" alt="" />
            </div>
            <div className="col-sm-2 col-4 gx-5 text-center">
              <img src="/image/Group4.png" className="img-fluid" alt="" />
            </div>
            <div className="col-sm-2 col-4 gx-5 text-center">
              <img src="/image/Group1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-sm-2 col-6 pt-3 pt-sm-0 gx-5 text-center">
              <img src="/image/Group2.png" className="img-fluid" alt="" />
            </div>
            <div className="col-sm-2 col-6 pt-3 pt-sm-0 gx-5 text-center">
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
                <div className="col-6 col-md-3 d-inline" key={i}>
                  <div className="card border-0" style={{ width: "auto" }}>
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
                  <div className="col-6 col-md-3 d-inline">
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
              <div className="bg-1 rounded-4 pb-5 mb-4 mb-sm-0">
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
              <div className="bg-3 rounded-4 pb-5 mb-4 mb-sm-0">
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
      <div className="customer mb-5 PB-5">
        <div className="container">
          <div className="row">
            <div className="text mt-5 pt-5">
              <h1>OUR HAPPY CUSTOMERS</h1>
              <div
                style={{
                  display: "flex",
                }}
              >
                <h6
                  className="2 pe-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="fas fa-arrow-left #0000" />
                </h6>
                <h6
                  className="1"
                  style={{ cursor: "pointer" }}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="fas fa-arrow-right #0000" />
                </h6>
              </div>
            </div>

            <div className="">
              <Slider ref={slider} {...option}>
                {review.map((d, i) => {
                  return (
                    <div
                      className="me-4 border ps-2 pe-2 rounded-4 w-auto d-inline-block"
                      key={i}
                    >
                      <Stars1 star={d.stars} className="fs-8" />
                      <h4 className="fs-6 ms-2">
                        {d.title}
                        <span>
                          <i
                            className="fa-solid fa-circle-check fs-6"
                            style={{ color: "#28a745" }}
                          ></i>
                        </span>
                      </h4>
                      <p className="fs-7 ms-2">{d.paragraph}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
