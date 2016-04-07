import "MathLib.sol";

contract A {
  function testTrue() returns(bool){
    return MathLib.and(true, true);
  }
}
