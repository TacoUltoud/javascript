function add_matrix(A,B){
  var res = [];
  if((A.length === B.length) && (A[0].length === B[0].length)){
    for(let i = 0;i < A.length;i++){
      res[i] = [];
      for(let j = 0;j < A[0].length;j++){
        res[i][j] = A[i][j] + B[i][j];
      }
    }
    return res; 
  }
  else return "incompatible shape";
}

function sub_matrix(A,B){
  var res = [];
  if((A.length === B.length) && (A[0].length === B[0].length)){
    for(let i = 0;i < A.length;i++){
      res[i] = [];
      for(let j = 0;j < A[0].length;j++){
        res[i][j] = A[i][j] - B[i][j]
      }
    }
    return res;
  }
  else return "incompatible shape";
}

function multi_scalar_matrix(A,s){
  var res = [];
  for(let i = 0;i < A.length;i++){
    res[i] = [];
    for(let j = 0;j < A[0].length;j++){
      res[i][j] = s * A[i][j];
    }
  } 
  return res;
}

function transpose_matrix(A){
  var res = [];
  for(let i = 0;i < A[0].length;i++){
    res[i] = [];
    for(let j = 0;j < A.length;j++){
      res[i][j] = A[j][i];
    }
  } 
  return res;
}

// C(ij) = A(ik) * B(kj)
function multi_matrix(A,B){
  var res = [];
  if(A[0].length === B.length){
    for(let i = 0;i < A.length;i++){
      res[i] = [];
      for(let j = 0;j < B[0].length;j++){
        var tmp = 0;
        for(let k = 0;k < A[0].length;k++){
          tmp += A[i][k] * B[k][j];
        }
        res[i][j] = tmp;
      }
    }
    return res;
  }
  else return "incompatible shape";
}

function expand(arr,h,k){
  var tmp = [[h,0],[0,k]];
  var res = multi_matrix(arr,tmp);
  return res;
}

function rotate(arr,angle){
  var tmp = angle * Math.PI / 180;
  var cos = Math.cos(tmp);
  var sin = Math.sin(tmp);
  var rot = [[cos,-sin],[sin,cos]];     // C = R * B
  return multi_matrix(rot,arr);
  // var rot = [[cos,sin],[-sin,cos]];  // C = B * R
  // return multi_matrix(arr,rot);
}

// console.log(add_matrix([[4,-2,3],[0,5,-2]],[[0,2,-4],[1,3,1]]));
// console.log(sub_matrix([[4,-2,3],[0,5,-2]],[[0,2,-4],[1,3,1]]));
// console.log(multi_scalar_matrix([[4,-2,3],[0,5,-2]],5));
// console.log(transpose_matrix([[4,-2,3],[0,5,-2]]))
// console.log(multi_matrix([[1,2,3],[4,5,6]],[[2,3],[4,5],[6,7]]))
// console.log(expand([[0,0],[1,0],[1,1],[0,1]],3,0.5));
// console.log(rotate([[2],[-4]],60))
// console.log(distance([0,2,2],[2,0,1]));