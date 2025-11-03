function Stars1({ star }) {
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
      <span>{ratingstars}</span>
    </>
  );
}

export default Stars1;
