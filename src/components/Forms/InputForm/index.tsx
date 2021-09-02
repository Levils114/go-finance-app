import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from 'react-native';
import Input from "../Input";
import { Container, Error } from "./styles";

interface InputFormProps extends TextInputProps{
   control: Control;
   name: string;
   error?: string;
}

export default function InputForm({ control, name, error, ...rest }: InputFormProps){
   return(
      <Container>
         {error && <Error>{error}</Error>}
         <Controller name={name} control={control} render={({ field }) => (
            <Input onChangeText={field.onChange} value={field.value} {...rest}/>
         )}/>
      </Container>
   );
}