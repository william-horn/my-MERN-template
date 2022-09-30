
import styled from 'styled-components';
import { getMediaQuery } from '../../lib/helpers/mediaQueries';

const PageContent = styled.div`
  margin-right: ${({marginRight='0'}) => marginRight};
  margin-left: ${({marginLeft='0'}) => marginLeft};

  width: 100%;
  height: 100%;

  ${({
    marginRight='0',
    marginLeft='0',
    marginTop='0',
    marginBottom='0',
    paddingTop='0',
    paddingBottom='0',
    paddingLeft='0',
    paddingRight='0',
  }) => `
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
  `}

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