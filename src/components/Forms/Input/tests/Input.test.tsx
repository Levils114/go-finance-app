import { render } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Input from "..";
import theme from "../../../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
   <ThemeProvider theme={theme}>
      {children}
   </ThemeProvider>
);

describe("Input Component", () => {
   it("should have border when input focused", () => {
      const component = render(
         <Input 
            active
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
         />,
         {
            wrapper: Providers
         }
      );

      const input = component.getByPlaceholderText("E-mail");

      expect(input.props.style[0].borderColor).toEqual(theme.colors.attention);
      expect(input.props.style[0].borderWidth).toEqual(1);
   });
});