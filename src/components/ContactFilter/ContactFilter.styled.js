import styled from 'styled-components';

export const ContactFilterWrapper = styled.div`
width: 400px;
display: flex;
justify-content: space-between;

`;

export const ContactFilterButton = styled.button`
padding: 5px 5px;
font-size: 14px;
width: 150px;
text-transform: uppercase;
background-color: #4682B4;
border: 4px solid #4682B4;
border-radius: 0.35em;
&:hover {
  border: 4px solid #404BBF;
  border-radius: 0.35em;
  color: #404BBF;
  background-color: white; 
  }
`;

export const ContactFilterInput = styled.input`
border: 4px solid #4682B4;
border-radius: 0.35em;
width:200px;
padding: 0 10px;
&:hover, &:focus {
  border: 4px solid #404BBF;
  border-radius: 0.35em;
  color: #404BBF;
  outline: none; 
  }

`

