import styled from 'styled-components'

export const AdminContent = styled.div`
   margin-left:${props=>props.slide?"270px":"0"};
   transition:ease 0.5s;
   @media (max-width:1200px){
      margin-left:${props=>props.slide?"270px":"60px"}
   }

   
`