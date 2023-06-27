import { FitosList } from "@/components/FitosList";
import { FormFitos } from "@/components/FormFitos";
import Head from "next/head";
import { FitosProvider } from "@/components/FitosContext";

export default function Fitos() {

  return (
    <>
      <Head>
        <title>Fitosanitarios</title>
      </Head>

      <FitosProvider>
        <FormFitos />
        <FitosList />
      </FitosProvider>
    </>
  );
}
