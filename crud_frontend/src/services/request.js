export default class Request {
  constructor(domain) {
    this.domain = domain || "http://localhost:8000/api"; //dominio
  }

  requestFetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return fetch(this.domain + url, {
      headers,
      ...options,
    }).then((response) => {
      return response;
    });
  }

  async agregar(from, data) {
    return await this.requestFetch(from, {
      method: "POST",
      body: JSON.stringify(data),
    });
    // .catch(this.handleError);
  }

  async listado(from) {
    return await this.requestFetch(from, {
      method: "GET",
    }).catch(this.handleError);
  }

  async editar(from, data) {
    console.debug(data);
    return await this.requestFetch(from, {
      method: "PUT",
      body: JSON.stringify(data),
    }).catch(this.handleError);
  }

  delete(from) {
    return this.requestFetch(from, {
      method: "DELETE",
    }).catch(this.handleError);
  }

  //   query(from) {
  //     return this.requestFetch(from, {
  //       method: "GET"
  //     }).catch(this.handleError);
  //   }

  // delete(from, id) {
  //   console.debug(id);
  //   return this.requestFetch(from, {
  //     method: "DELETE",
  //     body: JSON.stringify({ _id: id })
  //   }).catch(this.handleError);
  // }

  // handleError(error) {
  //   debugger;
  //   console.error("Error en request ", error);
  //   return Promise.resolve(false);
  // }
}
