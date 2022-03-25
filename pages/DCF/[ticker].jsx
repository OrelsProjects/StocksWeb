/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { useRouter } from 'next/router';
import DCF from '../DCF';

export default function Ticker() {
  const router = useRouter();
  const { ticker } = router.query;
  return (
    <DCF ticker={ticker} />
  );
}
