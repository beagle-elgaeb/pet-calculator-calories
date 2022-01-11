import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStateHistory } from "../redux/historySlise";
import { loadStateMeals } from "../redux/mealSlise";
import { loadStateProfile } from "../redux/profileSlise";
import { State } from "../redux/types";

export function useLoadFromStorage() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);

  const localStorageKey = "state";

  // Загрузка данных из локального хранилища в стейт
  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);

    if (savedState) {
      try {
        dispatch(loadStateHistory(JSON.parse(savedState).history));
      } catch {}
    }

    if (savedState) {
      try {
        dispatch(loadStateMeals(JSON.parse(savedState).meals));
      } catch {}
    }

    if (savedState) {
      try {
        dispatch(loadStateProfile(JSON.parse(savedState).profile));
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Загрузка данных из стейта в локальное хранилище
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);
}
