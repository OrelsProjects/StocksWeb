import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import stocksLoadingLottie from '../../../assets/lotties/stocks-loading.json';
import * as S from './style';

export default function Loading({ lottieOptions }) {
  return (
    <S.Loading>
      <S.LoadingElement>
        <Lottie options={lottieOptions} />
      </S.LoadingElement>
    </S.Loading>
  );
}

Loading.defaultProps = {
  lottieOptions: {
    loop: true,
    autoplay: true,
    animationData: stocksLoadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
};

Loading.propTypes = {
  lottieOptions: PropTypes.shape({
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    animationData: PropTypes.any,
    rendererSettings: PropTypes.shape({
      preserveAspectRatio: PropTypes.string,
    }),
  }),
};
