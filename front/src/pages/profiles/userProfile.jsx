import React, { useState } from "react";
import "./userProfile.css";
import Header from "../../components/layout/header/HeaderProf";
import Edit from "../../assets/Vector.svg";
import Ellipse from "../../assets/ellipse.svg";
import Localizacao from "../../assets/location.svg";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "Fulano Martins",
    cidade: "Fortaleza",
    quant_atend_gratis: 2,
    valor: 100.00,
    faixas_etarias: ["Crianças", "Adolescentes"],
    matricula_profissional: "XXXXXXX",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validações
    if (name === "quant_atend_gratis" || name === "valor") {
      if (value < 0) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Não pode ser um número negativo.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else if (
      name === "nome" ||
      name === "especialidade" ||
      name === "cidade" ||
      name === "matricula_profissional"
    ) {
      // Permitir letras acentuadas e espaços para campos de texto
      if (/[^a-zA-ZÀ-ÿ\s\d]/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Somente letras, números e acentos são permitidos.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === "faixas_etarias") {
      // Verificar se a faixa etária contém apenas letras e acentos
      if (/[^a-zA-ZÀ-ÿ\s]/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Somente letras e acentos são permitidos.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
        const updatedFaixas = value.split(",").map((item) => item.trim());
        setFormData((prev) => ({ ...prev, faixas_etarias: updatedFaixas }));
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = () => {
    // Verificação de erros antes de permitir o envio
    if (!Object.values(errors).some((error) => error !== "")) {
      setIsEditing(false);
      console.log("Dados salvos:", formData);
    } else {
      console.log("Erros de validação", errors);
    }
  };

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="container-profile">
          <div className="picture-edit" onClick={handleEdit}>
            <img src={Edit} alt="Imagem de Edição" className="edit" />
          </div>

          <div className="name-specialist">
            <img src={Ellipse} alt="blank" className="profile-pic" />
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleChange}
                  className={`input-edit ${errors.especialidade && "input-error"}`}
                />
                {errors.especialidade && (
                  <span className="error-message">{errors.especialidade}</span>
                )}

                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`input-edit-secondary ${errors.nome && "input-error"}`}
                />
                {errors.nome && <span className="error-message">{errors.nome}</span>}
              </>
            ) : (
              <>
                <h2>{formData.especialidade}</h2>
                <h3>{formData.nome}</h3>
              </>
            )}
          </div>

          <div className="address">
            <img src={Localizacao} alt="Pin de localização" className="location" />
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className={`input-edit-small ${errors.cidade && "input-error"}`}
                />
                {errors.cidade && <span className="error-message">{errors.cidade}</span>}
              </>
            ) : (
              <p>{formData.cidade}</p>
            )}
          </div>

          <div className="information">
            {isEditing ? (
              <>
                <div className="form-group">
                  <label>Público Alvo:</label>
                  <input
                    type="text"
                    name="faixas_etarias"
                    value={formData.faixas_etarias.join(", ")}
                    onChange={handleChange}
                    className={errors.faixas_etarias && "input-error"}
                  />
                  {errors.faixas_etarias && (
                    <span className="error-message">{errors.faixas_etarias}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Quantidade de atendimentos gratuitos:</label>
                  <input
                    type="number"
                    name="quant_atend_gratis"
                    value={formData.quant_atend_gratis}
                    onChange={handleChange}
                    className={errors.quant_atend_gratis && "input-error"}
                  />
                  {errors.quant_atend_gratis && (
                    <span className="error-message">{errors.quant_atend_gratis}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Valor do atendimento:</label>
                  <input
                    type="number"
                    name="valor"
                    value={formData.valor}
                    onChange={handleChange}
                    className={errors.valor && "input-error"}
                  />
                  {errors.valor && <span className="error-message">{errors.valor}</span>}
                </div>

                <div className="form-group">
                  <label>Registro Profissional:</label>
                  <input
                    type="text"
                    name="matricula_profissional"
                    value={formData.matricula_profissional}
                    onChange={handleChange}
                    className={`input-edit ${errors.matricula_profissional && "input-error"}`}
                  />
                  {errors.matricula_profissional && (
                    <span className="error-message">{errors.matricula_profissional}</span>
                  )}
                </div>
              </>
            ) : (
              <>
                <p>Público Alvo:</p>
                <ul>
                  {formData.faixas_etarias.map((faixa, index) => (
                    <li key={index}>{faixa}</li>
                  ))}
                </ul>
                <p>
                  Quantidade de atendimentos gratuitos: <span>{formData.quant_atend_gratis}</span>
                </p>
                <p>
                  Valor do atendimento: <span>R$ {formData.valor.toFixed(2)}</span>
                </p>
                <p>
                  Registro Profissional: <span>{formData.matricula_profissional}</span>
                </p>
              </>
            )}
          </div>

          {isEditing && (
            <button className="agend" onClick={handleSubmit}>
              Salvar
            </button>
          )}

          <button className="agend">Sair</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
