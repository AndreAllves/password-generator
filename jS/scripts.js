const generatPasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/!@#$%¨&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = () => {
    let password = "";
    const passwordLength = 10;
    const generators = [
        getLetterLowerCase, 
        getLetterUpperCase, 
        getNumber, 
        getSymbol
    ];

    // Garante que teremos pelo menos um caractere de cada tipo
    password += getLetterLowerCase();
    password += getLetterUpperCase();
    password += getNumber();
    password += getSymbol();

    // Completa o restante da senha
    for(let i = 4; i < passwordLength; i++) {
        const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
        password += randomGenerator();
    }

    // Embaralha os caracteres da senha
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

generatPasswordButton.addEventListener("click", generatePassword);


getLetterLowerCase();
getLetterUpperCase();

generatPasswordButton.addEventListener("click", () => {
generetePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})