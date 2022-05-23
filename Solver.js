import SolverScreen from "./screens/SolverScreen";

const Solver = ({numProc, quantum, starts, durations}) => {


class Process {
    constructor(name, duration, starts) {
        this.name = name;
        this.duration = duration;
        this.starts = starts;
        this.result=[];
    }
}

//0 = Wait
//1 = Being processed
//2 = N/A

const processArray=[];

for(var i=0;i<numProc;i++){
    processArray.push(new Process(i, durations[i], starts[i]));
}

console.log('processArray', processArray)

let time=0;

//Tick per quantum
let pass=0;

//Processes in the waiting line
const line=[];

//Ended processes
const ended=[];

//This occurs every tick
do{
    console.log("Current time: ", time);

    //If a process has been executed for a quantum and there are elements in the waiting line
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

    //If there are processes in the waiting line
    if(line.length>0){
        line[0].duration--;
        line[0].result.push(1);
        pass++;
        
        //Add waiting tick for each waiting process
        line.forEach(element => {
            element.result.push(0);
        });
        line[0].result.pop();

        //If process[0] is done
        if(line[0].duration==0){
            ended.push(line[0]);
            //Delete from the array the element[0]
            line.shift();
            pass=0;
        }

        if(processArray.length>0){
            processArray.forEach(element => {
                if (element.starts>time){
                    //It hasn't started
                    element.result.push(2);
                }
            });
        }
        
    }

    time++;

}while(ended.length<numProc);

ended.sort((a, b) => {
    return a.name - b.name;
});


ended.forEach(element => {
    console.log(element.name, element.result);
});

return (
    <SolverScreen ended={ended}/>
)
}

export default Solver;