import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import {withLayouts, withTheme} from '../ThemeProvider';

const Container = withTheme(styled.div`
  display: grid;
  background-color: ${({colors}) => colors.item.background};
  box-shadow: ${({colors}) => colors.item.shadow};
  ${({layouts}) => layouts.item}
`);

const DisplayName = withLayouts(styled.div`
  text-transform: uppercase;
  font-size: x-large;
  grid-area: display-name;
  ${({layouts}) => layouts.displayName}
`);

const Description = withLayouts(styled.div`
  grid-area: description;
  ${({layouts}) => layouts.description}
`);

const Price = styled.div`
  grid-area: price;
  &::before {
    content: '$';
  }
`;

const Thumbnail = withLayouts(styled.img`
  grid-area: thumbnail;
  max-width: 100%;
  max-height: 100%;
  ${({layouts}) => layouts.thumbnail}
`);

const Product = ({displayName, image, description, price, rating}) => (
  <Container>
    <DisplayName>{displayName}</DisplayName>
    <Description>{description}</Description>
    <Price>{price}</Price>
    <Rating rating={rating} />
    <Thumbnail
      src={`https://raw.githubusercontent.com/Soluto/react-tweek-shop-example/master/public/${image}`}
      alt={displayName}
    />
  </Container>
);

export default Product;
