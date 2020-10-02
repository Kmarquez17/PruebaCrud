import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Inicio/Login";
import AgregarProducto from "./pages/Productos/AgregarProducto";
import EditarProducto from "./pages/Productos/EditarProducto";
import ListadoProductos from "./pages/Productos/ListadoProductos";
import NotFound from "./pages/Productos/NotFound";

class Router extends Component {
  state = {
    login: false,
    data: {
      email: "",
      password: "",
    },
  };

  handleInicioSesion = (data) => {
    this.setState({
      login: true,
    });
  };

  render() {
    let component = this.state.login ? (
      <Header>
        <main>
          <Switch>
            <Route exact path="/" component={ListadoProductos} />
            <Route exact path="/producto/agregar" component={AgregarProducto} />

            <Route
              exact
              path="/producto/editar/:id"
              component={EditarProducto}
            />
            <Route exact component={NotFound} />
          </Switch>
        </main>
      </Header>
    ) : (
      <Switch>
        <Route exact path="/login">
          <Login
            data={this.state.data}
            handleInicioSesion={this.handleInicioSesion}
          />
        </Route>
        <Redirect exact from="*" to="/login" />
      </Switch>
    );
    return <HashRouter>{component}</HashRouter>;
  }
}

export default Router;
