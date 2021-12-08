import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../redux/mealSlise";
import { State } from "../redux/types";
import { purple } from "../styles/colors";
import { Container } from "../styles/patterns";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const localStorageKey = "mealState";

  // Загрузка данных из локального хранилища в стейт
  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);

    if (savedState) {
      try {
        dispatch(loadState(JSON.parse(savedState).meals));
      } catch {}
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Загрузка данных из стейта в локальное хранилище
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${Container};

  max-width: 500px;
  min-width: 320px;
  text-align: center;
  color: ${purple};
  margin: 0 auto;
  padding: 20px 10px;
`;
