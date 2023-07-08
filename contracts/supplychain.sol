pragma solidity 0.5.16;

contract SupplyChain {
    struct Partner {
        string name;
        bool committed;
        bool riskFound;
        bool commitmentChanged;
        bool newsUpdated;
        bool hasBackupPlan;
        uint8 score;
        bool assigned;
    }

    mapping(address => Partner) public partners;
    address[] public rankingPartners;

    event AnswersRecorded(
        address indexed partnerAddress,
        bool committed,
        bool riskFound,
        bool commitmentChanged,
        bool newsUpdated,
        bool hasBackupPlan
    );

    // Assigns a ranking partner to answer the survey
    function assignRankingPartner(address partnerAddress) public {
        require(!partners[partnerAddress].assigned, "Partner is already assigned");
        partners[partnerAddress].assigned = true;
        rankingPartners.push(partnerAddress);
    }

    // Records the ranking partner's answers
    function recordAnswers(
        address partnerAddress,
        bool committed,
        bool riskFound,
        bool commitmentChanged,
        bool newsUpdated,
        bool hasBackupPlan
    ) public {
        require(partners[partnerAddress].assigned, "Partner is not assigned");
        partners[partnerAddress].committed = committed;
        partners[partnerAddress].riskFound = riskFound;
        partners[partnerAddress].commitmentChanged = commitmentChanged;
        partners[partnerAddress].newsUpdated = newsUpdated;
        partners[partnerAddress].hasBackupPlan = hasBackupPlan;

        emit AnswersRecorded(
            partnerAddress,
            committed,
            riskFound,
            commitmentChanged,
            newsUpdated,
            hasBackupPlan
        );
    }

    // Retrieves the ranking partners
    function getRankingPartners() public view returns (address[] memory) {
        return rankingPartners;
    }
}
