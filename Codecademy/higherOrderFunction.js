const higherOrderFunc = param => {
    param();
    return `I just returned ${param.name} as a callback function!`
}

const anotherFunc = () => {
    return `I'm being invoked by the higher-order function!`;
}

console.log(higherOrderFunc(anotherFunc));

higherOrderFunc(() => {
    for (let i = 0; i<=10; i++){
        console.log(i);
    }
});
