# Wallet Information Dapp

[Live Demo](https://aki-anz.github.io/walletinfo-app/) This app is written with React and the Ethers library where users can log in with MetaMask and then see their connected wallet address and balance.

## React Library

The front end is developed with React where there is a button from the Material UI library, to let user log in with MetaMask.

Only after checking the Ethereum API injected into the browser with MetaMask, the app will show the user wallet address and the amount of Eth is in their balance.

## Ethers Library

The address and balance are retrieved via api calls from the front end with functions from the ethers library to the ethereum network. Then, the data is stored in React hooks and presented on the app.

The Provider read only object from the ethers library is used and the getBalance() and getAddress() methods are called to retrieve information from user account, i.e. address.
