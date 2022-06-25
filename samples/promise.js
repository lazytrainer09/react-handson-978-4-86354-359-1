const promise = new Promise((resolve, reject) => {
  reject()
});

const inCaseOfSuccess = () => {
  console.log("resolove noticed");
};

const inCaseOfFailure = () => {
  console.log("reject noticed");
};

promise.then(inCaseOfSuccess).catch(inCaseOfFailure)
