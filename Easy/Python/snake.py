from tkinter import *
import random

GAME_WIDTH = 600
GAME_HEIGHT = 600
SPEED = 50
SPACE_SIZE = 50
BODY_PARTS = 3
SNAKE_COLOR = "#00FF00"
FOOD_COLOR = "#FF0000"
BACKGROUND_COLOR = "#000000"


class Snake:
    pass

class Food:
    pass


def next_turn():
    pass

def change_direction(new_direction):
    pass


def check_collison():
    pass

def game_over():
    pass

window = Tk()
window.title("Snake LMAO LOL")
window.resizable(False, False)

score = 0
direction = 'down'

label = Label(window, text="Score:{}".format(score), font=('consolas',40))
label.pack()

canvas = Canvas(window, bg=BACKGROUND_COLOR, width=GAME_WIDTH, height=GAME_HEIGHT)
canvas.pack()

window.mainloop()