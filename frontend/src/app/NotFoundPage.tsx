import {
  Error,
  ErrorCode,
  ErrorMessage,
  NotFoundPageContainer,
  ReturnButton,
} from "./NotFoundPage.styles";

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <Error>
        <ErrorMessage>Страница не найдена</ErrorMessage>
        <ErrorCode>404</ErrorCode>
      </Error>
      <ReturnButton to="/">Вернуться на главную</ReturnButton>
    </NotFoundPageContainer>
  );
}

export default NotFoundPage;
