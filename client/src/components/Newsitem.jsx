import img from "../assets/newsimg.jpg";

function Newsitem({ title, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ width: "345px" }}
    >
      <img
        src={src ? src : img}
        className="card-img-top"
        style={{ height: "200px", width: "325px" }}
      />
      <div
        className="card-body"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <h5 className="card-title text-lg font-semibold">{title}</h5>
        <a
          href={url}
          className="btn btn-primary"
          style={{ position: "absolute", bottom: "20px", left: "20px" }}
        >
          Read more..
        </a>
      </div>
    </div>
  );
}

export default Newsitem;
