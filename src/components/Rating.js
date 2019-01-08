import React from 'react';
import styled from 'styled-components';
import { branch, compose, renderNothing } from 'recompose';
import { withTweekKeys } from 'react-tweek';
import { withColors, withLayouts } from '../ThemeProvider';

const Container = withLayouts(styled.div`
  grid-area: rating;
  ${({layouts}) => layouts.rating}
`);

const getStarFill = (type, fill) => {
  switch (type) {
    case 'full':
      return fill;
    case 'half':
      return 'url(#grad1)';
    default:
       return '#BBBBBB';
  }
};

const StarContainer = withColors(styled.svg`
  stroke: ${({colors}) => colors.star.stroke};
  stroke-width: 3px;
  height: 1em;
  margin: 0 1px;
  color: ${({colors}) => colors.star.fill};
  fill: ${({colors, type}) => getStarFill(type, colors.star.fill)};
`);

const Span = styled.span`
  vertical-align: text-bottom;
  margin-left: 5px;
`;

const Star = props => (
  <StarContainer {...props} viewBox="0 0 50 48">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#BBBBBB', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g transform="matrix(0.5, 0, 0, 0.5, -27, -310)">
      <path d="M103,620l16.5,30.2l33.5,6.5l-23.3,25.1l4.2,34.2L103,701.4L72.1,716l4.2-34.2L53,656.7l33.5-6.5L103,620" />
    </g>
  </StarContainer>
);

function renderStars(rating) {
  const result = new Array(5);
  for (let i = 0; i < 5; i++) {
    let type;
    if (rating > 0.75) {
      type = 'full';
    } else if (rating > 0.25) {
      type = 'half';
    } else {
      type = 'empty';
    }
    result[i] = <Star key={i} type={type} />;
    rating -= 1;
  }
  return result;
}

const Rating = ({ rating }) => (
  <Container>
    {renderStars(rating)}
    <Span>{rating}</Span>
  </Container>
);

export default compose(withTweekKeys('shop/rating/is_enabled'), branch(props => !props.isEnabled, renderNothing))(
  Rating,
);
