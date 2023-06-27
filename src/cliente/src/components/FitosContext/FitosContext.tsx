import {
  createContext,
  FC,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { Fito } from "@/api/types/Fito";
import * as fitoService from "../../api/services/FitoService";

// Contexto
interface FitosState {
  fitosState: Fito[];
  setFitosState: Dispatch<SetStateAction<Fito[]>>;
  loadFitos: () => void;
}

const FitosContext = createContext<FitosState | undefined>(undefined);

// Provider
interface FitosProviderProps {}

export const FitosProvider: FC<PropsWithChildren<FitosProviderProps>> = ({
  children,
}) => {
  const [fitosState, setFitosState] = useState<Fito[]>([]);

  const loadFitos = async () => {
    const res = await fitoService.getFitos();
    setFitosState(res.data);
  };

  useEffect(() => {
    loadFitos();
  }, []);

  const value = { fitosState, setFitosState, loadFitos };
  return (
    <FitosContext.Provider value={value}>{children}</FitosContext.Provider>
  );
};

// Hook
export function useFitos() {
  const context = useContext(FitosContext);

  if (context === undefined) {
    throw new Error("useFitos must be used within a AuthProvider");
  }

  return context;
}
