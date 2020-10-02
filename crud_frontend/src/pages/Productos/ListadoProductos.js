import React, { Component } from "react";
import { Row, Col, Button, Typography } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

import Request from "../../services/request";
import TablaVista from "../../components/Tablas/TablaVista";
import Spinner from "../../components/Spinner/Spinner";

const { Title } = Typography;

class ListadoProducto extends Component {
  service = new Request();

  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = () => {
    this.setState({ loading: true });
    this.service
      .listado("/producto/listado")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.productos, loading: false }));
  };

  handleEditar = (obj) => {
    this.props.history.push(`/producto/editar/${obj._id}`);
  };

  handleEliminar = (obj) => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Una Categoria eliminada no se puede recuperar...!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007bff",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Si,Eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        this.service.delete(`/producto/eliminar/${obj._id}`).then((res) => {
          if (res.status === 200) {
            this.fetchAPI();
            Swal.fire("Eliminado!", "El producto se ha eliminado", "success");
          }
        });
        // .then(res => res);
      }
    });
  };

  render() {
    // console.log(this.state.data);
    if (this.state.loading) {
      return (
        <Row>
          <Col span={24}>
            <Spinner />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col span={24}>
            <>
              <Title>Listado de Productos</Title>
              <Button
                style={{marginBottom:'10px'}}
                type="primary"
                onClick={() => {
                  this.props.history.push(`/producto/agregar`);
                }}
              >
                <FileAddOutlined />
                Agregar
              </Button>

              {this.state.data.length === 0 ? (
                <Col span={12} offset={6}>
                  <Title level={3}>No hay productos :(</Title>
                </Col>
              ) : (
                <TablaVista
                  columns={this.state.columns}
                  data={this.state.data}
                  handleEditar={this.handleEditar}
                  handleEliminar={this.handleEliminar}
                />
              )}
            </>
          </Col>
        </Row>
      );
    }
  }
}

export default ListadoProducto;
