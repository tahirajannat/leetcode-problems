var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = stack[stack.length - 1];
        console.log(char);
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else if (
            (char == '(' && s[i] == ')') ||
            (char == '{' && s[i] == '}') ||
            (char == '[' && s[i] == ']')
        ) {
            stack.pop();
        } else return false;
    }
    return stack.length ? false : true;
};

// const s = '()';
const s = '()[]{}';
// const s = '(]';
console.log('valid: ', isValid(s));
