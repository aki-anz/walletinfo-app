import { useState } from 'react';
import './WalletCard.css';
import Button from '@mui/material/Button';
import {ethers} from 'ethers';
import Eth from './assets/eth.png';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectHandler = () => {
        if(window.ethereum) {
          provider.send("eth_requestAccounts", []).then(async () => {
            let signer =  await provider.getSigner();
            walletHandler(signer);
          });
        } else {
            setErrorMessage("Please install MetaMask before using the App.");
        }
    }

    const walletHandler = async (newAccount) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
        const balance = await newAccount.getBalance();
        setUserBalance(ethers.utils.formatEther(balance));
    }

    return (
        <div className='wallet-card'>
            <h3 className='title'>A Dapp that can showcase your wallet information</h3>
            <img src={Eth} className='logo' alt='logo'/>
            <Button 
                style={{background: defaultAccount ? 'green' : 'blue',
                        color: 'white'
                            }}
                onClick={connectHandler}
                >
                    {defaultAccount ? 'success' : 'connect'}
                    </Button>
        <div className='display-account'>
            <h4>Address: {defaultAccount}</h4>
            <div className='display-balance'>
                <h4>Balance: {userBalance}</h4>
            </div>
        </div>
        {errorMessage}
        </div>
    );
}

export default WalletCard;