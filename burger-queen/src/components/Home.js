import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrap">
      
        <Link to="/cocinero" className="mt-5">
          <img src="https://i.postimg.cc/1Xqk1ttr/cocinero.png" />
        </Link>
     
        <Link to="/mesero" className="mt-5">
          <img src="https://i.postimg.cc/vBjJK9Qm/mesero.png" />
        </Link>
      
    </div>
  );
};
export default Home;
