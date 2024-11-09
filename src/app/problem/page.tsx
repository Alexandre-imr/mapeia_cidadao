"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    areaProblema: "",
    afetaOutrasAreas: "",
    afetaQualidadeVida: "",
    impactoEconomico: "",
    sazonal: "",
    presenciou: "",
    gravidade: "",
    resolvido: "",
    impactoServicosEssenciais: "",
    solucao: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Logic to submit the form data
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#1A1A40",
        color: "#fff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Preencha o formulário</h2>

      <label>Selecione a área principal do problema:</label>
      <select
        name="areaProblema"
        value={formData.areaProblema}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Saúde">Saúde</option>
        <option value="Educação">Educação</option>
        <option value="Segurança">Segurança</option>
        {/* Adicione mais opções conforme necessário */}
      </select>

      <label>Esse problema afeta outras áreas além da principal?</label>
      <select
        name="afetaOutrasAreas"
        value={formData.afetaOutrasAreas}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>O problema afeta a qualidade de vida da população?</label>
      <select
        name="afetaQualidadeVida"
        value={formData.afetaQualidadeVida}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>Esse problema tem impacto econômico?</label>
      <select
        name="impactoEconomico"
        value={formData.impactoEconomico}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>
        Você considera que o problema é sazonal ou ocorre durante todo o ano?
      </label>
      <select name="sazonal" value={formData.sazonal} onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="Sazonal">Sazonal</option>
        <option value="Todo o ano">Todo o ano</option>
      </select>

      <label>
        Você já presenciou ou foi diretamente afetado por esse problema?
      </label>
      <select
        name="presenciou"
        value={formData.presenciou}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>Qual a gravidade desse problema?</label>
      <select
        name="gravidade"
        value={formData.gravidade}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>

      <label>
        Esse problema já foi resolvido ou melhorado anteriormente, mas voltou a
        acontecer?
      </label>
      <select
        name="resolvido"
        value={formData.resolvido}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>
        Esse problema já teve algum impacto em serviços essenciais da sua
        região?
      </label>
      <select
        name="impactoServicosEssenciais"
        value={formData.impactoServicosEssenciais}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>

      <label>
        Na sua opinião, qual seria a melhor solução para esse problema?
      </label>
      <textarea
        name="solucao"
        value={formData.solucao}
        onChange={handleChange}
        placeholder="Digite sua solução aqui..."
      ></textarea>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
          width: "100%",
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
