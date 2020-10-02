import React, { Component } from "react";
import { PageHeader } from "antd";
import Swal from "sweetalert2";
import Formulario from "../../components/Formularios/Productos";

import Request from "../../services/request";

class AgregarProducto extends Component {
  service = new Request();

  state = {
    data: {
      categoria: "",
      descripcion: "",
      precioCompra: "",
      precioVenta: "",
      stock: "",
    },
    error: false,
  };

  handleSubmit = async (data) => {
    this.service.agregar("/producto/agregar", data).then((res) => {
      if (res.status === 200) {
        Swal.fire(
          "Producto Creado",
          "El producto se creo correctamente",
          "success"
        );
      }
    });
    this.props.history.push("/");
  };

  render() {
    let component =
      Object.keys(this.state.data).length > 0 ? (
        <>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              this.props.history.push("/");
            }}
            title="Agregar Producto"
          >
            <Formulario
              data={this.state.data}
              handleSubmit={this.handleSubmit}
            />
          </PageHeader>
        </>
      ) : null;

    return component;
  }
}

export default AgregarProducto;
