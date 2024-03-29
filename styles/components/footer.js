import styled from 'styled-components'

import { flexContainer, flexItem } from '../tools/mixins'
import { gold, gray } from '../tools/colors'

export const Footer = styled.footer`
  ${flexContainer('flex-start', 'center', 'center')}
  width: 100%;
  padding: 40px 100px;
  background-color: #fff;

  > a {
    width: 15px;
    margin-right: 40px;

    > img {
      width: 100%;
      height: auto;
    }
  }

  &.contact {
    padding-left: 0;
  }

  @media (max-width: 880px) {
    justify-content: center;
    padding: 40px 20px;
    padding-bottom: 100px;

    > a {
      margin: 0 20px;
    }

    &.contact {
      padding-left: 40px;
    }
  }

  > .next {
    ${flexContainer('flex-end', 'center', 'center')}
    ${flexItem('600px', '1')}

    > h3 {
      color: ${gold};
      padding-right: 20px;
    }

    h3, p {
      font-size: 15px;
      font-weight: 700;
      line-height: initial;
    }

    @media (max-width: 800px) {
      justify-content: flex-start;

      > h3 {
        width: 100%;
        padding-top: 40px;
      }
    }
  }

  ${props => props.tab ? `background-color: ${gray};` : ''}
`
