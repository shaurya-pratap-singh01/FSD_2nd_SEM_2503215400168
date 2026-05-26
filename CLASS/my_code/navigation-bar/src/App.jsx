function App() {

  const navStyle ={
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
    padding: "15px 25px"
  };

  const titleStyle = {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold"
  };

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    gap: "15px",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <div>
      <nav style = {navStyle}>
        <div style ={titleStyle}>My Website</div>
        <ul style={ulStyle}>
          <li><a href="#" style={linkStyle}>Home</a></li>
          <li><a href="#" style={linkStyle}>About</a></li>
          <li><a href="#" style={linkStyle}>Service</a></li>
          <li><a href="#" style={linkStyle}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;