export function latinMode() {

    const table = {
        "ae": "æ",
        "a;": "ā",
        "e;": "ē",
        "i;": "ī",
        "o;": "ō",
        "u;": "ū",
        "Ae": "Æ",
        "AE": "Æ",
        "A;": "Ā",
        "E;": "Ē",
        "I;": "Ī",
        "O;": "Ō",
        "U;": "Ū",
    }

    function transformer(str) {
        let transformedStr = str;
        // Parse string and returned transformed thing
        for (const [key, value] of Object.entries(table)) {
            transformedStr = transformedStr.replaceAll(key, value);
        }
        return transformedStr;
    }

    return {
        info: "Type semicolon (;) after a vowel for a long vowel",
        transformer: transformer,
    }
}