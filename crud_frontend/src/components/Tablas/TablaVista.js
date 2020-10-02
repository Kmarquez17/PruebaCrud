import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

class Tabla extends Component {
  render() {
    const { data, handleEliminar, handleEditar } = this.props;
    const columns = [
      {
        title: "Categoría",
        dataIndex: "categoria",
        key: "categoria",
        render: (text) => <>{text}</>,
      },
      {
        title: "Descripción",
        dataIndex: "descripcion",
        key: "descripcion",
      },
      {
        title: "Precio compra",
        dataIndex: "precioCompra",
        key: "precioCompra",
      },
      {
        title: "Precio venta",
        dataIndex: "precioVenta",
        key: "precioCompra",
      },
      {
        title: "Stock",
        dataIndex: "stock",
        key: "precioCompra",
      },
      {
        title: "Action",
        key: "action",
        render: (data) => (
          <Space size="middle">
            <Button
              onClick={() => {
                handleEditar(data);
              }}
            >
              <EditOutlined /> Editar
            </Button>

            <Button
              danger
              onClick={() => {
                handleEliminar(data);
              }}
            >
              <DeleteOutlined /> Eliminar
            </Button>
          </Space>
        ),
      },
    ];

    return <Table dataSource={data} columns={columns} />;
  }
}

export default withRouter(Tabla);
