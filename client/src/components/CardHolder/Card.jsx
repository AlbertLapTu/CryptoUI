import React from 'react';
import bitcoinLogo from '../../../../Assets/Icons/Crypto/Bitcoin.png';
import downArrow from '../../../../Assets/point-down-red.svg';
import * as styled from './Styles/CardStyles.jsx';

/**
 *
 * TODO: Figure out how to style a horizontal line in CSS.
 * Perhaps see if you can try using a chart library for this
 * This should be expecting props that takes in the logo of the coin, in addition to the delta
 */
const Card = () => {
  return (
    <React.Fragment>
      <styled.CardStyle1>
        <styled.CoinInfoContainer>
          <styled.IconStyle src={bitcoinLogo} />
          <styled.TickerStyle>BTC</styled.TickerStyle>
          <styled.CoinNameStyle>Bitcoin</styled.CoinNameStyle>
          <styled.CurrencyStyle>$3871.21</styled.CurrencyStyle>
          <styled.DeltaStyle>
            -4.66%
            <styled.IconStyle src={downArrow} />
          </styled.DeltaStyle>
        </styled.CoinInfoContainer>
        <styled.LineContainer />
      </styled.CardStyle1>
      <styled.CardStyle2>
        <styled.CoinInfoContainer>
          <styled.IconStyle src={bitcoinLogo} />
          <styled.TickerStyle>BTC</styled.TickerStyle>
          <styled.CoinNameStyle>Bitcoin</styled.CoinNameStyle>
          <styled.CurrencyStyle>$3871.21</styled.CurrencyStyle>
          <styled.DeltaStyle>
            -4.66%
            <styled.IconStyle src={downArrow} />
          </styled.DeltaStyle>
        </styled.CoinInfoContainer>
        <styled.LineContainer />
      </styled.CardStyle2>
      <styled.CardStyle3>
        <styled.CoinInfoContainer>
          <styled.IconStyle src={bitcoinLogo} />
          <styled.TickerStyle>BTC</styled.TickerStyle>
          <styled.CoinNameStyle>Bitcoin</styled.CoinNameStyle>
          <styled.CurrencyStyle>$3871.21</styled.CurrencyStyle>
          <styled.DeltaStyle>
            -4.66%
            <styled.IconStyle src={downArrow} />
          </styled.DeltaStyle>
        </styled.CoinInfoContainer>
        <styled.LineContainer />
      </styled.CardStyle3>
      <styled.CardStyle4>
        <styled.CoinInfoContainer>
          <styled.IconStyle src={bitcoinLogo} />
          <styled.TickerStyle>BTC</styled.TickerStyle>
          <styled.CoinNameStyle>Bitcoin</styled.CoinNameStyle>
          <styled.CurrencyStyle>$3871.21</styled.CurrencyStyle>
          <styled.DeltaStyle>
            -4.66%
            <styled.IconStyle src={downArrow} />
          </styled.DeltaStyle>
        </styled.CoinInfoContainer>
        <styled.LineContainer />
      </styled.CardStyle4>
    </React.Fragment>
  );
};

export default Card;
