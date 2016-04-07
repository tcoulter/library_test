// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"a","type":"bool"},{"name":"b","type":"bool"}],"name":"and","outputs":[{"name":"c","type":"bool"}],"type":"function"}],
    binary: "606060405260488060106000396000f36503001f9578ce50606060405260e060020a60003504639f6ee0fc81146024575b6007565b603e600435602435600082801560375750815b9392505050565b6060908152602090f3",
    unlinked_binary: "606060405260488060106000396000f36503001f9578ce50606060405260e060020a60003504639f6ee0fc81146024575b6007565b603e600435602435600082801560375750815b9392505050565b6060908152602090f3",
    address: "0x0c059c383137d27b85bfc56d5da87d0089742317",
    generated_with: "2.0.6",
    contract_name: "MathLib"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MathLib error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("MathLib error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MathLib error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MathLib error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MathLib = Contract;
  }

})();
