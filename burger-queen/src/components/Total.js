import React from "react";

const Total = ({ pedidos, gettingTotalCost }) => (
   <h5 className="total"><strong>TOTAL = S/. {gettingTotalCost(pedidos)}</strong></h5>
);

export default Total;
