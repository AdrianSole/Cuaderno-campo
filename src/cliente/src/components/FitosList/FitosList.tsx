import { FC, PropsWithChildren, useEffect, useState, useContext } from "react";
import { FitoItem } from "../FitoItem/FitoItem";
import styles from "./FitosList.module.css";
import { useFitos } from "../FitosContext";

interface FitosListProps {}

// GetFitos
export const FitosList: FC<FitosListProps> = () => {
  const context = useFitos();

  return (
    <>
      <hr />
      <h2 className={styles.listTitle}>Fitosanitarios en Almacen</h2>
      <List>
        {context.fitosState.map((fito) => {
          return <FitoItem fito={fito} key={fito._id} />;
        })}
      </List>
    </>
  );
};

// List
export const List: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
