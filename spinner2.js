const sentence = "| / - \\ | \\ - / | \n";
let count = 1;
for (const i of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r${i}  `);
  }, count*100); 
  count++;
}

