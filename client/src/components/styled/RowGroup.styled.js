
import styled from 'styled-components';

const RowGroup = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  ${({
    gap,
    marginRight='0',
    marginLeft='0',
    marginTop='0',
    marginBottom='0',
    paddingLeft='initial',
    paddingRight='initial',
    paddingTop='initial',
    paddingBottom='initial',
    padding='initial',
    margin='initial',
    justifyContent='center'
  }) => `
    gap: ${gap};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding: ${padding};
    margin: ${margin};
    justify-content: ${justifyContent};
  `}
`

RowGroup.defaultProps = { className: 'row-group' }

export default RowGroup;