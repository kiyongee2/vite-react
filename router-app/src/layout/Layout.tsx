import { Link } from "react-router-dom";

const Layout = () => {
  return(
    <div style={{padding: "20px"}}>
      <h2>React Router + TypeScript</h2>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <hr />
    </div>
  )
}

export default Layout;