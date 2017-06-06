

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){
    var teamoneButton = $("#teamone-shoot");
    var teamtwoButton = $("#teamtwo-shoot");
    var teamOneNumshots = $("#teamone-numshots");
    var teamOneHits = $("#teamone-numhits");
    var teamTwoButton = $("#teamtwo-shoot");
    var teamTwoNumshots = $("#teamtwo-numshots");
    var teamTwoHits = $("#teamtwo-numhits");
    var resetButton = $("#reset");
    var resetCount = $("#num-resets");
    var background = $("#bodycolor");

    teamoneButton.click(function(){
      console.log("team one clicked")

    var newTeamOneNumshots = parseInt(teamOneNumshots.html())+1;
    teamOneNumshots.html(newTeamOneNumshots);

    if (newTeamOneNumshots >= 0) {
      var randomNumber = Math.random() >= 0.5;
      if (randomNumber == 1) {
        var newTeamOneHits = parseInt(teamOneHits.html()) + 1;
        teamOneHits.html(newTeamOneHits);
        background.css({
          background: "pink"
        });

      }
    }

  }); //closes team one hits

  teamTwoButton.click(function(){
    console.log("team one clicked")

  var newTeamTwoNumshots = parseInt(teamTwoNumshots.html())+1;
  teamTwoNumshots.html(newTeamTwoNumshots);

  if (newTeamTwoNumshots >= 0) {
    var randomNumber = Math.random() >= 0.5;
    if (randomNumber == 1) {
      var newTeamTwoHits = parseInt(teamTwoHits.html()) + 1;
      teamTwoHits.html(newTeamTwoHits);
      background.css({
        background: "blue"
      });
    }
  }

}); //closes team two hits

resetButton.click(function() {
  console.log("reset clicked");

  var newResetCount = parseInt(resetCount.html()) + 1;
  resetCount.html(newResetCount);

  var resetTeamOneNumshots = parseInt(teamOneNumshots.html()) * 0;
  teamOneNumshots.html(resetTeamOneNumshots);

  var resetTeamOneHits = parseInt(teamOneHits.html()) * 0;
  teamOneHits.html(resetTeamOneHits);

  var resetTeamTwoNumshots = parseInt(teamTwoNumshots.html()) * 0;
  teamTwoNumshots.html(resetTeamTwoNumshots)

  var resetTeamTwoHits = parseInt(teamTwoHits.html()) * 0;
  teamTwoHits.html(resetTeamTwoHits);


})




  }); //jq

})(); //self
