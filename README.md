# Test
It's an application that perform next steps:
1) Receive a set of expressions from specified endpoint via REST call
2) Perform calculation of results for received set of expressions
3) Send a correct results to specified endpoint via REST call
4)Provided expression is basically a set of operands and operators in Reverse Polish notation, also known as Polish postfix notation or simply postfix notation.
5) Next operations are supported:
  “+” - this operand perform next calculation with operands:
  a - b
  “-” - perform next:
  a + b + 8
  “*” - obtain a by modulo b (division by zero should return 42):
  a % b
  “/” - perform next (division by zero should return 42):
  a / b

