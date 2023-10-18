import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <table>
        <tr>
          <td class="nav-item active">
            <Link class="hbtn" to="./">
              Home
            </Link>{" "}
            &nbsp;
          </td>
          <td class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle hbtn"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link class="hbtn dropdown-item" to="./allcars">
                All_Cars
              </Link>{" "}
              &nbsp;
              <Link class="hbtn dropdown-item" to="./detailofcar/1">
                Detailof_Cars
              </Link>{" "}
              &nbsp;
              <Link class="hbtn dropdown-item" to="./reqcar/add">
                Request_Car
              </Link>
            </div>
          </td>
        </tr>
      </table>
    </nav>
  );
}
export default Header;
