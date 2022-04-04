const datamuse = require('datamuse');
 
datamuse.request('words?rel_rhy=flute')
.then((json) => {
  console.log(json);
});

TEST Push