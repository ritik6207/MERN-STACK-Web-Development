async function randomOutCome() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("success");
        } else {
            reject("faild");
        }
    });
}

const handleOutCome = async () => {
    try {
        const result = await randomOutCome();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

handleOutCome();