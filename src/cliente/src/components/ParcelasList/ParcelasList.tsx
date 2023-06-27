import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./ParcelasList.module.css";
import { ParcelaItem } from "../ParcelaItem";
import { useParcelas } from "../ParcelasContext";

export const ParcelasList = () => {
  const context = useParcelas();

  return (
    <>
      <hr />
      <h2 className={styles.listTitle}>Tus Parcelas</h2>
      <List>
        {context.parcelasState.map((parcela) => {
          return <ParcelaItem parcela={parcela} key={parcela._id} />;
        })}
      </List>
    </>
  );
};

// List
export const List: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
