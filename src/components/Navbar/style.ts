import styled from "styled-components";

export const Header = styled.header`
  width: 80%;
  margin: auto;
  padding: 2.5rem 2.8rem;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

export const Nav = styled.nav`
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: clamp(1.25rem, 5vw, 9.375rem);
  @media (max-width: 540px) {
    flex-direction: column;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;

    @media (max-width: 540px) {
      gap: 10px;
    }
    
    li {
      font-family: "Roboto", sans-serif;

      padding-left: 0.2rem;
      :hover {
        border-left: 2px solid #4fff4b;
      }
    }
  }
`;
export const Link = styled.a`
  font-size: clamp(0.85rem, 1rem, 1.112rem);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0px 4px 4px 0px;
  background: #9e6dc2;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 30px;

  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 5px 30px;
  width: 60%;
  height: 40px;

  border-radius: 4px 0 0 4px;
  background: #170027;
  border: none;
  color: #fff;

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #fbf6ff;
  }
`;
