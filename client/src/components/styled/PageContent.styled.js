
import styled from 'styled-components';

const PageContent = styled.div`
  margin-right: ${({marginRight}) => marginRight || "20%"};
  margin-left: ${({marginLeft}) => marginLeft || "20%"};

  @media screen and (max-width: 1600px) {
    margin-right: 10%;
    margin-left: 10%;
  }

  @media screen and (max-width: 1300px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

PageContent.defaultProps = { className: 'page-content' };

export default PageContent;