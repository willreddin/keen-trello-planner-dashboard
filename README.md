# keen-trello-planner-dashboard

Using [keen.io](https://keen.io/) to create a simple analytics dashboard for my trello daily planner. 

uses the [trello api](https://trello.com/docs/) to get a list of cards from the board and the id of the list they belong to. 

A daily cron job runs the python script get-cards.py and uploads the data to keen and the keen analyzer looks through todays cards and their positions 
