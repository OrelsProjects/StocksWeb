import React from 'react';
import AddStockComponent from '../containers/Portfolio/AddStock';
import style from '../styles/AddStock.module.css';

export default function AddStock() {
  return (
    <div className={style.container}>
      <AddStockComponent />
    </div>
  );
}
