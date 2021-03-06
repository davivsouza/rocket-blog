import ArrowRight from "/assets/arrow-right.svg";
import {
  Container,
  Slogan,
  Line,
  Posts,
  MainPosts,
  TitlePost,
  MainPost,
  DatePost,
  LatestPosts,
  PostsContainer,
  PostDescription,
  PostTemplateContainer,
  RecomendedPosts,
} from "./style";
import { Img } from "../../components/Navbar/style";
import { Navbar } from "../../components/Navbar";
export function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Slogan>
          <div>
            <strong>
              Veja o guia definitivo para conquistar seus objetivos como DEV em
              2022
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique placerat hac.
            </p>
            <a href="">
              Veja mais <img src={ArrowRight} alt="Veja mais" />
            </a>
          </div>
          <Img src={"/assets/featured-image.png"} width={'100%'} height={"100%"} className="featuredImg"/>
        </Slogan>
      </Container>
      <Line />
      <PostsContainer>
        <Posts>
          <MainPosts>
            <MainPost>
              <Img src={"/assets/post-1.png"} alt="Post 1" width={'100%'} />
              <DatePost>Janeiro 04, 2022</DatePost>
              <TitlePost href="#">Começando no ReactJS em 2022</TitlePost>
              <PostDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </PostDescription>
            </MainPost>
            <LatestPosts>
              <PostTemplateContainer>
                <DatePost>Janeiro 04, 2022</DatePost>
                <TitlePost href="#">
                  Conheça as principais técnicas para conseguir uma vaga
                  internacional em programação
                </TitlePost>
                <PostDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique.
                </PostDescription>
              </PostTemplateContainer>
              <PostTemplateContainer>
                <DatePost>Janeiro 04, 2022</DatePost>
                <TitlePost href="#">
                  Veja a evolução do Front-end na prática
                </TitlePost>
                <PostDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque.
                </PostDescription>
              </PostTemplateContainer>
            </LatestPosts>
          </MainPosts>
        </Posts>
        <RecomendedPosts>
          <PostTemplateContainer>
            <Img src={"/assets/post-2.png"} width={'100%'} height={"100%"} />
            <DatePost>Janeiro 04, 2022</DatePost>
            <TitlePost>10 dicas para conseguir a vaga desejada</TitlePost>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.{" "}
            </PostDescription>
          </PostTemplateContainer>
          <PostTemplateContainer>
            <Img src={"/assets/post-3.png"} width={'100%'} height={"100%"} />
            <DatePost>Janeiro 04, 2022</DatePost>
            <TitlePost>Deixe seu código mais semântico com essas dicas</TitlePost>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.{" "}
            </PostDescription>
          </PostTemplateContainer>
          <PostTemplateContainer>
            <Img src={"/assets/post-4.png"} width={'100%'} height={"100%"} />
            <DatePost>Janeiro 04, 2022</DatePost>
            <TitlePost>Use essas dicas nas suas aplicações mobile</TitlePost>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique.{" "}
            </PostDescription>
          </PostTemplateContainer>
        </RecomendedPosts>
      </PostsContainer>
    </>
  );
}
