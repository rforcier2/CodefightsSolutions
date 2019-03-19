palindromeRearranging = s => {
    let chars = [], count = 0, i, e;

    for(e of s){
      chars[e] = !chars[e]
    }

    for(i in chars){
      count += chars[i] % 2
    }
    
    return count == s.length % 2;
}
