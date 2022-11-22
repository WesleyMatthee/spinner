process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spinner = function(str) {
  let delay = 0;
  for (const char of str) {
    setTimeout(() => process.stdout.write(`\r${char}   `), delay += 200);
  }
};

spinner('|/-\\|/-\\|')



//HOW THIS WORKS
//Copied typewriter loop and change the var name to spinner
//Stored '\r' command inside char
//Set delay to 200ms
//made spinner string