
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
  // Check if Metamask is installed and connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    // Request Metamask to connect
    await window.ethereum.enable();

    const accounts = await web3.eth.getAccounts();
    currentAccount = accounts[0];
    web3.eth.defaultAccount = currentAccount;

    supplyChainContract = new web3.eth.Contract(contractABI, contractAddress);
    console.log("Contract initialized with current account:", currentAccount);

    // Trigger the displayRankingPartners function on page load
    await displayRankingPartners();
  } else {
    console.log("Please install and connect to Metamask.");
  }
}

// Function to record the ranking partner's answers
async function submitAnswers(refreshRankingPartners = true) {
// Check if Metamask is connected
if (!window.ethereum || !window.ethereum.selectedAddress) {
  console.log("Please connect to Metamask.");
  return;
}

const committed = document.getElementById("committed").value === "Yes";
const riskFound = document.getElementById("riskFound").value === "Yes";
const commitmentChanged = document.getElementById("commitmentChanged").value === "Yes";
const newsUpdated = document.getElementById("newsUpdated").value === "Yes";
const hasBackupPlan = document.getElementById("hasBackupPlan").value === "Yes";

try {
  await supplyChainContract.methods
    .recordCommitmentStatus(currentAccount, committed)
    .send({ from: currentAccount });
  await supplyChainContract.methods
    .recordRiskFoundStatus(currentAccount, riskFound)
    .send({ from: currentAccount });
  await supplyChainContract.methods
    .recordCommitmentChangedStatus(currentAccount, commitmentChanged)
    .send({ from: currentAccount });
  await supplyChainContract.methods
    .recordUpdatedNews(currentAccount, newsUpdated)
    .send({ from: currentAccount });
  await supplyChainContract.methods
    .recordBackupPlan(currentAccount, hasBackupPlan)
    .send({ from: currentAccount });

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

// Function to display the list of ranking partners and their answers
async function displayRankingPartners() {
  const rankingPartners = await getRankingPartners();

  const rankingPartnersList = document.getElementById("rankingPartnersList");
  rankingPartnersList.innerHTML = ""; // Clear the list

  for (const partnerAddress of rankingPartners) {
    const partnerAnswers = await getPartnerAnswers(partnerAddress);

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Partner: ${partnerAddress}</strong><br>
      Committed: ${partnerAnswers.committed}<br>
      Risk Found: ${partnerAnswers.riskFound}<br>
      Commitment Changed: ${partnerAnswers.commitmentChanged}<br>
      News Updated: ${partnerAnswers.newsUpdated}<br>
      Has Backup Plan: ${partnerAnswers.hasBackupPlan}
    `;

    rankingPartnersList.appendChild(listItem);
  }
}async function displayRankingPartners(refreshRankingPartners = true) {
  const rankingPartners = await getRankingPartners();

  const rankingPartnersList = document.getElementById("rankingPartnersList");
  rankingPartnersList.innerHTML = ""; // Clear the list

  for (const partnerAddress of rankingPartners) {
    const partnerAnswers = await getPartnerAnswers(partnerAddress);

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Partner: ${partnerAddress}</strong><br>
      Committed: ${partnerAnswers.committed}<br>
      Risk Found: ${partnerAnswers.riskFound}<br>
      Commitment Changed: ${partnerAnswers.commitmentChanged}<br>
      News Updated: ${partnerAnswers.newsUpdated}<br>
      Has Backup Plan: ${partnerAnswers.hasBackupPlan}
    `;

    rankingPartnersList.appendChild(listItem);
  }

  if (refreshRankingPartners) {
    // Recall the submitAnswers function to include updates from other ranking partners
    await submitAnswers(false);
  }
}


// Call the initContract function on page load
window.addEventListener("load", () => {
  initContract();
});

