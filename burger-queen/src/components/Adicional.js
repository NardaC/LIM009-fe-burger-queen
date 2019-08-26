import React from "react";
// const transformToStandar = (obj, price) => {
//   const newObj = {
//     ...obj,
//     price
//   };
//   return newObj;
// };

const Adicional = ({
  product,
  precio,
  optionName,
  agregarPedido,
  nombre,
  imagen,
  dni,
  cantidad,
  pedidos,
  setPedidos
}) => {
  return (
    <div className="">
      <div className="" style={{ maxWidth: "100%" }}>
        {" "}
        <div className="card-body">
          <img className="card-img-top" src={imagen} alt=""></img>
        </div>
        <div className="mb-3">
          <h5 className="card-title text-center">
            {optionName} 
          </h5>
          <h5 className="card-title text-center">
            ${precio}
          </h5>
          <button
            className="btn mb-4 btn-verde center"
            onClick={() => {
              //agregarProducto(transformToStandar(product, precio));
              setPedidos(
                agregarPedido(
                  {
                    ...product,
                    price: precio,
                    name: nombre,
                    id: dni,
                    cantidad: cantidad,
                    costo: precio * cantidad
                  },
                  pedidos
                )
              );
            }}
          >
            Agregar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Adicional;
