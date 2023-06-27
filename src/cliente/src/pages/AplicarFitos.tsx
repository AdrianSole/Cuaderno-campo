import { Fito } from "@/api/types/Fito";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as fitoService from "../api/services/FitoService";
import * as parcelaService from "../api/services/ParcelasService";
import { ApplyFitos } from "@/components/ApplyFitos";
import { Parcela } from "@/api/types/Parcela";
import { DocuPDF } from "@/components/DocuPDF";
import { PDFViewer } from "@react-pdf/renderer";

let showPdf = false

export default function AplicarFitos() {
  const [fitos, setFitos] = useState<Fito[]>([]);
  const [parcelas, setParcelas] = useState<Parcela[]>([]);

  const loadFitos = async () => {
    const res = await fitoService.getFitos();
    setFitos(res.data);
  };

  const loadParcelas = async () => {
    const res = await parcelaService.getParcelas();
    setParcelas(res.data);
  };

  useEffect(() => {
    loadFitos();
    loadParcelas();
    showPdf = true;
  }, []);

  return (
    <>
      <Head>
        <title>Aplicar Fitosanitarios</title>
      </Head>
      <ApplyFitos fitos={fitos} parcelas={parcelas} />

      {showPdf && <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <DocuPDF />
      </PDFViewer>}
    </>
  );
}
