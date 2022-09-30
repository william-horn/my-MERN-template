
import styled from 'styled-components';
import { getMediaQuery } from '../../lib/helpers/mediaQueries';

const PageContent = styled.div`
  margin-right: ${({marginRight}) => marginRight || "20%"};
  margin-left: ${({marginLeft}) => marginLeft || "20%"};

  /* @media screen and (max-width: 1600px) {
    margin-right: 10%;
    margin-left: 10%;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-left: 0;
  } */

  ${getMediaQuery}
`;

PageContent.defaultProps = { className: 'page-content' };

export default PageContent;