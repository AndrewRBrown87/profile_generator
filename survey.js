const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {

  rl.question('What\'s an activity you like doing? ', (activity) => {
   
    rl.question('What do you listen to while doing that? ', (music) => {
   
      rl.question('Which meal is your favourite? ', (meal) => {
   
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
   
          rl.question('Which sport is your absolute favourite? ', (sport) => {
   
            rl.question('What is your superpower? ', (superpower) => {
   
              console.log(`${name} likes to ${activity} while listening to ${music}. Eating ${food} for ${meal} and watching ${sport} helps boost power of ${superpower}.`);

              rl.close();
  
            });
  
          });
  
        });
  
      });
  
    });
  
  });

});
