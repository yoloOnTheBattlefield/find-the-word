const { Node, differentByOne } = require("./utils");
/**
 * @param {String} beginWord
 * @param {String} endWord
 * @param {Array} wordList
 * @return {number}
 */
const stepsToTarget = (beginWord, endWord, wordList) => {
  //if no dictionary has been provided return
  if (!wordList) return;

  //Create an array queue
  const queue = [];
  //remove the begin word from the dictionary
  const dictionary = wordList.filter(word => word !== beginWord);
  //create a new node that contains the beginWord and initialise the steps to 1
  const node = new Node(beginWord, 1);
  //push the recently created node in the queue
  queue.push(node);

  while (queue.length > 0) {
    //take the node from the queue
    const curNode = queue.pop();
    //map over the dictionary
    for (let i = 0; i < dictionary.length; i++) {
      //take the current word from the dictionary
      const temporary = dictionary[i];
      //check if the current node is different just by one letter
      //with the temporarry word
      if (differentByOne(curNode.str, temporary)) {
        //if the temporary word is equal with the target word
        //our job is done, return the amount of steps
        if (temporary === endWord) {
          return curNode.step;
        }
        //else create a new node, using the temporary word and
        //increase the steps it took to get to the target word
        const newNode = new Node(temporary, curNode.step + 1);
        //now push it in the queue array
        queue.push(newNode);
        //and remove the temporary word from the dictionary
        //so we don't map again over it
        const index = dictionary.indexOf(temporary);
        if (index > -1) {
          dictionary.splice(index, 1);
        }
      }
    }
  }
  //if nothing has been found, return 0
  return 0;
};

module.exports = stepsToTarget;
