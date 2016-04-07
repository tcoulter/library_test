contract('MyTest', function(accounts) {
  it("should assert true", function(done) {
    var b = A.deployed();

    b.testTrue.call().then(function(result) {
      assert.isTrue(result);
    }).then(done).catch(done);

  });
});
