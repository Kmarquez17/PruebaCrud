import models from "../models";

const agregarProducto = async (req, res, next) => {
  try {
    const data = await models.Producto.create(req.body);
    console.log(data)
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un Error"
    });
  }
};

const listarProducto = async (req, res, next) => {
  try {
    let _id = req.params.id;

    const data = await models.Producto.find({ _id: _id });

    res.status(200).json(data);
  } catch (e) {
    if (e.kind === "ObjectId") {
      res.status(404).send({
         message: "Producto no existe" 
      });
    } else {
      res.status(500).send({
        message: "Ocurrio un Error"
      });
    }
  }
};

const listarProductos = async (req, res, next) => {
  try {
    const data = await models.Producto.find({});

    res.status(200).json({
      productos: data
    });
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un Error"
    });
  }
};

const actualizarProducto = async (req, res, next) => {
  //Objeto nuevo a actualizar
  let producto = req.body;  
  try {
    const data = await models.Producto.findByIdAndUpdate(
      { _id: req.body._id },
      producto
    );

    if (!data) {
      res.status(404).json({ message: "Producto no existe" });
    } else {
      res.status(200).json(data);
    }
  } catch (e) {
    res.status(500).send({
      message: "Ocurrio un Error"
    });
  }
};

const eliminarProducto = async (req, res, next) => {
  let _id = req.params.id;
  try {
    const data = await models.Producto.findByIdAndDelete({
      _id: _id
    });
    res.status(200).json(data);
  } catch (e) {
    if (e.kind === "ObjectId") {
      res.status(404).send({
        message: "Producto no existe..!"
      });
    } else {
      res.status(500).send({
        message: "Ocurrio un Error"
      });
    }
  }
};

export default {
  agregarProducto,
  listarProducto,
  listarProductos,
  actualizarProducto,
  eliminarProducto
};
