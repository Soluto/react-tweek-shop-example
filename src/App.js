import React from 'react';
import styled from 'styled-components';
import Product from './components/Product';
import items from './items.json';
import {withColors, withLayouts} from './ThemeProvider';

const Shop = withColors(styled.div`
  padding: 32px 64px;
  background-color: ${({colors}) => colors.background};
  color: ${({colors}) => colors.color};
`);

const Header = styled.div`
  text-transform: uppercase;
  font-size: xx-large;
  text-align: center;
`;

const ItemsList = withLayouts(styled.div`
  margin: auto;
  ${({layouts}) => layouts.list}
`);

const App = () => (
  <Shop>
    <Header>Tweek Shop</Header>
    <ItemsList>
      {items.map(({id, ...props}) => (
        <Product key={id} {...props} />
      ))}
    </ItemsList>
  </Shop>
);

export default App;
