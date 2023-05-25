import React, { useState } from 'react';
import classes from "./Buton.module.css"

const Buton = () => {
  const [oySayisi, setOySayisi] = useState(0);

  const butonHandler = () => {
    setOySayisi(oySayisi + 1);
  };

  return (
    <div>
      <button className={classes["oy-buton"]} onClick={butonHandler}>
        Oy Ver
      </button>
      <p className={classes["oy-sayisi"]}>Oy Sayısı: {oySayisi}</p>
    </div>
  );
  
};

export default Buton;


