import styled from 'styled-components';

export const StockRow = styled.div`
position:relative;
width: 100%;
min-height: 75px;
max-height: 100%;
background: #212121;
display: grid;
grid-template-columns: 1fr 2.5fr 1fr;
grid-template-rows: 1fr 1.61fr;
padding: 8px;
`;
export const StockTicker = styled.div`
grid-row: 1;
grid-column: 1;
font-size: 24px;
font-weight: bold;
color: #fdfdfd;
justify-self: start;
align-self: center;
`;
export const StockName = styled.div`
grid-row: 2;
grid-column: 1;
color: #a1a1a1c9;
font-size: 16px;
justify-self: start;
align-self: center;
`;
export const StockPrice = styled.div`
grid-row: 1/3;
grid-column: 3;
justify-self: end;
align-self: center;
font-size: 24px;
font-weight: bold;
color: #fdfdfd;
`;

export const OptionsArrow = styled.div`
height:5px;
width:5px;
background: white;
position:absolute;
top:0;
right:0;
margin: 8px;
`;

export const StockTickerLoading = styled.div``;
export const StockNameLoading = styled.div``;
export const StockPriceLoading = styled.div``;
