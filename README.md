# NCAA March Madness - Final Four

March is an exciting time for college basketball fans. Each year the best teams compete against each in a single elimination tournament to find out who is the best of the best and will be come the National Champion. The first round starts with 64 teams that are paired up and play each other. The teams are divided into four regions (East, West, Midwest, South) and given ranks within these regions.

The highest ranked team plays the lowest ranked team, the second highest plays the second lowest, and so forth for each region. The next round pits the winner of the first and last ranked teams against the winner of the two middle teams and the winner of the second and second to last against the next level out from the middle. This continues until only one team from each region remains. Then the winners of the East and West compete as well as the winners of the Midwest and South. Finally two teams compete in the National Championship game.

This application allows admin to match up teams for the NCAA Basketball Tournament and score each game. Users can make predictions and check them against the actual outcome of each game.

## Project Setup

To clone this project, run the following in your command line.
```
git clone https://github.com/drteresavasquez/final-four.git
cd final-four
cd lib
npm install
grunt
hs -o
```

## The Challenge

For this challenge we’ve been tasked with creating interactive ways for fans to enjoy tracking and predicting which teams will win. It has become a tradition among many fans to create “brackets” where they predict who will win each game and then compare these with their friends.

While not everyone is a sports fan this challenge involves the usage and manipulation of objects, arrays, and several other data types along with creating interactive user interfaces.

## Challenge - Level 1 -- *CHALLENGE COMPLETE*

In the js directory, there are 4 JSON files (east, west, midwest, and south) that include a list of ranking from the first round of last year’s NCAA tournament. For each region (East, West, Midwest, South) pair up the teams that will play each other and display them as a pair. For example in the East region Vilanova will play Mt. St. Mary’s in the first round.

## Challenge - Level 2

Starting with the paired list of round one competitions build functionality to allow users to predict who will win each game. Once the predicted winners of two with the order list of paired teams and allow users to predict who will win each game.

### A Step Further - Level 2

Going a step further allow predictions beyond the current round so that users can make predictions based on their predicted winners.

## Challenge - Level 3

Since users are allowed to predict the outcome of games they will want to know if they are correct. Assuming you will be pulling this data from a reliable source mock that with a set of winners and have your bracket periodically check it to update the with the winners of each round. Create a visual way of displaying that a team has won or lost and remove losing teams from future predictions requiring the user to create new predictions based on “actual” outcomes.

### A Step Further - Level 3

Add in scores from the games that have been played so that users can see the scores for each team once the have finished a game. Going even further add in scores of games being played currently with a way of identifying them as in progress vs final scores.

## Built With

* Bootstrap 4
* Firebase
* JavaScript/JQuery

## Contributors

* **Dr. Teresa Vasquez** - *Initial work* - [GitHub](https://github.com/drteresavasquez)
* **Trinity Terry** - *Initial work* - [GitHub](https://github.com/TrinityTerry)

## Shout Out

Thanks for the wonderful challenge goes to:
**Developer Launchpad** - [Website](http://developerlaunchpad.com/2018/03/10/March-Madness/)
