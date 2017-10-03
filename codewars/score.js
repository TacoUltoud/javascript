function studentscore(){
  var n = 10;
  var score = [];
  for (var j = 0;j < n;j++){
    score[j] = Math.round(Math.random() * 100);
    //console.log(score[j]);
  }
  //console.log(score);
  var deArray = score.sort(function(a,b){return (a-b)});
  console.log(deArray);
  var inArray = score.sort(function(a,b){return (b-a)});
  //console.log(deArray);
  console.log(inArray);
  console.log("minScore = " + Math.min.apply(null,score));
  console.log("maxScore = " + Math.max.apply(null,score));
  var n = score.length;
  if(n % 2) console.log("median = " + score[(n - 1) / 2]);
  else{
    var tmp = (score[n / 2] + score[n / 2 - 1]) / 2;
    console.log("median = " + tmp);  
  }
  var sum = 0;
  for(var i = 0;i < n;i++){
    sum += score[i];
  }
  avg = sum / n;
  var sum2 = 0;
  console.log("average = " + avg);
  for(var j = 0;j < n;j++){
    var tmp2 = score[j] - avg;
    tmp2 *= tmp2;
    sum2 += tmp2;
  }
  var std = Math.sqrt(sum2 / (n - 1));
  console.log("standard  deviation = " + std);
}

studentscore();