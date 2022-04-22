function multisum(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  console.log(total);
}





multisum(20);      // 98
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168