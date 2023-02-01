const data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

function getData (){
        for(const names of data ){
            console.log(names);
        }
}

let promise = new Promise((resolve, reject)=>{
    if(data != 0){
        resolve(getData());
    }else{
        reject("The data set is empty");
    }
})
.then(getData())
.catch((error)=>{
    console.log(error);
})