describe("arrangement", function() {
  var testCases = [

    {
      n : 1,
      r : 1,
      arr : 1
    },
    {
      n : 2,
      r : 2,
      arr : 2
    }
  ];
  testCases.forEach(function(tab){
    it("should returns " + tab.n + " when n = " + tab.r, function() {
      var result = Util.arrangement(tab.r,testCases.r);
      expect(result).toEqual(tab.arrangement);
  })
})


});
