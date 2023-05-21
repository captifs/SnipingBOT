import { BigNumber } from "bignumber.js";
import Web3 from "web3";

export const databaseName = 'top100storage.db';

export const approveInfinity = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const approveSafeInfinity = '2157920892373161954235709850086879078532699846656405';

export const DustLimit = new BigNumber(Web3.utils.toWei('0.015', 'ether'));

export const ethereumChains = [
    
    {
    id: 'binance',
    name: 'Binance Smart Chain (BSC)',
    slug: "BSC",
    logo: './assets/bsc.png',
    scanLogo: './assets/bscscan.png',
    router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    rcpAddress: 'https://bsc-dataseed1.ninicoin.io/',
    wCoin: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    testContract: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    contractExplorer: (address: string) => `https://bscscan.com/token/${address}`,
    chartLink:  (address: string) => `https://poocoin.app/tokens/${address}`,
    swapLink:  (address: string) => `https://poocoin.app/tokens/${address}`
  },
  {
    id: 'ethereum',
    name: 'Ethereum (ETH)',
    slug: "ETH",
    logo: './assets/ether.png',
    scanLogo: './assets/etherscan.png',
    router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    rcpAddress: 'https://cloudflare-eth.com/',
    wCoin: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    testContract: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
    contractExplorer: (address: string) => `https://etherscan.io/address/${address}`,
    chartLink:  (address: string) =>  `https://ethplorer.io/address/${address}#chart=candlestick`,
    swapLink:  (address: string) => `https://app.1inch.io/#/1/classic/swap/ETH/${address}`
  }, {
    id: 'polygon',
    name: 'Polygon (MATIC)',
    slug: "MATIC",
    logo: './assets/matic.png',
    scanLogo: './assets/none.png',
    router: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    factory: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
    rcpAddress: 'https://rpc-mainnet.matic.quiknode.pro',
    wCoin: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    testContract: '0xa8fcee762642f156b5d757b6fabc36e06b6d4a1a',
    contractExplorer: (address: string) => `https://polygonscan.com/address/${address}`,
    chartLink:  (address: string) => `https://polygon.poocoin.app/tokens/${address}`,
    swapLink:  (address: string) => `https://polygon.poocoin.app/tokens/${address}`
  },
  {
    id: 'cth',
    name: 'cTH (cheapEthereum)',
    slug: "cTH",
    logo: './assets/cth.png',
    scanLogo: './assets/none.png',
    router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    rcpAddress: "https://rpc.cheapeth.org/rpc",
    wCoin: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    testContract: '0xa34273ce752f5a8e926fa213bb08728b2387e8f5',
    contractExplorer: (address: string) => `http://expedition.cheapeth.org/address/${address}?rpcUrl=https%3A%2F%2Frpc.cheapeth.org%2Frpc`,
    chartLink:  (address: string) => `https://cheapswap.io/#/swap?outputCurrency=${address}`,
    swapLink:  (address: string) => `https://cheapswap.io/#/swap?outputCurrency=${address}`
  },
  
  {
    id: 'dth',
    name: 'devETH',
    slug: "devETH",
    logo: './assets/deveth.png',
    scanLogo: './assets/none.png',
    router: "0xab06aD5E30c039c0fb628fe8598e569Fb6B97fdc",
    factory: "0x85fA4b9d57A6e27e2c60796893f2007e0a081FC8",
    rcpAddress: "https://rpc.deveth.org",
    wCoin: '0xe5092b565b5119fa0860b0016d9E4cCe9cAB210E',
    testContract: '0xe758616f5f4db08398d88a9cd309397de16cdcdd',
    contractExplorer: (address: string) => `https://explore.deveth.org/account/${address}`,
    chartLink:  (address: string) => `https://www.devethswap.de/#/swap?outputCurrency=${address}`,
    swapLink:  (address: string) => `https://www.devethswap.de/#/swap?outputCurrency=${address}`
  }  
  
  ];