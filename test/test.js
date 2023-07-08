const SupplyChain = artifacts.require('SupplyChain');

contract('SupplyChain', (accounts) => {
  let supplyChainInstance;

  before(async () => {
    supplyChainInstance = await SupplyChain.deployed();
  });

  it('should assign a ranking partner and record answers', async () => {
    const rankingPartnerAddress = accounts[0]; // Assuming the first account is the ranking partner's address

    // Assign the ranking partner to answer the survey
    await supplyChainInstance.assignRankingPartner(rankingPartnerAddress);

    // Record the answers for the ranking partner
    const committed = true;
    const riskFound = false;
    const commitmentChanged = true;
    const newsUpdated = false;
    const hasBackupPlan = true;
    await supplyChainInstance.recordAnswers(
      rankingPartnerAddress,
      committed,
      riskFound,
      commitmentChanged,
      newsUpdated,
      hasBackupPlan
    );

    // Retrieve the ranking partners
    const rankingPartners = await supplyChainInstance.getRankingPartners();
    assert.equal(rankingPartners.length, 1);
    assert.equal(rankingPartners[0], rankingPartnerAddress);
  });
});
