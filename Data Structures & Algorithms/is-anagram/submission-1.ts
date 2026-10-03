class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length === t.length) {
            const sortedS = [...s].sort().join("");
            const sortedT = [...t].sort().join("");

            for (let i = 0; i < sortedS.length; i++) {
                if(sortedT[i] !== sortedS[i]) return false;
        }
    } else {
        return false;
    }
    return true
}
}