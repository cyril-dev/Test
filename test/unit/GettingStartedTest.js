describe("factorial", function() {
  var testCases = [
    {
      n : 0,
      factorial : 1
    },
    {
      n : 1,
      factorial : 1
    },
    {
      n : 2,
      factorial : 2
    },
    {
      n : 3,
      factorial : 6
    },
    {
      n : 4,
      factorial : 24
    }


  ];
  testCases.forEach(function(testCases){
    it("should returns " + testCases.factorial + "when n = "+ testCases.n, function() {
      var result = Util.factorial(testCases.n);
      expect(result).toEqual(testCases.factorial);
  })
})


});
