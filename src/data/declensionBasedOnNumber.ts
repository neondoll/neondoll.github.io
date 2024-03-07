const declensionBasedOnNumber = (number: number, form1: string, form2: string, from3: string): string => {
    if (number % 100 >= 11 && number % 100 <= 19 || number % 10 >= 5 || number % 10 === 0) {
        return `${number} ${from3}`;
    } else if (number % 10 >= 2 && number % 10 <= 4) {
        return `${number} ${form2}`;
    } else if (number % 10 === 1) {
        return `${number} ${form1}`;
    } else {
        return String(number);
    }
};

export default declensionBasedOnNumber;