import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Register from "..";
import theme from "../../../global/styles/theme";

jest.mock("@react-navigation/core", () => ({
   useNavigation: () => ({
      navigate: () => {}
   })
}))

const Providers: React.FC = ({ children }) => (
   <ThemeProvider theme={theme}>
      {children}
   </ThemeProvider>
);

describe("Register Screen", () => {
   it("should open categories modal, when click on category button", () => {
      const component = render(
         <Register />,
         {
            wrapper: Providers
         }
      );

      const categoriesButton = component.getByTestId("OpenCategoryModalButtonID");
      const categoriesModal = component.getByTestId("CategoriesModalID");

      fireEvent.press(categoriesButton);

      expect(categoriesModal.props.visible).toBeTruthy();
   });
});