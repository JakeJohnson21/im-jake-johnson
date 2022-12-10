function Header({ onColorMode }) {
  return (
    <Header className="header">
      <button className="theme__select" onClick={onColorMode}>
        X
      </button>
    </Header>
  );
}

export default Header;
