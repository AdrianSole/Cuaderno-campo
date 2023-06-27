/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Parcela } from "@/api/types/Parcela";
import * as parcelasService from "../../api/services/ParcelasService";

const stylesPDF = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  mainContent: {
    fontSize: 12,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
});

export const DocuPDF = () => {
  const [parcelas, setParcelas] = useState<Parcela[]>([]);

  const loadParcelas = async () => {
    const res = await parcelasService.getParcelas();
    setParcelas(res.data);
  };

  useEffect(() => {
    loadParcelas();
  }, []);

  let showValues: string = "";
  const displayOnPDF = () => {
    parcelas.map((parcela) => {
      if (parcela.fitosAplicados) {
        showValues += `\n---Fitosanitarios aplicados en: ${parcela.paraje} / ${parcela.parcela}\n `;
        for (let i = 0; i <= parcela.fitosAplicados.length; i += 1) {
          if (parcela.fitosAplicados[i]?.nombre)
            showValues += `\n\tNombre: ${parcela.fitosAplicados[i].nombre}, Registro: ${parcela.fitosAplicados[i].registro}, Cantidad: ${parcela.fitosAplicados[i].cantidad}, Aplicados en: ${parcela.fitosAplicados[i].updatedAt} \n`;
        }
      }
    });
  };
  displayOnPDF();

  return (
    <Document>
      <Page size={"A4"} style={stylesPDF.page}>
        <View style={stylesPDF.section}>
          <Text style={stylesPDF.title}>Cuaderno de Campo</Text>
          <Text style={stylesPDF.mainContent}>{showValues}</Text>
        </View>
      </Page>
    </Document>
  );
};
