class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map()

            for (let char of s) {
                map.set(char, (map.get(char) || 0) + 1);
            }

            for (let char of t) {
                if (!map.has(char)) return false;
                map.set(char, map.get(char) - 1)
                if (map.get(char) < 0) return false;
            }
        return true;
    }

}

// we need to count each character and make sure they appear the same amount of times, then we compare and return the result

// we do a loop that we raise the count, and subtract the count, that way if it's equal to 0, meaning each character appeared the same amount of times, returns true, confirming it is a anagram.
// else, false.