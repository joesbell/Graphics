let sum=0;
function getNum(){
    sum++;
    postMessage(sum);
    setTimeout(getNum,1000)
}
getNum()