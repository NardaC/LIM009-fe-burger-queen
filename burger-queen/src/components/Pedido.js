import React from "react";
import Cliente from "./Cliente";
import Producto from "./Producto";
import Total from "./Total";

const Pedido = ({
  pedidos,
  eliminarProducto,
  agregarPedido,
  disminuirCntd,
  clientName,
  agregarNombreDelCliente,
  agregarOrdenFirebase,
  agregarNumeroDeMesa,
  numeroDeMesa,
  gettingTotalCost,
  setPedidos,
  setHoras,
  setMinutes,
  setSegundos,
  setClientName,
  setTableNumber,
  setPedidosId
}) => {
  return (
    <form
    // // onSubmit={(e) => {
    // //   e.preventDefault();
    // //   let numberTable = parseInt(numeroDeMesa);
    // //   console.log('ESTO ES PEDIDOS ANTES DE SUBIRSE',pedidos);
    // //   agregarOrdenFirebase(pedidos, clientName, numberTable);
    // }}
    >
      <div className="text-black" style={{ maxWidth: "100%" }}>
        <div className="card-header card-header-nav">
          <Cliente
            clientName={clientName}
            agregarNombreDelCliente={agregarNombreDelCliente}
            agregarNumeroDeMesa={agregarNumeroDeMesa}
            numeroDeMesa={numeroDeMesa}
          />
        </div>
        <div className="card-body">
          <div>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col"> Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((p) => (
                  <Producto
                    key={p.id}
                    producto={p}
                    eliminarProducto={eliminarProducto}
                    agregarPedido={agregarPedido}
                    disminuirCntd={disminuirCntd}
                    pedidos={pedidos}
                    setPedidos={setPedidos}
                  />
                ))}
              </tbody>
            </table>
            {pedidos.length === 0 ? (
                  ""
                ) : (
                  <Total
                    pedidos={pedidos}
                    gettingTotalCost={gettingTotalCost}
                    clientName={clientName}
                  />
                )}
            {pedidos.length >= 1 && clientName !== "" && numeroDeMesa !== "" ? (
              <button
                className="btn btn-success"
                onClick={() => {
                  let numberTable = parseInt(numeroDeMesa);
                  agregarOrdenFirebase(
                    pedidos,
                    clientName,
                    numberTable,
                    setHoras,
                    setMinutes,
                    setSegundos,
                    setClientName,
                    setTableNumber,
                    setPedidosId,
                    setPedidos
                  );
                }}
              >
                Enviar a cocina
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default Pedido;
