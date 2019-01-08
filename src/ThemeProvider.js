import React from 'react';
import { compose } from 'recompose';
import { withTweekKeys } from 'react-tweek';
import {colors, layouts} from './theme';
import ensureProp from './utils/ensureProp';

export const ColorsContext = React.createContext(colors.light);
ColorsContext.displayName = 'ColorsContext';

export const LayoutContext = React.createContext(layouts.list);
LayoutContext.displayName = 'LayoutContext';

export const withColors = (Component) => (props) => (
  <ColorsContext.Consumer>
    {(colors) => (<Component {...props} colors={colors}/>)}
  </ColorsContext.Consumer>
);

export const withLayouts = (Component) => (props) => (
  <LayoutContext.Consumer>
    {(layouts) => <Component {...props} layouts={layouts}/>}
  </LayoutContext.Consumer>
);

export const withTheme = (Component) => (props) => (
  <ColorsContext.Consumer>
    {(colors) => (
      <LayoutContext.Consumer>
        {(layouts) => <Component {...props} colors={colors} layouts={layouts}/>}
      </LayoutContext.Consumer>
    )}
  </ColorsContext.Consumer>
);

const ThemeProvider = ({children, theme, layout}) => (
  <ColorsContext.Provider value={colors[theme]}>
    <LayoutContext.Provider value={layouts[layout]}>
    {children}
    </LayoutContext.Provider>
  </ColorsContext.Provider>
);

export default compose(
  withTweekKeys('shop/view/_'),
  ensureProp('theme', Object.keys(colors)),
  ensureProp('layout', Object.keys(layouts)),
)(ThemeProvider);
