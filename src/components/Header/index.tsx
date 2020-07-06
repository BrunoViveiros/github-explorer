import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronLeft, FiMoon, FiSun } from 'react-icons/fi';
import { Container, ThemeSwitchContainer } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }: Props) => {
  const { title, logoImage } = useContext(ThemeContext);
  const location = useLocation();
  const path = location.pathname.replace(/\//g, '');

  return (
    <Container>
      <img src={logoImage} alt="Github Explorer" />
      {path === 'github-explorer' ? (
        <ThemeSwitchContainer>
          <FiSun />

          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#9bf6ff"
            offColor="#fcbf49"
            width={30}
            height={10}
            handleDiameter={20}
          />

          <FiMoon />
        </ThemeSwitchContainer>
      ) : (
        <Link to="/github-explorer">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      )}
    </Container>
  );
};

export default Header;
