function uefaEuro2016(teams, score) {
    var result = "";
    var won = "won"
    if(score[0] > score [1]){
      result = teams[0].toString() + " won!";
    } else if (score[1] > score [0]){
      result = teams[1].toString() + " won!";
    } else{
      result = "teams played draw"
    }
    console.log(won + won);
    console.log("At match " + teams[0] + " - " + teams[1] + " , " + result);
  }
  
  // the function should result in
  uefaEuro2016(['Germany', 'Ukraine'],[2, 0]); // "At match Germany - Ukraine, Germany won!"
  uefaEuro2016(['Belgium', 'Italy'],[0, 2]); // "At match Belgium - Italy, Italy won!"
  uefaEuro2016(['Portugal', 'Iceland'],[1, 1]); // "At match Portugal - Iceland, teams played draw."