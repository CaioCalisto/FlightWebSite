import "./Header.css";

function Header() {
  return (
    <>
      <section className="header-section">
        <figure className="logotipo">
          <img src="src/assets/ACME-logo.png" alt="Logotipo" width="150" height="150" />
        </figure>
        {/* > 1280px */}
        <figure className="earth-icon">
          <img src="src/assets/earth.png" alt="Languages" />
        </figure>
        {/* all screen sizes */}
        <figure className="user-icon">
          <img src="src/assets/user.png" alt="User" />
        </figure>
      </section>
    </>
  );
}

export default Header;
