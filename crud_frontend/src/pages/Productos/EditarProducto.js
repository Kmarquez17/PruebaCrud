import React, { Component } from "react";
import { PageHeader, Typography } from "antd";
import Swal from "sweetalert2";
import Formulario from "../../components/Formularios/Productos";

import Request from "../../services/request";
const { Title } = Typography;

class AgregarProducto extends Component {
  service = new Request();

  state = {
    data: {},
    error: false,
    isExiste: false,
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    this.service
      .listado(`/producto/listar/${this.props.match.params.id}`)
      .then((res) => {
        if (res.status === 404) {
          this.setState({
            isExiste: true,
          });
        }
        return res.json();
      })
      .then((res) => this.setState({ data: res[0] }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  };

  handleSubmit = async (data) => {
    data._id = this.props.match.params.id;
    this.service
      .editar("/producto/editar", data)
      // .then(res => res.json())
      .then((res) => {
        if (res.status === 200) {
          Swal.fire(
            "Producto Editado",
            "El producto se edito correctamente",
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
            title="Editar Producto"
          >
            <Formulario
              data={this.state.data}
              handleSubmit={this.handleSubmit}
            />
          </PageHeader>
        </>
      ) : this.state.isExiste ? (
        <Title>No existe producto</Title>
      ) : null;

    return component;
  }
}

export default AgregarProducto;
