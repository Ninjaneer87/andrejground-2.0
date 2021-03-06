const emailValidationPattern = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

export const scrollTopClick = () => setTimeout(() => window.scrollTo(0, 0), 0);

export const checkValidity = (value, rules) => {
    if (!rules) return true;
    let isValid = true;
    let message = '';
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) {
            message = 'Ovo polje je obavezno';
            return { isValid, message }
        }
    }
    if (rules.email) {
        isValid = value.match(emailValidationPattern) && isValid;
        message = !isValid && 'Unesite ispravan email';
    }
    return { isValid, message };
}

export function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        return true;
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        return true;
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
        return false;
    }
}