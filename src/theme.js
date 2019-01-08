export const colors = {
  light: {
    background: 'whitesmoke',
    color: 'black',
    item: {
      background: 'white',
      shadow: '2px 2px 4px #696969',
    },
    star: {
      fill: 'yellow',
      stroke: 'black',
    },
  },
  dark: {
    background: '#2B2B2B',
    color: '#BBBBBB',
    item: {
      background: '#393A3C',
      shadow: '-1px -1px 2px #696969',
    },
    star: {
      fill: 'darkorange',
      stroke: '#2B2B2B',
    },
  },
};

export const layouts = {
  list: {
    list: 'max-width: 800px;',
    item: `
    margin-top: 32px;
    padding: 16px;
    grid-template-columns: 64px 1fr auto;
    grid-template-rows: auto 16px auto 1fr;
    grid-column-gap: 16px;
    grid-template-areas: 
      "display-name display-name price"
      ". . ."
      "thumbnail description description"
      "thumbnail rating rating";
    `,
    thumbnail: 'height: 64px; align-self: center;',
    rating: 'align-self: start;',
  },
  thumbnails: {
    list: 'display: flex; flex-wrap: wrap; max-width: 912px; align-items: center; justify-content: center;',
    item: `
    margin: 8px;
    padding: 16px;
    width: 256px;
    height: 256px;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto 1fr auto auto;
    grid-template-areas: 
      "display-name"
      "price"
      "thumbnail"
      "description"
      "rating";
    `,
    thumbnail: 'justify-self: center;',
    rating: '',
  },
};
