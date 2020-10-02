import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 10,
  },
};

class Producto extends Component {
  state = {
    visible: true,
  };

  onFinish = (values) => {
    this.props.handleSubmit(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  render() {
    let data = { ...this.props.data };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={data}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Categoria"
          name="categoria"
          rules={[
            {
              required: true,
              message: "Ingrese la categoria",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="descripcion"
          rules={[
            {
              required: true,
              message: "Ingrese la descripción",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Precio compra"
          name="precioCompra"
          rules={[
            {
              required: true,
              message: "Ingrese el precio de la compra",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Precio venta"
          name="precioVenta"
          rules={[
            {
              required: true,
              message: "Ingrese el precio de la venta",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          rules={[
            {
              required: true,
              message: "Ingrese el stock",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Producto;
