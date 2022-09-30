
import styled from 'styled-components';

const RowGroup = styled.div`
  position: relative;
  display: flex;
  ${({
    gap,
    marginRight='0',
    marginLeft='0',
    paddingLeft='0',
    paddingRight='0',
    justifyContent='center'
  }) => `
    gap: ${gap};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    justify-content: ${justifyContent};
  `}
`

RowGroup.defaultProps = { className: 'row-group' }

export default RowGroup;