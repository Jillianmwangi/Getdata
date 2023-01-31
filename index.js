

//function using callbacks:

const data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

const getData = (callback) => {
  setTimeout(() => {
    callback(data);
  }, 2000);
};

const displayData = (data) => {
  console.log(data);
};

getData(displayData);




//promise function


const data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const displayData = (data) => {
  console.log(data);
};

getData()
  .then(displayData)
  .catch((error) => {
    console.error(error);
  });
