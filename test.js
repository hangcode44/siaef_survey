"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
`string${string}` |
    `string[${number}]` |
    `bytes${string}` |
    `bytes[${number}]` |
    `address[${number}]` |
    `bool[${number}]` |
    `int${string}` |
    `int[${number}]` |
    `uint${string}` |
    `uint[${number}]` |
    `tuple[]` |
    `tuple[${number}]`;
const SupplyChain = artifacts.require('SupplyChain');
const runTest = async () => {
    try {
        // Connect to the local Ethereum network
        const web3 = new web3_1.default('http://localhost:8545');
        // Get the contract instance
        const supplyChain = await SupplyChain.deployed();
        // Assign the ranking partner
        const rankingPartnerAddress = 'RANKING_PARTNER_ADDRESS'; // Replace with the ranking partner's Ethereum address
        await supplyChain.methods.assignRankingPartner(rankingPartnerAddress).send({ from: rankingPartnerAddress });
        // Record survey answers
        const randomBoolean = () => Math.random() < 0.5;
        await supplyChain.methods.recordCommitmentStatus(rankingPartnerAddress, randomBoolean()).send({ from: rankingPartnerAddress });
        await supplyChain.methods.recordRiskFoundStatus(rankingPartnerAddress, randomBoolean()).send({ from: rankingPartnerAddress });
        await supplyChain.methods.recordCommitmentChangedStatus(rankingPartnerAddress, randomBoolean()).send({ from: rankingPartnerAddress });
        await supplyChain.methods.recordUpdatedNews(rankingPartnerAddress, randomBoolean()).send({ from: rankingPartnerAddress });
        await supplyChain.methods.recordBackupPlan(rankingPartnerAddress, randomBoolean()).send({ from: rankingPartnerAddress });
        console.log('Survey answers submitted successfully!');
    }
    catch (error) {
        console.error('Error:', error);
    }
};
runTest();
