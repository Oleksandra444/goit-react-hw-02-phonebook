import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  
  font: inherit;
  border: 4px solid #E7E9FC;
border-radius: 0.35em;
width:200px;
padding: 4px 10px;
background: transparent; 
&:hover, &:focus {
  border: 4px solid #404BBF;
  border-radius: 0.35em;
  /* color: #404BBF; */
  outline: none; 
  }

   
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 16px;
`;

export const ContactAddButton = styled.button`
padding: 5px 5px;
font-size: 14px;
width: 150px;
text-transform: uppercase;
background-color: white;
border: 4px solid #E7E9FC;
border-radius: 0.35em;

&:hover {
  border: 4px solid #404BBF;
  border-radius: 0.35em;
  color: #404BBF; 
  }`
