import React,{useState,useEffect} from 'react';
import Web3 from 'web3';
import vmInstance from '../create_instance';



function Connection() {
    let web3 = new Web3(window.ethereum);
    const[stock,setStock] = useState('');
    const[dons,setDons] = useState('');
    const[donutCount,setDonCount] = useState('');
    // const[vmInstance, setVmContract] = useState(null);

    useEffect( ()=>{
        satStock();
        getMyDonuts();
    });


    const satStock = async()=>{
      const stocks = await vmInstance.methods.getVendingMachineBalance().call();
      setStock(stocks);
    }

    const getMyDonuts = async()=>{
        const accounts = await web3.eth.getAccounts();
        const donut = await vmInstance.methods.donutBalances(accounts[0]).call();
        setDons(donut);
    }

    const buyDonuts = async()=>{
        try{
        const accounts = await web3.eth.getAccounts();
        await vmInstance.methods.purchase(donutCount).send({
            from: accounts[0],
            value: web3.utils.toWei('2','ether')
        })
        }catch(error){
            console.log(error.message);
        }
    }
    
  return (

    <>
      <section>
          <div className="container">
              <h3> Vending Machine stock: {stock}</h3>
          </div>
          <div className="container">
              <h4> Mine Donuts: {dons}</h4>
          </div>
      </section>
      <section>
          <div className="container">
              <div className="field">
                  <label className='label'>Hey Looking 4 Donuts ,grab from here</label>
              </div>
              <div className='control mt-2'>
                  <input onChange={(e)=>setDonCount(e.target.value)} type="text" placeholder='Enter Amount...' />  
              </div>
              <button type="button" className="btn btn-success mt-2" onClick={buyDonuts}>Buy Now</button>
          </div>
      </section>
    </>
  )
}

export default Connection;

