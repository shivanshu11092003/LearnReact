import Axios from "../axios/api.js";

import Eachcard from "./Eachcard.jsx";
import { useState,useEffect } from "react";

const Card = () => {
  const [productArrayList, setProductArrayList] = useState([]);

  useEffect(()=>{

    Axios().then((res) => {

        console.log(res.data.products)
    
        setProductArrayList([
            ...productArrayList, ...res.data.products
        ]);
        console.log(productArrayList)
    
    
      });

  },[])
  

  

  return (
    <>
      <h1>List</h1>
      <div className="flex flex-col">
        {/* {productArrayList.map(ele => 
           <Eachcard key={ele.id} product={ele} />
        )} */}
      </div>
    </>
  );
};

export default Card;
