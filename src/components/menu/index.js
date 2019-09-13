import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import LogoImage from './logo.jpg';

const Logo = styled.img`
  width : 120px;
`;

export default () => {
    return (
        <Menu size = "massive">
        <Menu.Item
          name='editorials'
        >
          <Logo src = {LogoImage} alt = "Logo" />
        </Menu.Item>
        </Menu>
    )
}