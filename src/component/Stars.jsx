function Stars({ star }) {
  const ratingstars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <>
        {star >= index + 1 ? (
          <i className="fa-solid fa-star text-warning"></i>
        ) : star >= number ? (
          <i className="fa-solid fa-star-half text-warning"></i>
        ) : (
          ""
        )}
      </>
    );
  });
  return (
    <>
      <span>
        {ratingstars}
        <p className="d-inline-block ms-1">{star}/5</p>
      </span>
    </>
  );
}

export default Stars;
