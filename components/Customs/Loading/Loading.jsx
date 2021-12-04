import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import stocksLoadingLottie from '../../../assets/lotties/stocks-loading.json';
import Text from '../Text';
import * as S from './style';

export default function Loading({ lottieOptions, text }) {
  return (
    <S.Loading>
      <S.LoadingElement>
        <Lottie options={lottieOptions} />
        <Text center bold>{text}</Text>
      </S.LoadingElement>
    </S.Loading>
  );
}

Loading.defaultProps = {
  text: '',
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
  text: PropTypes.string,
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
