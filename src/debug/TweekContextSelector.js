import React, {Component} from 'react';
import TweekContext from '../TweekContext';

export default class TweekContextSelector extends Component {
  render() {
    return (
      <TweekContext.Consumer>
        {repo => (
          <div style={{backgroundColor: 'rgb(0, 174, 239)', borderBottom: '3px inset #CCCCCC', padding: 10}}>
            <div style={{maxWidth: 600, margin: '0 auto', fontFamily: 'calibri; sans-serif', color: '#696969'}}>
              <div style={{color: 'white', textAlign: 'center', fontSize: 16, margin: 4}}>Render app as user:</div>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <input
                  placeholder="User Id"
                  type="text"
                  style={{fontSize: 24, minWidth:50}}
                  onChange={e => {
                    repo.updateContext(ctx => ({user: {...ctx.user, id: e.target.value}}));
                    this.forceUpdate();
                  }}
                  value={repo && repo._context.user.id}
                />
                <select
                  onChange={e => {
                    repo.updateContext(ctx => ({user: {...ctx.user, planet: e.target.value || undefined}}));
                    this.forceUpdate();
                  }}
                  style={{fontSize: 24}}
                  value={repo && repo._context.user.planet}
                >
                  <option value="" selected>
                    Select a planet
                  </option>
                  <option>Mercury</option>
                  <option>Venus</option>
                  <option>Earth</option>
                  <option>Mars</option>
                  <option>Jupiter</option>
                  <option>Saturn</option>
                  <option>Uranus</option>
                  <option>Neptune</option>
                </select>
                <select
                  onChange={e => {
                    repo.updateContext(ctx => ({ user: { ...ctx.user, class: e.target.value || undefined}}));
                    this.forceUpdate();
                  }}
                  style={{fontSize: 24}}
                  value={repo && repo._context.user.class}
                >
                  <option value="" disabled selected>
                    Select class
                  </option>
                  <option value="guest">Guest</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </TweekContext.Consumer>
    );
  }
}
