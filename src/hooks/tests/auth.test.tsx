import React from "react";

import { renderHook, act, } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "../auth";

interface ExpoAuthSessionStartAsyncProps{
   authUrl: string;
}

const mockedStartAsync = jest.fn();

jest.mock("expo-auth-session", () => ({
   startAsync: () => mockedStartAsync({ authUrl: "test_auth_url" }),
}));

const userInfo = { 
   name: "Levi Siebra",
   id: "dihncu92+sffg",
   email: "levi@gmail.com",
}

global.fetch = jest.fn(() =>
   Promise.resolve({
      json: () => Promise.resolve(userInfo),
  })
);

const Providers: React.FC = ({ children }) => (
   <AuthProvider>
      { children }
   </AuthProvider>
);

describe("Auth Hook", () => {
   beforeEach(() => {
      mockedStartAsync.mockClear();
   });

   it("should be able to sign in with Google account existing", async() => {
      mockedStartAsync.mockImplementationOnce(({ authUrl }: ExpoAuthSessionStartAsyncProps) => ({
         type: "success",
         params: {
            access_token: "access_token",
         }
      }));

      const { result } = renderHook(
         () => useAuth(),
         { wrapper: Providers, }   
      );

      await act(() => result.current.signInWithGoogle());

      expect(result.current.user).toEqual(userInfo);
   });

   it("should not connect user, if user cancel the sign in process", async() => {
      mockedStartAsync.mockImplementationOnce(({ authUrl }: ExpoAuthSessionStartAsyncProps) => ({
         type: "cancel",
      }));

      const { result } = renderHook(
         () => useAuth(),
         { wrapper: Providers, }   
      );

      await act(() => result.current.signInWithGoogle());

      expect(result.current.user).not.toHaveProperty("id");
   });
});