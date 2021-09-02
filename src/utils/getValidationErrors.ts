import { ValidationError } from 'yup';
import { GetValidationErrorsProps } from '../@types/getValidationErrorsProps';

export default function getValidationErrors(err: ValidationError): GetValidationErrorsProps[]{
   console.log(JSON.parse(JSON.stringify(err)));

   const getErrors: GetValidationErrorsProps[] = err.inner.map(error => {
      return({
         name: error.params!.path as string,
         error: error.errors[0]
      });
   });

   return getErrors;
}