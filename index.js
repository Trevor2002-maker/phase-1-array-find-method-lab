// code your solution here
let superbowlWin=(record)=>{
    let answer=record.find((item)=> item.result==="W");
    if(answer){
        return answer.year;
    }else{
        return undefined;
    }
}