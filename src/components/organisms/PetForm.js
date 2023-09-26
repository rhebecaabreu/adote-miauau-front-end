import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import { toast } from "react-toast";
import { Wizard, useWizard } from "react-use-wizard";
import PublicationInfo from "../molecules/form/PublicationInfo";
import PetInfo from "../molecules/form/PetInfo";
import PetInfoHealth from "../molecules/form/PetInfoHealth";
import AddressInfo from "../molecules/form/AddressInfo";
import api from "services/api";
import Cookies from "js-cookie";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 40px;

  h1 {
    color: ${(props) => props.theme.colors.primary.label};
  }
`;

const FooterRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FooterButton = styled(Button)`
  width: 150px;
`;

const FormHeader = () => {
  return (
    <>
      <h1>Publicar um novo pet</h1>
    </>
  );
};

const FormFooter = ({ publication }) => {
  const { isLastStep, isFirstStep, previousStep, nextStep, activeStep } =
    useWizard();

  const sendPublication = () => {
    const headers = {
      "USER-EMAIL": Cookies.get("email"),
      "USER-TOKEN": Cookies.get("authentication_token"),
    };

    const formData = new FormData();
    for (const key in publication) {
      if (key === "pet") {
        formData.append("pet", JSON.stringify(publication[key]));
      } else if (key === "images") {
        publication.images.forEach((file, index) => {
          formData.append(`images[${index}]`, file);
        });
      } else if (key === "address") {
        formData.append("address", JSON.stringify(publication[key]));
      } else {
        formData.append(key, publication[key]);
      }
    }

    api
      .post("/publications", formData, {
        headers: headers,
      })
      .then((response) => (window.location = "/publicar/sucesso"))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const errorToast = (message) => {
    const defaultMessage = "Você deve preencher todos os campos!";
    toast.error(message || defaultMessage, {
      position: "top-right",
    });
  };

  const isEmptyObject = (value) =>
    Object.values(value).some((element) => element === "");

  const handleNext = () => {
    if (isLastStep) {
      if (isEmptyObject(publication.address)) {
        errorToast();
      } else {
        sendPublication();
      }
    } else {
      validateNextStep();
    }
  };

  const validateNextStep = () => {
    if (
      activeStep === 0 &&
      (publication.title === "" || publication.description === "")
    ) {
      errorToast();
    } else if (activeStep === 1 && publication.images.length === 0) {
      errorToast("Você deve adicionar ao menos uma foto do pet!");
    } else {
      nextStep();
    }
  };

  return (
    <FooterRoot>
      {!isFirstStep && (
        <FooterButton
          onClick={() => previousStep()}
          color="primary"
          variant="primary"
        >
          Voltar
        </FooterButton>
      )}

      <FooterButton
        onClick={() => handleNext()}
        color="primary"
        variant="primary"
      >
        {isLastStep ? "Publicar" : "Próximo"}
      </FooterButton>
    </FooterRoot>
  );
};

const PetForm = ({ publication, setPublication }) => {
  return (
    <Root>
      <Wizard
        startIndex={0}
        header={<FormHeader />}
        footer={<FormFooter publication={publication} />}
      >
        <PublicationInfo
          publication={publication}
          setPublication={setPublication}
          number={1}
        />
        <PetInfo
          publication={publication}
          setPublication={setPublication}
          number={2}
        />
        <PetInfoHealth
          number={3}
          publication={publication}
          setPublication={setPublication}
        />
        <AddressInfo
          number={4}
          publication={publication}
          setPublication={setPublication}
        />
      </Wizard>
    </Root>
  );
};

export default PetForm;
