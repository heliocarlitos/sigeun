import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./DesempenhoEstudante.css";
import TituloDaPagina from "../titulodapagina/TituloDaPagina";

const data = [
  { criterio: "1º Teste", Psicologia: 14, Metodos: 16, Linguistica: 12, Portugues: 15, Pedagogia: 13, Literatura: 17 },
  { criterio: "2º Teste", Psicologia: 15, Metodos: 17, Linguistica: 14, Portugues: 16, Pedagogia: 14, Literatura: 18 },
  { criterio: "3º Teste", Psicologia: 13, Metodos: 15, Linguistica: 13, Portugues: 14, Pedagogia: 12, Literatura: 16 },
  { criterio: "1º Trabalho", Psicologia: 16, Metodos: 18, Linguistica: 14, Portugues: 17, Pedagogia: 15, Literatura: 19 },
  { criterio: "2º Trabalho", Psicologia: 17, Metodos: 19, Linguistica: 15, Portugues: 18, Pedagogia: 16, Literatura: 20 },
];

const renderCustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="legenda-container">
      {payload.map((entry, index) => (
        <span key={`item-${index}`} className="legenda-item">
          <span className="legenda-cor" style={{ backgroundColor: entry.color }}></span>
          {entry.value}
        </span>
      ))}
    </div>
  );
};

const DesempenhoEstudante = () => {
  return (
    <div className="DesempenhoEstudante">
      <TituloDaPagina Titulo="Desenpenho acadêmico" />
      <ResponsiveContainer width="100%" minHeight={300} height="100%">
        <BarChart data={data} barGap={1} barCategoryGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis dataKey="criterio" tick={{ className: "eixo-x" }} />
          <YAxis domain={[10, 20]} tick={{ className: "eixo-y" }} />
          <Tooltip />
          <Legend content={renderCustomLegend} />
          <Bar dataKey="Psicologia" fill="#d8d6ff" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Metodos" fill="#ffc5d6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Linguistica" fill="#cae9d6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Portugues" fill="#f4f7fb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Pedagogia" fill="#ffeed6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Literatura" fill="#f7f9dc" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DesempenhoEstudante;
