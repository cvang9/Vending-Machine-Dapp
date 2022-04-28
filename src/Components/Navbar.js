// import React, { Component } from 'react'
import Web3  from 'web3';
// import {useState,useEffect} from 'react';
 import React from 'react';

 
 function Navbar() {
 
    let web3;
    const  connectWallet = async() =>{
        if( typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ){
            try{
            window.ethereum.request({method:'eth_requestAccounts'});
            web3 = new Web3(window.ethereum);
              } 
              catch(err){
                console.error(err.message);
              }
        }
        else{
            console.log("INSTALL METAMASk");
        }
       }

   return (
       <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">VENDING MACHINE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li> */}
              {/* <li className="nav-item dropdown"> */}
                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a> */}
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>< hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            {/* </ul> */}
            <div className="d-flex">
              <button className="btn btn-outline-success" onClick={connectWallet}>Connect Wallet</button>
            </div>
          </div>
        </div>
      </nav>
       </>

   )
 }
 
 export default Navbar
 

// export default class Navbar extends Component {

    
//   render() {

//     const[error,setError] = useState('');

// // CHECK THE PRESENCE OF METAMASK
//     let web3;
//     const  connectWallet = async() =>{
//         if( typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ){
//             try{
//             window.ethereum.request({method:'eth_requestAccounts'});
//             web3 = new Web3(window.wthereum);
//               } catch(err){
//                 setError(err.message);
//               }
//         }
//         else{
//             console.log("INSTALL METAMASk");
//         }
//     }
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">VENDING MACHINE</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
//               {/* <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li> */}
//               {/* <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li> */}
//               {/* <li className="nav-item dropdown"> */}
//                 {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a> */}
//                 {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li>< hr className="dropdown-divider"/></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li> */}
//               {/* <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//               </li> */}
//             {/* </ul> */}
//             <div className="d-flex">
//               <button className="btn btn-outline-success" onClick={connectWallet}>Connect Wallet</button>
//             </div>
//           </div>
//         </div>
//             <div class="alert alert-dark" role="alert">
//              hi
//             </div>
//       </nav>
//     )
//   }
// }
