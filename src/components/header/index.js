import {
    Container,
    Group,
    Background,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    Feature,
    Logo,
  } from './styles/header';
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <Logo {...restProps} />
      </ReachRouterLink>
    );
  };

  Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
  };