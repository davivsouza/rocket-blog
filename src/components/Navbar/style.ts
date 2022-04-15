import styled from 'styled-components'

export const Header = styled.header`

  max-width: 1100px;
  padding: 2.5rem 2.8rem ;
  margin: auto;
  display: flex;
  justify-content: center ;

`

export const Img = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props=> props.height || 'auto'} ;
`

export const Nav = styled.nav`
  padding: 0.8rem 1.2rem ;
  display: flex;
  align-items: center;
  gap: 100px;
`

export const ListContainer = styled.ul`
  display: flex;
  align-items:center;
  gap: 20px ;
  list-style-type:none ;
`

export const ListItem = styled.li`
  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size:1.112rem ;

`

export const SearchContainer = styled.div`


  display:flex ;
  align-items:center ;
  justify-content:center ;
  


`

export const Search = styled.div`
  width: 40px;
  height:40px ;
  border-radius:0px 4px 4px 0px ;
  background: #9E6DC2;

  display:flex ;
  align-items:center ;
  justify-content:center ;
  
  padding: 5px 30px ;

`

export const Input = styled.input`
  padding: 5px 30px ;
  width: 60%;
  height: 40px;
  
  border-radius: 4px 0 0 4px;
  background:#170027 ;
  border: none;
  color: #fff ;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  :focus{
    outline: none;
  }

  ::placeholder{
    color: #FBF6FF;
    
  }

`