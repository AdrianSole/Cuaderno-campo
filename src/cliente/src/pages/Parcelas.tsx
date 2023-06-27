import { FormParcela } from "@/components/FormParcela";
import { ParcelasProvider } from "@/components/ParcelasContext";
import { ParcelasList } from "@/components/ParcelasList";
import Head from "next/head";

export default function Parcelas() {
  return (
    <>
      <Head>
        <title>Parcelas</title>
      </Head>
      <ParcelasProvider>
        <FormParcela />
        <ParcelasList />
      </ParcelasProvider>
    </>
  );
}
