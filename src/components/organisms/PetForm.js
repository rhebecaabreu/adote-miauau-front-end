import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
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
  const { isLastStep, isFirstStep, previousStep, nextStep } = useWizard();

  const sendPublication = () => {
    const headers = {
      "USER-EMAIL": Cookies.get("email"),
      "USER-TOKEN": Cookies.get("authentication_token"),
    };

    api
      .post("/publications", publication, {
        headers: headers,
      })
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const handleNext = () => {
    if (isLastStep) {
      sendPublication();
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
