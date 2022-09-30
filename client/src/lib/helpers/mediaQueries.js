
const colSizes = [
  { name: 'col_12', size: '1920px' },
  { name: 'col_11', size: '1760px' },
  { name: 'col_10', size: '1600px' },
  { name: 'col_9', size: '1440px' },
  { name: 'col_8', size: '1280px' },
  { name: 'col_7', size: '1120px' },
  { name: 'col_6', size: '960px' },
  { name: 'col_5', size: '800px' },
  { name: 'col_4', size: '640px' },
  { name: 'col_3', size: '480px' },
  { name: 'col_2', size: '320px' },
  { name: 'col_1', size: '160px' }
]

const getMediaQueryString = (props, index) => `
  @media screen and (max-width: ${colSizes[index].size}) {
    ${props}
  }
`

export const getMediaQuery = (props) => {
  let media = '';

  for (let i = 0; i < colSizes.length; i++) {
    const col = colSizes[i];
    if (props[col.name]) media += getMediaQueryString(props[col.name].replaceAll(';', ' !important;'), i);
  }

  return media;
}

