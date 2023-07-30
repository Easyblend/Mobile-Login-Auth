import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";
import { HideKeyboard } from "../Utils/KeyboardHide";

import Form_1 from "../component/AgreementForms/Form-1";
import Form_2 from "../component/AgreementForms/Form-2";
import Form_3 from "../component/AgreementForms/Form-3";

const DocumentForm = ({ route }) => {
  const [formPage, setFormPage] = useState(1);
  const [party, setParty] = useState(1);
  const [partyData, setPartyData] = useState([]);

  const handleSubmit = () => {
    setFormPage(formPage + 1);
  };
  const unhandleSubmit = () => {
    setFormPage(formPage - 1);
  };

  return (
    <HideKeyboard>
      <SafeAreaView
        style={{
          alignItems: "center",
          marginHorizontal: 40,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 26, paddingTop: 10 }}>
          {route.params.name}
        </Text>
        {formPage === 1 ? (
          <Form_1
            handleSubmit={handleSubmit}
            setParty={setParty}
            party={party}
          />
        ) : formPage === 2 ? (
          <Form_2
            handleSubmit={handleSubmit}
            party={party}
            setParty={setParty}
            unhandleSubmit={unhandleSubmit}
            partyData={partyData}
            setPartyData={setPartyData}
          />
        ) : formPage === 3 ? (
          <Form_3
            handleSubmit={handleSubmit}
            party={party}
            setParty={setParty}
            unhandleSubmit={unhandleSubmit}
            partyData={partyData}
            setPartyData={setPartyData}
          />
        ) : (
          ""
        )}
      </SafeAreaView>
    </HideKeyboard>
  );
};

export default DocumentForm;
