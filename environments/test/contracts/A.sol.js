// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"testTrue","outputs":[{"name":"","type":"bool"}],"type":"function"}],
    binary: "606060405260938060106000396000f3606060405260e060020a60003504634e4fb1fa8114601a575b005b608a7f9f6ee0fc00000000000000000000000000000000000000000000000000000000606090815260016064819052608452600090730c059c383137d27b85bfc56d5da87d008974231790639f6ee0fc9060a4906020906044818660325a03f41560025750506040515191505090565b50604051602090f3",
    unlinked_binary: "606060405260938060106000396000f3606060405260e060020a60003504634e4fb1fa8114601a575b005b608a7f9f6ee0fc0000000000000000000000000000000000000000000000000000000060609081526001606481905260845260009073__MathLib_______________________________90639f6ee0fc9060a4906020906044818660325a03f41560025750506040515191505090565b50604051602090f3",
    address: "0xd27f39c4b5c51a77a65c03bce19f08500619f90d",
    generated_with: "2.0.6",
    contract_name: "A"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("A error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("A error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("A error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("A error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.A = Contract;
  }

})();
