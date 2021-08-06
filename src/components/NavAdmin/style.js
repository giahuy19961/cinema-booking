import styled from 'styled-components'

export const SideBarWrap = styled.div`
   background-color:#212529;
   width:250px;
   height: -webkit-calc(100% - 60px);
   height:calc(100%-60px);
   position:absolute;
   top:60px;
   left:${props=>props.slide?"0":"-200px"};
   transition:ease 0.5s;
`




export const SideBarItem = styled.div`
     margin:auto 20px;
`
export const  SideBarMenu = styled.button`
        width:100%;
        background-color:#999999;
        padding:20px;
        outline:none;
        border-bottom:1px  solid #777777;
        font-size:2rem;
        display:flex;
        justify-content:space-between;
        @media (max-width:600px){
            font-size:1.5rem;
        }
`

export const SideBarBody = styled.p`
       max-height:1200px;
       background-color:#999999;
       font-size:1.2rem;
       line-height:normal;
       color:#000;
       padding:20px;
       margin-bottom:0;
       @media (max-width:600px){
           font-size:1rem;
       }
       
`
