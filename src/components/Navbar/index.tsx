import {
  Header,
  Nav,
  Search,
  Img,
  Input,
  SearchContainer,
  Link,
} from "./style";
import Logo from "../../assets/logo.svg";
import SearchImg from "../../assets/search.svg";

export function Navbar() {
  return (
    <Header>
      <Nav>
        <Link href="/">
          <Img src={Logo} alt="Logo Rocket Blog" />
        </Link>

        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Categorias</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>
        <SearchContainer>
          <Input type="text" placeholder="Buscar" name="search" />
          <Search>
            <Img src={SearchImg} alt="Buscar algo" width={30} />
          </Search>
        </SearchContainer>
      </Nav>
    </Header>
  );
}
