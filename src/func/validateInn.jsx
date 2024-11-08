export function validateInn(inn) {
    let errorStateInn = '';
    let result = false;

    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }

    if (!inn.length) {
        errorStateInn = 'Введите корректные данные';
    } else if (/[^0-9]/.test(inn)) {
        errorStateInn = 'ИНН может состоять только из цифр';
    } else if (![10, 12].includes(inn.length)) {
        errorStateInn = 'ИНН может состоять только из 10 или 12 цифр';
    } else {

        let checkDigit = (inn, coefficients) => {
            let sum = 0;
            for (let i = 0; i < coefficients.length; i++) {
                sum += coefficients[i] * inn[i];
            }
            return parseInt(sum % 11 % 10);
        };

        if (inn.length === 10) {
            let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (n10 === parseInt(inn[9])) {
                result = true;
            }
        }

        if (inn.length === 12) {
            let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
                result = true;
            }
        }

        if (!result) {
            errorStateInn = 'Неправильное контрольное число';
        }
    }

    return {
        errorStatus: result,
        errorElement: errorStateInn
    };
}
