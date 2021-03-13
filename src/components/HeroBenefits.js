import styled from '@emotion/styled';
import { media } from '../tokens';

export default styled('div')`
  display: none;
  margin: 0 0 0.5rem;
  max-width: 600px;
  text-align: left;

  @media ${media.large} {
    @supports (display: grid) {
      display: block;
    }
  }
`;
