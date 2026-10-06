class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        
        const map = new Map<string, string[]>();

   for (let i = 0; i < strs.length; i++) {
   let charactersOfCurrentWord = strs[i].split("")
    let sortedCharacters = charactersOfCurrentWord.sort()
    let joinedSortedString = sortedCharacters.join("")
    
    if (!map.has(joinedSortedString)) {
        map.set(joinedSortedString, [])
    } 
    map.get(joinedSortedString)!.push(strs[i])
   }



            

            return [...map.values()]
    }
}
