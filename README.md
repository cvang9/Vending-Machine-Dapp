# Vending-Machine-Dapp
A Dapp that uses test ethers to buy donuts in a Vending Machine.

 clone vending-machine project
   <p><code>git clone https://github.com/cvang9/Vending-Machine-Dapp.git
  </code></p>
  
------------

### 1. Accept Coins

_As a vendor_  
_I want a vending machine that accepts ethers 
_So that I can collect money from the customer_  

The vending machine will accept valid ethers and reject invalid one (Failed Txns).  When a
valid ether is inserted the amount of the coin will be added to the current amount and the display will be updated.
When there are no ethers inserted, the machine displays 0 donuts (by default).  

NOTE: There are Total Supply of only 100 Donuts and each donut is of 2 Ethers

--------------
### 2. Select Number of Donuts

_As a vendor_  
_I want Donut 
_So that I can give them an incentive to put money in the machine_  

there are 100 donuts we can buy and it will display the no. of donuts you buyed.

-----------
### 3. Make Change

_As a vendor_  
_I want customers to receive correct change_  
_Well, You forgets that This is a Dapp and every thing adds on blockchain is immutable

NO chance to revert donut.

------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
