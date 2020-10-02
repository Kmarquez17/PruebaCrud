import React from "react";
import ImgNotFound from "../../imagenes/NotFound.jpg";
const NotFound = () => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <img
          src={ImgNotFound}
          className=" img-fluid rounded mx-auto d-block"
          width="500"
          height="500"
          alt="Error 404."
        ></img>
        <h4>Página no encontrada</h4>
      </div>
    </div>
  );
};

export default NotFound;
