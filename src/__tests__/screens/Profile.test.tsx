import React from "react";
import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

describe("Profile", () => {
   it("should verify if name text input placeholder is 'Nome'", () => {
      const component = render(<Profile />);

      const nameTextInput = component.getByPlaceholderText("Nome");

      expect(nameTextInput).toBeTruthy();
   });

   it("should display 'Perfil' text in screen title", () => {
      const component = render(<Profile />);

      const titleComponent = component.getByTestId("title-test-id");

      expect(titleComponent.props.children).toContain("Perfil");
   });
});