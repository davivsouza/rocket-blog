import styled from "styled-components";

export const Container = styled.main`
  max-width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  padding: 2.5rem 2.8rem;
`;

export const Slogan = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;

  strong {
    font-family: "Poppins", sans-serif;
    font-size: clamp(2rem, 2vw, 2.25rem);
    color: #9e6dc2;
    margin-bottom: 1rem;
    text-align: left;
  }

  p {
    color: #fbf6ff;
    font-size: clamp(1rem, 1vw, 1.112rem);
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.5rem;
  }

  a {
    font-family: "Poppins", sans-serif;
    font-size: 1.112rem;
    font-weight: 600;
    color: #9e6dc2;
    width: max-content;

    display: flex;
    gap: 10px;
    align-items: center;

    text-decoration: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  margin: 20px auto 0;
  height: 6px;
  background: #4fff4b;
`;

export const PostsContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbf6ff;

  padding-top: 2.5rem;
`;

export const Posts = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2.5rem;
  `;

export const MainPosts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 50px;
`;

export const MainPost = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const LatestPosts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const PostTemplateContainer = styled(MainPost)`
    width: 100%;
`

export const DatePost = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

export const TitlePost = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  
  text-align: left;
  text-decoration: none;

  color: #290742;

  transition: filter 200ms ease;

  :hover{
    filter: brightness(2);
  }
`;

export const PostDescription = styled.p`
  color: #000;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1.5rem;
`;

export const RecomendedPosts = styled.section`
  max-width: 80%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
` 
