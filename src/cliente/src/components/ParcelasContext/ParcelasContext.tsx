import { Parcela } from "@/api/types/Parcela";
import * as parcelasService from "../../api/services/ParcelasService";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";

//Contexto

interface ParcelasState {
  parcelasState: Parcela[];
  setParcelasState: Dispatch<SetStateAction<Parcela[]>>;
  loadParcelas: () => void;
}

const ParcelasContext = createContext<ParcelasState | undefined>(undefined);

// Provider
interface ParcelasProviderProps {}

export const ParcelasProvider: FC<PropsWithChildren<ParcelasProviderProps>> = ({
  children,
}) => {
  const [parcelasState, setParcelasState] = useState<Parcela[]>([]);

  const loadParcelas = async () => {
    const res = await parcelasService.getParcelas();
    setParcelasState(res.data);
  };

  useEffect(() => {
    loadParcelas();
  }, []);

  const value = { parcelasState, setParcelasState, loadParcelas };

  return (
    <ParcelasContext.Provider value={value}>
      {children}
    </ParcelasContext.Provider>
  );
};

// Hook

export function useParcelas() {
  const context = useContext(ParcelasContext);

  if (context === undefined) {
    throw new Error("useParcelas must be used within a AuthProvider");
  }
  return context;
}
