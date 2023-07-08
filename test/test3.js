const SupplyChain = artifacts.require("SupplyChain");

module.exports = async function (callback) {
  try {
    // Get the deployed contract instance
    const supplyChain = await SupplyChain.deployed();

    // Assign the ranking partner
    const rankingPartnerAddress = "0xedc11a1c52779ffea9900098511190d805f1eb1e"; // Replace with the ranking partner's Ethereum address
    await supplyChain.assignRankingPartner(rankingPartnerAddress);

    // Record survey answers
    const randomBoolean = () => Math.random() < 0.5;

    await supplyChain.recordCommitmentStatus(rankingPartnerAddress, randomBoolean());
    await supplyChain.recordRiskFoundStatus(rankingPartnerAddress, randomBoolean());
    await supplyChain.recordCommitmentChangedStatus(rankingPartnerAddress, randomBoolean());
    await supplyChain.recordUpdatedNews(rankingPartnerAddress, randomBoolean());
    await supplyChain.recordBackupPlan(rankingPartnerAddress, randomBoolean());

    console.log("Survey answers submitted successfully!");

    callback();
  } catch (error) {
    console.error("Error:", error);
    callback(error);
  }
};
