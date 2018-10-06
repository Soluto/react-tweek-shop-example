import React from 'react';
import glamorous from 'glamorous';
import Product from './components/Product';
import items from './items.json';
import { withTweekKeys } from 'react-tweek';
import { compose } from 'recompose';

const Shop = glamorous.div(
  {
    padding: '32px 64px',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.background,
    color: theme.colors.color,
  }),
);

const Header = glamorous.div({
  textTransform: 'uppercase',
  fontSize: 'xx-large',
  textAlign: 'center',
});

const ItemsList = glamorous.div(
  {
    margin: 'auto',
  },
  ({ theme: { layouts } }) => layouts.list,
);


const App = ({clickEnabled, clickMessage}) => {

  const onClick = ()=> alert(clickMessage);

  return (
  <Shop>
    <Header>Tweek Shop</Header>
    <ItemsList>{items.map(({ id, ...props }) => <Product key={id} {...props} onClick={clickEnabled && onClick} />)}</ItemsList>
  </Shop>
)
  };

export default compose(
  withTweekKeys('shop/view/click_enabled'),
  withTweekKeys('shop/view/click_message'),
  )(App);
