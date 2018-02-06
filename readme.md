##Dictionary Path

##Instructions

`cd` into the directory
Run `npm install`

To run the example use `npm start`;
To run the tests use `npm test`;

#How did you approach solving this problem?

To solve this problem I have used a breadth first search algorithm, I simply run through all the words in the dictionary and check if the word in the queue is different by one letter, if it is I push the newly found word into the queue, and increase by one the steps length. I do that untill I find or not the target word in the dictionary

#How did you check that your solution is correct?

I wrote multiple tests to check the output of the function, and I also tried to break some of the steps in smaller functions so I can increase readability and being able to check that what happens inside the loops while running

#Specify any assumptions that you have made.

I assumed that the words have three characters and they don't contain empty spaces
