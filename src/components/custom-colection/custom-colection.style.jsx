// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// body{
//     // width: 1128px;
//     margin: auto;
// }


// .section-grid{
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-template-rows: 1fr;
//     margin-top: 61px;
//     padding: 1rem;
//     img{
//         width: 100%;
//         height: 100%;
//     }
//     .desktop-only{
//         display: none;
//     }
   
//     .section-wrapper-grid{
//         display: grid;
//         grid-column-end: span 12; 
//         grid-template-columns: repeat(12, 1fr);
//         grid-template-rows: 1fr;
//         grid-gap: 1rem;
//         grid-column-start: 1;

//         .card-grid-main{
//             grid-column-end: span 6; 
//             grid-row-start: 1;
//             grid-row-end: span 1;
//             position: relative;
//             width: 100%;
//         }
//         .card-grid{
//             grid-column-end: span 6;
//             width: 100%;
//             // height: 50%;
//             .card-text{
//                 // height: 48px;
//                 padding: 8px 12px;
//                 font-size: 12px;
//                 line-height: 12px;
//             }
       
//         } 
        
//         div{
//             background: #eee;
//         }
//         @media(min-width: 600px){
//             .desktop-only{
//                 display: block !important;
//             }
//             .card-grid-main{
//                 grid-column-end: span 6; 
//                 grid-row-start: 1;
//                 grid-row-end: span 2;
//             }
//             .card-grid{
//                 grid-column-end: span 3;
//                 // max-height: 430px;
    
//             }
//         }
//         @media(min-width: 960px){
//             .card-grid-main{
//                 grid-column-end: span 4; 
//                 grid-row-start: 1;
//                 grid-row-end: span 2;
//             }
//             .card-grid{
//                 grid-column-end: span 2;
    
//             }
//         }
//     }
//     @media (min-width:960px) {
        
//         .section-wrapper-grid{
//             display: grid;
//             grid-column-end: span 8; 
//             grid-template-columns: repeat(8, 1fr);
//             grid-template-rows: 1fr;
//             grid-gap: 2rem;
//             grid-column-start: 3 !important;
//         }
       
//     }
// }