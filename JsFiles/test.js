const isPrime = function (num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(16));
console.log(isPrime(17));
console.log(isPrime(31));
console.log(isPrime(15));

const friends = new Array("Taifoor", "Wahid", "Umer");
console.log(friends);
console.log(typeof friends[0]);
