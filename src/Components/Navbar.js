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
 

