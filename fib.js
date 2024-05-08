// Fibonacci sequence
// n = 5;

// Recursive solution
// Big-O: O(2^n), why? because it has to calculate the same value multiple times (overlapping subproblems) and it grows exponentially

// fib(1) = 1
// fib(2) = fib(2-1) + fib(2-2) = fib(1) + fib(0) = 1 + 0 = 1
// fib(3) = fib(3-1) + fib(3-2)
//   => fib(2) + fib(1) = fib(2-1) + fib(2-2) + 1 = (1 + 1) + 1 = 3
// fib(4) = fib(4-1) + fib(4-2) = fib(3) + fib(2) = 3 + 1 = 4
// fib(5)

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib(5); // 5

// Non recursive solution
// Big-O: O(n) because it only calculates the value once
function fib2(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

// Non recursive solution
// Big-O: O(n)
function fib3(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
