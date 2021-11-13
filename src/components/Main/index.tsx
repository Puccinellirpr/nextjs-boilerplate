import * as S from './styles'

export type MainProps = {
  title?: string
  description?: string
}

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJs, NextJS e Styled Components'
}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem de um átomo." />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}

export default Main
