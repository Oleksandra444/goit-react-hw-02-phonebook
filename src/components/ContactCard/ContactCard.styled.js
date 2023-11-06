import styled from 'styled-components';


export const ContactCardWrappper = styled.div`
border: 3px solid #4D5AE5;
border-radius: 0.35em;
display: flex;
justify-content: space-between;
height: 45px;
width: 400px;
align-items: center;
padding:5px;
`;

export const ContactValuedWrappper = styled.div`
display: flex;
gap: 12px;
`


export const ContactCardValue = styled.p`
font-size: 18px;
`;

export const ContactCardDelButton = styled.button`
padding: 5px 5px;
font-size: 14px;
width: 100px;
text-transform: uppercase;
background-color: white;
border: 4px solid #E7E9FC;
border-radius: 0.35em;
&:hover {
  border: 4px solid #404BBF;
  border-radius: 0.35em;
  color: #404BBF; 
;  
}
`