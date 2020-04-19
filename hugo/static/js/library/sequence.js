function Sequence(sela, selb, selc, seld, sele, self, selg, selh, seli, select){
  this.seqa = "url('" + sela + "')";
  this.seqb = "url('" + selb + "')";
  this.seqc = "url('" + selc + "')";
  this.seqd = "url('" + seld + "')";
  this.seqe = "url('" + sele + "')";
  this.seqf = "url('" + self + "')";
  this.seqg = "url('" + selg + "')";
  this.seqh = "url('" + selh + "')";
  this.seqi = "url('" + seli + "')";
  this.target = select
  var time = 0,
      timeb = 0,
      interval,
      intervalb,
      value = 1;

    $(this.target).mouseenter(function() {
  		value = 1;
  	}).mouseleave(function() {
  		value = 0;
  	});

  /*can have its own time sequence*/
  doTimer();

  function doTimer() {
  	/*
  	clearInterval(interval);
  	interval = false;
  	*/
  	interval = setInterval(floWit, 100);
  	time = 0;
  }

  function floWit(){
  	if (time >= 4) {
  		time = 2;
  	} else {
  		time++
  	}
  	flow();
  }

  function flowBack() {
  	timeb++
  }


  function flow() {
  	/*puts images into array*/

  	let sequence = [this.seqa, this.seqb, this.seqc, this.seqd, this.seqe, this.seqf, this.seqg, this.seqh, this.seqi];
  	/*checks to see if mouse is over dom element*/
  	if( value === 0 ){
  		clearInterval(intervalb);
  		timeb = 0;
  		intervalb = setInterval(flowBack, 100);
  		$(this.target).css("background-image", sequence[time]);
  	} else if( value === 1) {
  		/*reverses image flow, so flames die down*/
  			var rev = 4-timeb;
  			if (rev >= 1){
  				$(this.target).css("background-image", sequence[rev]);
  			} else {
  				$(this.target).css("background-image", "none");
  			}
  	}
  }
}
