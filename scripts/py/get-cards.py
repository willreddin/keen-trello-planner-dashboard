#!/usr/bin/env python

from trello import TrelloApi

from keen.client import KeenClient


#set trello api key
trello = TrelloApi('5ba7342f69280ea0c7037f7365ccc63f')

#set trello board ID
board_id = 'aIgBMuGR'

#set a token for private boards
trello.get_token_url('My app', expires='30days', write_access=True)

#get a list of cards in the board
cards = trello.boards.get_card(board_id, fields=("name", "idList"))


#configure keen client (refactor: put this in a config file )
client = KeenClient(
        project_id="557d8b0996773d08901b7cea",
        write_key="11b73f77bcfdd19dee690fab233667d7ec808d2b2db95f4363eaa93fdd766c2492b5bebfff119001f2c6ba057de44c437196ecd51725ae0d57a60b0b4722259011ee9a98955e54c373126ef7e6fe7fb84f7daeb8621379168ba91f530385814112f0f96133dafb96dd15a0eed965d3aa",
        read_key="828da09e10ce365e3b59de21ce89c07e257b6431ca7e0eef092077a23dae69a437371a64a6cf935bde64709ddff7395197489610cab95fc45041fd915ea26dc48a03fcab4bac38bd3a3b24116f42576d5cbb062f164fca24479f68ab5df6afe8ef0de488c2062bfa3630dfd6bb0e468d",
        master_key="8CFC4F3A9B0EF1E07EE550501E22C1AF"
    )

#add the cards from the board to a keen event
client.add_events({
	"cards": cards
	})
