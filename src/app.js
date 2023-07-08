
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

const contractAddress = "0xf87d649b1F7E2B04FF724C3841A0bC5338EFf295"; // Replace with the actual deployed contract address
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasBackupPlan",
        "type": "bool"
      }
    ],
    "name": "BackupPlanRecorded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "commitmentChanged",
        "type": "bool"
      }
    ],
    "name": "CommitmentChangedStatusRecorded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "committed",
        "type": "bool"
      }
    ],
    "name": "CommitmentStatusRecorded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "riskFound",
        "type": "bool"
      }
    ],
    "name": "RiskFoundStatusRecorded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "newsUpdated",
        "type": "bool"
      }
    ],
    "name": "UpdatedNewsRecorded",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "partners",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "committed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "riskFound",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "commitmentChanged",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "newsUpdated",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "hasBackupPlan",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "score",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "assigned",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "rankingPartners",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      }
    ],
    "name": "assignRankingPartner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "committed",
        "type": "bool"
      }
    ],
    "name": "recordCommitmentStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "riskFound",
        "type": "bool"
      }
    ],
    "name": "recordRiskFoundStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "commitmentChanged",
        "type": "bool"
      }
    ],
    "name": "recordCommitmentChangedStatus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "newsUpdated",
        "type": "bool"
      }
    ],
    "name": "recordUpdatedNews",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "partnerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "hasBackupPlan",
        "type": "bool"
      }
    ],
    "name": "recordBackupPlan",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getRankingPartners",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

let supplyChainContract;
let currentAccount;

async function initContract() {
  // Check if MetaMask is installed and connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    // Request MetaMask to connect
    await window.ethereum.enable();

    const accounts = await web3.eth.getAccounts();
    currentAccount = accounts[0];
    web3.eth.defaultAccount = currentAccount;

    supplyChainContract = new web3.eth.Contract(contractABI, contractAddress);
    console.log("Contract initialized with current account:", currentAccount);

    // Trigger the displayRankingPartners function on page load
    await displayRankingPartners();
  } else {
    console.log("Please install and connect to MetaMask.");
  }
}

// Function to record the ranking partner's answers
async function submitAnswers(refreshRankingPartners = true) {
  // Check if MetaMask is connected
  if (!window.ethereum || !window.ethereum.selectedAddress) {
    console.log("Please connect to MetaMask.");
    return;
  }

  const committed = document.getElementById("committed").value === "Yes";
  const riskFound = document.getElementById("riskFound").value === "Yes";
  const commitmentChanged = document.getElementById("commitmentChanged").value === "Yes";
  const newsUpdated = document.getElementById("newsUpdated").value === "Yes";
  const hasBackupPlan = document.getElementById("hasBackupPlan").value === "Yes";

  try {
    const batch = new web3.BatchRequest();
    const contractMethod = supplyChainContract.methods;

    batch.add(
      contractMethod.recordCommitmentStatus(currentAccount, committed).send.request({ from: currentAccount }),
      contractMethod.recordRiskFoundStatus(currentAccount, riskFound).send.request({ from: currentAccount }),
      contractMethod.recordCommitmentChangedStatus(currentAccount, commitmentChanged).send.request({ from: currentAccount }),
      contractMethod.recordUpdatedNews(currentAccount, newsUpdated).send.request({ from: currentAccount }),
      contractMethod.recordBackupPlan(currentAccount, hasBackupPlan).send.request({ from: currentAccount })
    );

    await batch.execute();

    console.log("Answers submitted successfully!");

    if (refreshRankingPartners) {
      // Refresh the list of ranking partners and their answers
      await displayRankingPartners();
    }
  } catch (error) {
    console.error("Error submitting answers:", error);
  }
}
// Function to retrieve the list of ranking partners
async function getRankingPartners() {
  try {
    const rankingPartners = await supplyChainContract.methods.getRankingPartners().call();
    return rankingPartners;
  } catch (error) {
    console.error("Error retrieving ranking partners:", error);
    return [];
  }
}

// Function to retrieve the answers of a ranking partner
async function getPartnerAnswers(partnerAddress) {
  try {
    const partner = await supplyChainContract.methods.partners(partnerAddress).call();
    return {
      committed: partner.committed,
      riskFound: partner.riskFound,
      commitmentChanged: partner.commitmentChanged,
      newsUpdated: partner.newsUpdated,
      hasBackupPlan: partner.hasBackupPlan,
    };
  } catch (error) {
    console.error(`Error retrieving answers for partner ${partnerAddress}:`, error);
    return {};
  }
}


async function checkBlockInfo() {
  try {
    const latestBlock = await web3.eth.getBlock('latest');
    const blockNumber = latestBlock.number;
    const blockHash = latestBlock.hash;
    const blockTimestamp = new Date(latestBlock.timestamp * 1000).toUTCString();

    const account = web3.eth.defaultAccount || 'Not Connected';

    alert(`Block Number: ${blockNumber}\nBlock Hash: ${blockHash}\nBlock Timestamp: ${blockTimestamp}\n\nContract Address: ${contractAddress}\nWallet Address: ${account}`);
  } catch (error) {
    console.error('Error checking block info:', error);
    alert('Error checking block info. Please check the console for details.');
  }
}
// Call the initContract function on page load
window.addEventListener("load", () => {
  initContract();
});

