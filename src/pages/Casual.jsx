import Footer from "../component/Footer";
import Header from "../component/Header";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import "../styles/pricerange.css";
import "../styles/filter.css";

function Casual() {
  const MIN = 0;
  const MAX = 500;
  const GAP = 10;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (minValue > maxValue - GAP) {
      setMinValue(maxValue - GAP);
    }
    if (maxValue < minValue + GAP) {
      setMaxValue(minValue + GAP);
    }
  }, [minValue, maxValue]);

  const minPercent = (minValue / MAX) * 100;
  const maxPercent = (maxValue / MAX) * 100;

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 10,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 11,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 12,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 13,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 14,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 15,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 16,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 17,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 18,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 10,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 11,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 12,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 13,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 14,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 15,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 16,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 17,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 18,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 10,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 11,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 12,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 13,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 14,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 15,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 16,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 17,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 18,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
    {
      id: 10,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.6,
      image: "/image/product/Frame 9.png",
    },
    {
      id: 11,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 32.png",
    },
    {
      id: 12,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20,
      rating: 5.0,
      image: "/image/product/Frame 33.png",
    },
    {
      id: 13,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 15,
      rating: 3.5,
      image: "/image/product/Frame 34.png",
    },
    {
      id: 14,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/image/product/Frame 38.png",
    },
    {
      id: 15,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 3.5,
      image: "/image/product/Frame 70.png",
    },
    {
      id: 16,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      rating: 5.0,
      image: "/image/product/Frame 71.png",
    },
    {
      id: 17,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image: "/image/product/Frame 72.png",
    },
    {
      id: 18,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image: "/image/product/Frame 73.png",
    },
  ];

  const colors = [
    "green",
    "red",
    "gold",
    "orange",
    "deepskyblue",
    "royalblue",
    "blueviolet",
    "deeppink",
    "#eee",
    "black",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / 10) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Casual
              </li>
            </ol>
          </nav>
        </div>
        {/* section strated */}
        <div className="row">
          {/* sidebar */}
          <div className="col-md-4">
            <div className="box border-3 rounded-3 border mb-3 pb-3">
              {/* Heading */}
              <h5 className="mx-3 pt-3">
                Filters
                <span className="float-end">
                  <img src="/image/Filter.svg" alt="" />
                </span>
                <hr />
              </h5>
              {/* product link */}
              <p className="ms-3 cursor-pointer user-select-none opacity-50">
                T-shirts
                <span className="float-end me-3">
                  <img src="/image/arro.svg" alt="" />
                </span>
              </p>
              <p className="ms-3 cursor-pointer user-select-none opacity-50">
                Shorts
                <span className="float-end me-3">
                  <img src="/image/arro.svg" alt="" />
                </span>
              </p>
              <p className="ms-3 cursor-pointer user-select-none opacity-50">
                Shirts
                <span className="float-end me-3">
                  <img src="/image/arro.svg" alt="" />
                </span>
              </p>
              <p className="ms-3 cursor-pointer user-select-none opacity-50">
                Hoodie
                <span className="float-end me-3">
                  <img src="/image/arro.svg" alt="" />
                </span>
              </p>
              <p className="ms-3 cursor-pointer user-select-none opacity-50">
                Jeans
                <span className="float-end me-3">
                  <img src="/image/arro.svg" alt="" />
                </span>
              </p>
              <hr />
              <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  {/* price */}
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="container py-1"
                      style={{ maxWidth: "400px" }}
                    >
                      <div className="range-slider position-relative">
                        <div className="slider-track"></div>

                        <div
                          className="slider-range"
                          style={{
                            left: `${minPercent}%`,
                            width: `${maxPercent - minPercent}%`,
                          }}
                        ></div>

                        <input
                          type="range"
                          min={MIN}
                          max={MAX}
                          value={minValue}
                          onChange={(e) => setMinValue(+e.target.value)}
                          className="range-input"
                        />

                        <input
                          type="range"
                          min={MIN}
                          max={MAX}
                          value={maxValue}
                          onChange={(e) => setMaxValue(+e.target.value)}
                          className="range-input"
                        />
                      </div>

                      <div className="d-flex justify-content-between mt-4 fw-semibold">
                        <span>${minValue}</span>
                        <span>${maxValue}</span>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                {/* colors section */}

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Colors</Accordion.Header>
                  <Accordion.Body>
                    <div className="color-grid">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-circle ${
                            selectedColor === index ? "active" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(index)}
                        >
                          {selectedColor === index && (
                            <span className="check">✓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                {/* Size section */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Size</Accordion.Header>
                  <Accordion.Body>
                    <div className="size-grid">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          className={`size-pill ${
                            selectedSize === size ? "active" : ""
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                {/* DRess Style section */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Dress Style</Accordion.Header>
                  <Accordion.Body className="border-0 outline-none">
                    <p className="ms-3 cursor-pointer user-select-none opacity-50">
                      Casual
                      <span className="float-end me-3">
                        <img src="/image/arro.svg" alt="" />
                      </span>
                    </p>
                    <p className="ms-3 cursor-pointer user-select-none opacity-50">
                      Formal
                      <span className="float-end me-3">
                        <img src="/image/arro.svg" alt="" />
                      </span>
                    </p>
                    <p className="ms-3 cursor-pointer user-select-none opacity-50">
                      Party
                      <span className="float-end me-3">
                        <img src="/image/arro.svg" alt="" />
                      </span>
                    </p>
                    <p className="ms-3 cursor-pointer user-select-none opacity-50">
                      Gym
                      <span className="float-end me-3">
                        <img src="/image/arro.svg" alt="" />
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <button
                className="btn btn-dark opacity-100 py-3 px-6 d-block mx-auto"
                onClick={() => console.log(selectedColor + selectedSize)}
              >
                Apply Filter
              </button>
            </div>
          </div>
          {/* gallery*/}
          <div className="col-md-8 col-sm-6">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Casual</h4>
              <small className="text-muted">
                Showing 1-10 of 100 Products | Sort by: Most Popular
              </small>
            </div>

            <div className="row g-4">
              {products.slice(page * 10 - 10, page * 10).map((product) => (
                <div key={product.id} className="col-md-4 col-6">
                  <div className="card h-100 border-0">
                    <img
                      src={product.image}
                      className="card-img-top p-3"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>

                      <div className="mb-2 text-warning small">
                        ⭐ {product.rating}
                      </div>

                      <div>
                        <span className="fw-bold">${product.price}</span>
                        {product.oldPrice && (
                          <spam>
                            <span className="text-muted text-decoration-line-through ms-2">
                              ${product.oldPrice}
                            </span>
                            <span className="badge bg-danger ms-2 text-danger">
                              {product.discount}% Off
                            </span>
                          </spam>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            {/* pagination section */}
            {products.length > 10 && (
              <div className="py-3 mb-5">
                <div className="d-flex justify-content-between align-items-center p-md-3 rounded">
                  <button
                    className="btn btn-outline-secondary text-black rounded-3 px-4"
                    disabled={page === 1}
                    onClick={() => selectPageHandler(page - 1)}
                  >
                    ← Previous
                  </button>
                  <ul className="pagination mb-0">
                    {(() => {
                      const totalPages = Math.ceil(products.length / 10);
                      let maxPagesToShow;
                      if (screen.width >= 767) {
                        maxPagesToShow = 5;
                      } else {
                        maxPagesToShow = 2;
                      }
                      let startPage = Math.max(
                        1,
                        page - Math.floor(maxPagesToShow / 2),
                      );
                      let endPage = startPage + maxPagesToShow - 1;
                      if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = Math.max(1, endPage - maxPagesToShow + 1);
                      }
                      return (
                        <>
                          {startPage > 1 && (
                            <>
                              <li className="page-item">
                                <button
                                  className="btn rounded-3 me-1"
                                  onClick={() => selectPageHandler(1)}
                                >
                                  1
                                </button>
                              </li>
                              {startPage > 2 && (
                                <li className="page-item disabled">
                                  <span className="page-link border-0">
                                    ...
                                  </span>
                                </li>
                              )}
                            </>
                          )}

                          {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, i) => {
                              const pageNumber = startPage + i;
                              return (
                                <li key={pageNumber} className="page-item">
                                  <button
                                    className={
                                      page === pageNumber
                                        ? "btn page-link rounded-3 me-1 bg-secondary text-white"
                                        : "btn px-3 rounded-3 me-1"
                                    }
                                    onClick={() =>
                                      selectPageHandler(pageNumber)
                                    }
                                  >
                                    {pageNumber}
                                  </button>
                                </li>
                              );
                            },
                          )}
                          {/* Last Page + Dots */}
                          {endPage < totalPages && (
                            <>
                              {endPage < totalPages - 1 && (
                                <li className="page-item disabled">
                                  <span className="page-link border-0">
                                    ...
                                  </span>
                                </li>
                              )}
                              <li className="page-item">
                                <button
                                  className="btn rounded-3 me-1"
                                  onClick={() => selectPageHandler(totalPages)}
                                >
                                  {totalPages}
                                </button>
                              </li>
                            </>
                          )}
                        </>
                      );
                    })()}
                  </ul>
                  {/* Next Button */}
                  <button
                    className="btn btn-outline-secondary text-black rounded-3 px-4"
                    disabled={page === Math.ceil(products.length / 10)}
                    onClick={() => selectPageHandler(page + 1)}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Casual;
