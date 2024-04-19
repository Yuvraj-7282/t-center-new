import React, { useEffect, useState } from "react";
import MyContext from "./myContext";

import { db } from "../Firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function myState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getProductData, setProductData] = useState([]);
  const getProducts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "products"), orderBy("time"));
      const data = onSnapshot(q, (querySnapShot) => {
        const productArr = [];
        querySnapShot.forEach((doc) => {
          productArr.push({ ...doc.data(), id: doc.id });
        });
        setProductData(productArr);
        setLoading(false);
      });
      return () => data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MyContext.Provider value={{ loading, setLoading, getProductData }}>
      {children}
    </MyContext.Provider>
  );
}

export default myState;
