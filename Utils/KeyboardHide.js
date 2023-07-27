import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
