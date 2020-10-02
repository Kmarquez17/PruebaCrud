import React, { useState } from "react";
import { Form, Alert, Input, Button, Card, Row, Col } from "antd";

import { withRouter } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const Login = (props) => {
  const [error, setError] = useState(false);
  const onFinish = (values) => {
    /*Email y passaword para simular el login*/
    let email = "marquezkrodriguez24@gmail.com";
    let password = "abc123";

    if (values.email === email && values.password === password) {
      setError(false);
      props.handleInicioSesion(values);
      props.history.push("/");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }
  };

  const styleAlert = {
    margin: ".5em",
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Card
          title="Inicio se sesión"
          bordered={false}
          style={{ width: `100%` }}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={props.data}
            onFinish={onFinish}
          >
            {error ? (
              <Alert
                style={styleAlert}
                message="Error"
                description="Error a la hora de inicar sesión"
                type="error"
                showIcon
              />
            ) : null}
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, type: "email", message: "Ingrese su email" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: "Ingrese su contraseña" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Inicio de sesión
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Login);
