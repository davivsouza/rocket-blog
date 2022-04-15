import {
  Header,
  Nav,
  ListContainer,
  ListItem,
  Search,
  Img,
  Input,
  SearchContainer,
} from "./style";
import Logo from "../../assets/logo.svg";
import SearchImg from "../../assets/search.svg";

export function Navbar() {
  return (
    <Header>
      <Nav>
        <Img src={Logo} alt="Logo Rocket Blog" />
        <ListContainer>
          <ListItem>Home</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Categorias</ListItem>
          <ListItem>Contato</ListItem>
        </ListContainer>
        <SearchContainer>
          <Input type="text" placeholder="Buscar" name="search" />
          <Search>
            <Img src={SearchImg} alt="Buscar algo"  width={30}/>
          </Search>
        </SearchContainer>
      </Nav>
    </Header>
  );
}
