export function pinyinMode() {
    // I wrote a simple custom "parser" here rather than using a generic find & replace.

    function transformer(str: string) {
        let transformedStr: string = "";
        // Iteratively build up transformed string

        // Look for integers 1-4 following "finals"
        // List of finals can be found here: http://pinyin.info/rules/initials_finals.html

        // "Buffer" of current syllable being built up
        let currentSyllable = "";

        const tones = [1, 2, 3, 4, 5];

        for (let i = 0; i < str.length; i++) {
            currentSyllable += str[i];
            if (i + 1 >= str.length) {
                // if we're at the end of input string, quit building current syllable
                transformedStr += currentSyllable;
            } else {
                // If current character is a tone marker [1-5], convert current
                // syllable to pinyin and append it to the transformed string
                if (str[i] in tones) {
                    // TODO Apply appropriate tone
                    transformedStr += currentSyllable;
                    currentSyllable = ""; // Clear current syllable
                }
            }
            // Otherwise, 
        }

        return transformedStr;
    }

    return {
        info: "Use integers 1-4 to specify tones, e.g. ma1 ma2 ma3 ma4. Type 'v' for 'ü'. Use ' to introduce a syllable break, as in ping2'an1 for 平安",
        transformer: transformer,
    }
}