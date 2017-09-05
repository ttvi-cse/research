function solution(input, markers){
    var s = 'apples, pears # and bananas\ngrapes\nbananas !apples';

    s = s.replace(/\s*#.*\n$/, '\n');
    
    console.log(s);
}
