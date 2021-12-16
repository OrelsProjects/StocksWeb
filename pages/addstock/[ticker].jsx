import { useRouter } from 'next/router';
import React from 'react';
import AddStockComponent from '../../containers/Portfolio/AddStock';
import style from '../../styles/AddStock.module.css';

export default function AddStock() {
  const router = useRouter();
  const { ticker } = router.query;
  return (
    <div className={style.container}>
      <AddStockComponent ticker={ticker} />
    </div>
  );
}
