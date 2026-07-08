class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let ans = 0
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
                let a = stack.pop()
                let b = stack.pop()
                a = parseInt(a)
                b = parseInt(b)
                switch (tokens[i]) {
                    case "+":
                        ans = a + b
                        break
                    case "-":
                        ans = b - a
                        break
                    case "*":
                        ans = a * b
                        break
                    case "/":
                        ans = parseInt(b / a)
                        break
                }
                stack.push(ans)

            } else {
                stack.push(tokens[i])
            }
        }
        return stack.pop()
    }
}
