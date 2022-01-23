import { createContext } from "react";
import { UserType } from "../utils/types";

export const CurrentUserContext = createContext<UserType | undefined>(undefined);