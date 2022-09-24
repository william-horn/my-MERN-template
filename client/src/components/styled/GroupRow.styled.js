
import styled from 'styled-components';

const GroupRow = styled.div`
  display: flex;
  ${props => `
    gap: ${props.gap};
    justify-content: ${props.justifyContent};
  `}
`

GroupRow.defaultProps = { className: 'group-row' }

export default GroupRow;