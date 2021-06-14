// Write a function that finds the word that appears the greatest number of times.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ')

// function mostAppearsWord(storyWords) {
//     let great = 0                                        // самое большое число

//     for (let i = 0; i < storyWords.length; i++) {       // перебираются слова

//         let result = 0                                  // результат - это количество слов, изначально равен 0
//         let word = storyWords[i]
//         const wordCount = storyWords.filter(number =>      // функция
//             word.includes(number)).length                 // ФИЛЬТР ПО СЛОВУ (число) 
//         result = wordCount + result                      // суммируем количество слова в тексте
//             }
//         }
//         if (result > great) {                           // если количество слов больше, чем предыдущее то самое большое число меняется 
//             great = result
//         }
//     }
//     return great                                         // возвращается самое большое число
// }


// //СДЕЛАТЬ ФИЛЬТР ПО СЛОВУ В [I] ПОТОМ ЕГО ПОСЧИТАТЬ И ПРОСУММИРОВАТЬ 
// // ЕСЛИ ОНО БОЛЬШЕ/МЕНЬШЕ - РЕЗУЛЬТАТ 
// const wordCount = storyWords.filter(number => word.includes(number))


function mostAppearsWord(storyWords) {
    let great = 0
    let maxWord = ''
    for (let i = 0; i < storyWords.length; i++) {
        let word = storyWords[i]
        const wordCount = storyWords.filter(w => w === word).length

        if (wordCount > great) {
            great = wordCount
            maxWord = word
        }
    }
    return maxWord
}
const r1 = mostAppearsWord(storyWords)
console.log(`The word ${r1}`)