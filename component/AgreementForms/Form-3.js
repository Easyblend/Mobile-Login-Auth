import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Form_3 = ({
  handleSubmit,
  unhandleSubmit,
  party,
  setParty,
  partyData,
  setPartyData,
}) => {
  const generatePDF = async () => {
    try {
      alert("Document will be sent to your email");
      //   // Create a new PDF document
      //   const pdfDoc = await PDFDocument.create();

      //   // Create a new page
      //   const page = pdfDoc.addPage([500, 500]);

      //   // Draw some text on the page
      //   const { font } = await pdfDoc.embedFont("Helvetica");
      //   const text = `NON-DISCLOSURE AGREEMENT

      //   This Non-Disclosure Agreement (the "Agreement") is made and entered into as of xx-xx-xxxx, (the "Effective Date") by and between:

      //   ${partyData[0] || "Company"}
      //   (Hereinafter referred to as the "Disclosing Party")

      //   and

      //  ${partyData[1] || "Client"}
      //   (Hereinafter referred to as the "Receiving Party")

      //   (collectively referred to as the "Parties").

      //   WHEREAS, the Disclosing Party possesses certain confidential and proprietary information that it wishes to protect from unauthorized disclosure or use by the Receiving Party.

      //   NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the Parties agree as follows:

      //   1. Definition of Confidential Information:
      //   The term "Confidential Information" shall mean any non-public, proprietary, or confidential information disclosed by the Disclosing Party to the Receiving Party, whether in writing, orally, or in any other form, including but not limited to:
      //     - Trade secrets
      //     - Business plans and strategies
      //     - Financial information
      //     - Intellectual property
      //     - Customer lists
      //     - Technical data and know-how
      //     - Any other information identified as confidential at the time of disclosure.

      //   2. Obligations of the Receiving Party:
      //   The Receiving Party agrees to:
      //     a. Keep all Confidential Information received from the Disclosing Party in strict confidence and take all reasonable measures to prevent unauthorized disclosure or use.
      //     b. Limit access to the Confidential Information only to its employees, contractors, or agents who need to know the information for a legitimate purpose and who are bound by similar confidentiality obligations.
      //     c. Not disclose, reproduce, or distribute the Confidential Information to any third party without the prior written consent of the Disclosing Party.
      //     d. Use the Confidential Information solely for the purpose of [state the purpose of the disclosure, e.g., "evaluating a potential business relationship" or "participating in discussions regarding a potential collaboration"].

      //   3. Exceptions:
      //   The obligations of confidentiality under this Agreement shall not apply to information that:
      //     a. Is already known to the Receiving Party at the time of disclosure, as evidenced by written records;
      //     b. Becomes publicly known or available other than through a breach of this Agreement by the Receiving Party;
      //     c. Is rightfully received by the Receiving Party from a third party without any duty of confidentiality;
      //     d. Is independently developed by the Receiving Party without reference to the Confidential Information.

      //   4. Term and Termination:
      //   This Agreement shall remain in effect for a period of [state the duration, e.g., "two (2) years"] from the Effective Date unless terminated earlier by mutual written agreement or as otherwise provided herein.

      //   5. Return of Confidential Information:
      //   Upon the Disclosing Party's request or termination of this Agreement, the Receiving Party shall promptly return or destroy all copies of the Confidential Information in its possession or control and provide written certification of such return or destruction.

      //   6. Governing Law and Jurisdiction:
      //   This Agreement shall be governed by and construed in accordance with the laws of [state/country]. Any dispute arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts in [state/country].

      //   7. Entire Agreement:
      //   This Agreement constitutes the entire understanding between the Parties concerning the subject matter hereof and supersedes all prior and contemporaneous agreements, whether oral or written.

      //   IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement as of the Effective Date.

      //   [Your Company/Individual Name]
      //   Disclosing Party

      //   By: __________________________
      //   ${partyData[0] || "Company"}

      //   [Recipient's Company/Individual Name]
      //   Receiving Party

      //   By: __________________________
      //   ${partyData[1] || "Client"}
      //   `;
      //   page.drawText(text, {
      //     x: 50,
      //     y: page.getSize().height - 100,
      //     size: 24,
      //     font,
      //   });

      //   // Save the PDF to a file
      //   const pdfBytes = await pdfDoc.save();
      //   const pdfPath = "/path/to/your/file.pdf";

      //   // Write the PDF to a file
      //   await RNFS.writeFile(pdfPath, pdfBytes, "base64");

      //   Alert.alert("Success", "PDF generated successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",
        flex: 1,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Description of Confidential Information
      </Text>
      <TextInput
        placeholder="A clear description of...."
        inputMode="numeric"
        style={{
          marginLeft: 10,
          height: 45,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          padding: 8,
          width: "100%",
          marginBottom: 20,
          textAlignVertical: "top", // Align text to the top of the TextInput
          alignContent: "center",
          justifyContent: "center",
          height: 150,
        }}
        multiline={true}
        numberOfLines={10}
      />
      <Text style={{ textAlign: "justify", color: "#555" }}>
        A clear and specific description of the information that the disclosing
        party considers confidential. This can include trade secrets, business
        plans, financial data, customer lists, product designs, or any sensitive
        information they wish to protect.
      </Text>
      <TouchableOpacity
        onPress={generatePDF}
        style={{
          marginTop: 10,
          backgroundColor: "#339955",
          borderRadius: 4,
          padding: 10,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Generate Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={unhandleSubmit}
        style={{
          marginTop: 10,
          backgroundColor: "#333",
          borderRadius: 4,
          padding: 10,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Previous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form_3;
