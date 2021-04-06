const sentence = "hello there from lighthouse labs";


let timer = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer); // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timer);