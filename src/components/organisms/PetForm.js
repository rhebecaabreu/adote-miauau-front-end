import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import { Wizard, useWizard } from "react-use-wizard";
import PublicationInfo from "../molecules/form/PublicationInfo";
import PetInfo from "../molecules/form/PetInfo";
import PetInfoHealth from "../molecules/form/PetInfoHealth";
import AddressInfo from "../molecules/form/AddressInfo";
import SuccessPage from "../molecules/form/SuccessPage";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
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

const FormFooter = () => {
  const { previousStep, nextStep } = useWizard();

  return (
    <FooterRoot>
      <FooterButton
        onClick={() => previousStep()}
        color="primary"
        variant="primary"
      >
        Voltar
      </FooterButton>
      <FooterButton
        onClick={() => nextStep()}
        color="primary"
        variant="primary"
      >
        Próximo
      </FooterButton>
    </FooterRoot>
  );
};

const PetForm = ({ pet, setPet }) => {
  return (
    <Root>
      <Wizard startIndex={0} header={<FormHeader />} footer={<FormFooter />}>
        <PublicationInfo number={1} />
        <PetInfo number={2} />
        <PetInfoHealth number={3} />
        <AddressInfo number={4} />
      </Wizard>
    </Root>
  );
};

export default PetForm;
