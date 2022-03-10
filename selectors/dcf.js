/* eslint-disable */
import { useSelector } from 'react-redux';

const DCF = {
    assumptions: useSelector((reducers) => reducers.dcf.assumptions),
    wacc: useSelector((reducers) => reducers.dcf.wacc),
    discountedFreeCashflow: useSelector((reducers) => reducers.dcf.discountedFreeCashflow),
    stock: useSelector((reducers) => reducers.dcf.stock),
}

export default DCF;
