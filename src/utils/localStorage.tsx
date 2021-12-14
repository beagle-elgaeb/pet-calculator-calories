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
    const savedStateHistory = localStorage.getItem(localStorageKey);
    const savedStateMeals = localStorage.getItem(localStorageKey);
    const savedStateProfile = localStorage.getItem(localStorageKey);

    if (savedStateHistory) {
      try {
        dispatch(loadStateHistory(JSON.parse(savedStateHistory).history));
      } catch {}
    }

    if (savedStateMeals) {
      try {
        dispatch(loadStateMeals(JSON.parse(savedStateMeals).meals));
      } catch {}
    }

    if (savedStateProfile) {
      try {
        dispatch(loadStateProfile(JSON.parse(savedStateProfile).profile));
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Загрузка данных из стейта в локальное хранилище
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);
}
