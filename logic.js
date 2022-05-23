class Process {
    constructor(name, length, starts) {
        this.name = name;
        this.length = length;
        this.starts = starts;
        this.result=[];
    }
}

const lengths=[7, 3, 9, 8, 10, 12, 6, 5];
const startTimes=[0, 2, 4, 12, 16, 22, 25, 28];
let amount=8;

const processArray=[];

for(var i=0;i<amount;i++){
    processArray.push(new Process(i, lengths[i], startTimes[i]));
}


let time=0;
let pass=0;
let quantum=5;

const line=[];

const ended=[];

do{
    console.log("Current time: ", time);

    if ((pass==quantum) && (line.length>0)){
        let temporal=line[0];
        line.shift();
        line.push(temporal);
        console.log("Element ",line[line.length-1].name, " moved to back of the line");
        pass=0;
    }

    if(processArray.length>0){
        processArray.forEach(element => {
            if(element.starts==time){
                line.push(element);
    
                let pos=processArray.indexOf(element);
                processArray.splice(pos, 1);

                console.log("Element ",line[line.length-1].name, " added to the line");
            }else{
            }
        });
    }
    console.log("Salgo");

    if(line.length>0){
        line[0].length--;
        line[0].result.push(1);
        pass++;
    
        if (line.length>0){
            line.forEach(element => {
                element.result.push(0);
            });
            line[0].result.pop();
        }

        if(line[0].length==0){
            ended.push(line[0]);
            line.shift();
            pass=0;
        }

        if(processArray.length>0){
            processArray.forEach(element => {
                if (element.starts>time){
                    element.result.push(2);
                }
            });
        }
        
    }

    time++;

}while(ended.length<amount);

ended.sort((a, b) => {
    return a.name - b.name;
});


ended.forEach(element => {
    console.log(element.name, element.result);
});

export default logic;