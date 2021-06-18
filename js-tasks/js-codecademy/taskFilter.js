let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
debugger
// 1), 2)
const storyWords = story.split(' ')
console.log(storyWords.length)

// 3)
const betterWords = storyWords.filter(word =>
  !unnecessaryWords.includes(word))  
console.log(betterWords.length)

 // 4) 
 let reallyCount = 0
 let veryCount = 0
 let basicallyCount = 0

 for (word of storyWords) {
   if ( word === 'really') {
     reallyCount += 1
   } else if (word === 'very') {
     veryCount += 1
   } else if (word === 'basicallyCount'){
     basicallyCount += 1
   }
 }
console.log(reallyCount + veryCount + basicallyCount)

let sentences = 0;
storyWords.forEach( word => {
  if(word[word.length - 1] === '.' || 
  word[word.length - 1] === '!') {
    sentences += 1
  }
})
console.log(sentences)

// 6.

const logInfo = () =>{
  console.log('Word count: ' + storyWords.length)
  console.log('Sentence count: ' + sentences)
  console.log('Number of times each overused word appears: ' + betterWords.length)
}
console.log(logInfo())

// Functions
function add1(a, b) {
    const res = a + b
    return res
}

function add2(a, b) {
    return a + b
}

const add3 = (a, b) => {
    const res = a + b
    return res
}

const add4 = (a, b) => {
    return a + b
}

const add5 = (a, b) => a + b // В 1 строчку - когда короткое вырожение.

