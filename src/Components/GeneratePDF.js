import React from "react";
import jsPDF from "jspdf";
import html2cavas from "html2canvas";
import "./ResumeStyle.css";
import MapHeader from "./MapHeader";

const GeneratePDF = ({ data, order, titles, addDisplpay, createDisplay }) => {
  const generatePDF = () => {
    const input = document.getElementById("pdf-content");
    html2cavas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.setFontSize(11.4);
      pdf.setTextColor("blue");
      pdf.textWithLink("Alec-Hallman(github.com)", 113, 17, {
        url: "https://github.com/Alec-Hallman",
        color: "blue",
      });
      pdf.save("download.pdf");
    });
  };
  return (
    <center>
      <div
        id="pdf-content"
        style={{ height: "11in", width: "6in", backgroundColor: "white" }}
      >
        <p className="Name">Alec Hallman</p>
        <div className="Information-box">
          <span className="Information">Waterloo, ON</span>
          <span className="Information">hall8625@mylaurier.ca</span>
          <a className="Information" href="a" style={{ color: "white" }}>
            Alec-Hallman(github.com)
          </a>
          <span className="Information">519-260-9622</span>
        </div>
        <MapHeader order={order} data={data} titles={titles}></MapHeader>
      </div>
      <button onClick={generatePDF}>Generate</button>
      <button
        onClick={() => {
          addDisplpay(false);
          createDisplay(false);
        }}
      >
        Main Menu
      </button>
    </center>
  );
};
export default GeneratePDF;
