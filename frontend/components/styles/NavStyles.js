import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2.2rem;
  font-weight: 600;
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    border: 0;
    background: none;
    color: ${props => props.theme.offWhite};
    text-shadow: 0.3px 0.3px 0.6px rgba(255, 255, 255, 0.75);
    padding: 1rem 3rem;
    font-size: 2.2rem;
    cursor: pointer;
    @media screen and (max-width: 1350px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 1050px) {
      font-size: 1.8rem;
      padding: 0 2rem;
    }
    @media screen and (max-width: 950px) {
      font-size: 1.4rem;
      padding: 0 1.4rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
    @media screen and (max-width: 350px) {
      padding: 0 0.5rem;
      font-size: 1rem;
    }
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: yellow;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1350px) {
    border-top: 1.5px solid yellow;
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    border-top: none;
  }
`;

export default NavStyles;
