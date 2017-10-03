function norm(a){
  return Math.sqrt(inner_dot(a,a)) 
}

function distance(a,b){
  var sum = 0;
  for(let i = 0;i < a.length;i++){
    sum += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return Math.sqrt(sum); 
}

function inner_dot(a,b){
  var sum = 0;
  for(let i = 0;i < a.length;i++){
    sum += a[i] * b[i];
  }
  return sum;
}

function vector_angle(a,b){
  var idot = inner_dot(a,b)
  var norm_a = norm(a);
  var norm_b = norm(b);
  return idot / (norm_a * norm_b);
}

var skill = {
  idno1: ["TCP","java","c++","web","資料分析","資料庫規劃","程式設計"],
  idno2: ["資料分析","java","程式設計","c++"],
  idno3: ["web","設計","資料分析"],
  idno4: ["統計分析","心理輔導","人力資源管理","問卷設計","設計"],
  idno5: ["心理諮詢","設計","統計分析"]
}

// var corpus = ["TCP","java","c++","web","資料分析","資料庫規劃","程式設計","設計","統計分析","心理輔導","人力資源管理","問卷設計","心理諮詢"];

function build_corpus(obj){
  var res = [];
  for(let key in obj){
    for(let i = 0;i < obj[key].length;i++){
      if(!(res.includes(obj[key][i]))) res.push(obj[key][i]);
    }
  }
  return res;
}

corpus = build_corpus(skill);

function build_vsm(idno,comp){
  var tmp = [];
  for(let i = 0;i < comp.length;i++){
    if(idno.includes(comp[i])) tmp[i] = 1;
    else tmp[i] = 0;
  }
  return tmp;
}

function tf(vector){
  var sum = 0;
  for(let i = 0;i < vector.length;i++){
    sum += vector[i];
  }
  return vector.map(a => a/sum);
}

function idf(vector1,vector2,vector3,vector4,vector5){
  var res = [];
  for(let i = 0;i < vector1.length;i++){
    res[i] = Math.log10(5 / (vector1[i] + vector2[i] + vector3[i] + vector4[i] + vector5[i]));
  }
  return res;
}

function tf_idf(vector1,vector2){
  var res = [];
  for(let i = 0;i < vector1.length;i++){
    res[i] = vector1[i] * vector2[i]
  }
  return res;
}

function similarity(arr,vector){
  var res = [];
  for(let i = 0;i < arr.length;i++){
    res[i] = Math.round(vector_angle(arr[i],vector) * 1000000)/1000000;
  }
  return res;
}

var vsm1 = build_vsm(skill.idno1,corpus);
var vsm2 = build_vsm(skill.idno2,corpus);
var vsm3 = build_vsm(skill.idno3,corpus);
var vsm4 = build_vsm(skill.idno4,corpus);
var vsm5 = build_vsm(skill.idno5,corpus);
var tf1 = tf(vsm1);
var tf2 = tf(vsm2);
var tf3 = tf(vsm3);
var tf4 = tf(vsm4);
var tf5 = tf(vsm5);
var idff = idf(vsm1,vsm2,vsm3,vsm4,vsm5);
var tf_idf1 = tf_idf(tf1,idff);
var tf_idf2 = tf_idf(tf2,idff);
var tf_idf3 = tf_idf(tf3,idff);
var tf_idf4 = tf_idf(tf4,idff);
var tf_idf5 = tf_idf(tf5,idff);
var tf_idff = [tf_idf1,tf_idf2,tf_idf3,tf_idf4,tf_idf5];
var simi = [];
simi.push(similarity(tf_idff,tf_idf1));
simi.push(similarity(tf_idff,tf_idf2));
simi.push(similarity(tf_idff,tf_idf3));
simi.push(similarity(tf_idff,tf_idf4));
simi.push(similarity(tf_idff,tf_idf5));

// console.log(tf_idf1)
// console.log(tf_idf2)
// console.log(tf_idf3)
// console.log(tf_idf4)
// console.log(tf_idf5)

// console.log(vector_angle(tf_idf3,tf_idf3))
// console.log(similarity(tf_idff,tf_idf3))
console.log(simi);
// console.log(build_corpus(skill))
// console.log(build_vsm(skill.idno2,corpus))
// console.log(idf(vsm1,vsm2,vsm3,vsm4,vsm5));
// console.log(tf_idf(tf1,idff))