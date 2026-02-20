import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState } from "react";
import "../styles/cart.css";

export default function Cart() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "large",
      color: "red",
      image: "/image/product/Frame 33.png",
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      price: 15,
      size: "medium",
      color: "blue",
      image: "/image/product/Frame 72.png",
    },
    {
      id: 3,
      name: "Gradient Graphic T-shirt",
      price: 17,
      size: "small",
      color: "green",
      image: "/image/product/Frame 9.png",
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <hr />
        <div className="row">
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
        <div className="row mb-5">
          <h1 className="text-uppercase mb-4">Your Cart</h1>
          <div className="col-md-7 gx-3">
            <div className="border border-1 rounded-4 pt-4">
              {products.map((product, i) => (
                <div className="ms-3 mb-3 mt-3 me-3 row" key={i}>
                  <div className="col-md-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-4 img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>{product.name}</h5>
                    <p className="m-0">
                      <span className="text-black">Size:</span> {product.size}
                    </p>
                    <p className="m-0">
                      <span className="text-black">Color:</span> {product.color}
                    </p>
                    <h5 className="fs-4 mt-3">${product.price}</h5>
                  </div>
                  <div className="col-md-3">
                    <img src="/image/trash.svg" alt="" className="float-end" />
                    <div
                      className="d-inline-flex align-items-center px-3 py-2 rounded-pill float-end mt-5"
                      style={{ backgroundColor: "#e9ecef", gap: "12px" }}
                    >
                      <button
                        onClick={decrease}
                        className="border-0 bg-transparent fs-5 fw-bold"
                        style={{ cursor: "pointer" }}
                      >
                        −
                      </button>

                      <span className="fw-semibold">{count}</span>

                      <button
                        onClick={increase}
                        className="border-0 bg-transparent fs-5 fw-bold"
                        style={{ cursor: "pointer" }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr className="mt-3 mb-3" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5 gx-3">
            <div className="pt-2 ps-3 pe-3 border border-1 rounded-4">
              <h5 className="fs-3 mb-4 mt-2">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3 text-secondary">
                <span>Subtotal</span>
                <span className="text-dark fw-semibold">$565</span>
              </div>

              <div className="d-flex justify-content-between mb-3 text-secondary">
                <span>Discount (-20%)</span>
                <span className="text-danger fw-semibold">-$113</span>
              </div>

              <div className="d-flex justify-content-between mb-3 text-secondary">
                <span>Delivery Fee</span>
                <span className="text-dark fw-semibold">$15</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-semibold fs-5">Total</span>
                <span className="fw-bold fs-4">$467</span>
              </div>
              <div className="d-flex align-items-center gap-2 mt-3 me-3">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="ms-0 py-2 rounded-pill border border-1 flex-grow-1"
                  placeholder="Add promo code"
                />
                <input
                  type="button"
                  value="Apply"
                  className="btn bg-dark text-white py-2 px-5 rounded-pill fw-semibold"
                />
              </div>
              <input
                type="button"
                value="Go to Checkout"
                className="btn btn-dark w-100 py-3 rounded-pill fw-semibold mt-3"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
