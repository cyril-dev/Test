describe("Arrangement", function() {
  var i = [
	  {
	  	n:0,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:3,
	  	r:2,
	  	res:6
	  },
	  {
	  	n:1,
	  	r:0,
	  	res:1
	  },
	  {
	  	n:2,
	  	r:2,
	  	res:2
	  },
	  {
	  	n:10,
	  	r:8,
	  	res: 1814400
	  }
  ];
  i.forEach(function(j){
  	it("Pour n=" + j.n + " et r=" + j.r +" alors res=" + j.res, function() {
    	var result = Util.arrangement(j.n,j.r);
    	expect(result).toEqual(j.res);
  	})
  })

  

});
