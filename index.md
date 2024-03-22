---
layout: home
title: Leangue of Legends Analysis 🧐
nav_order: 1
description: "Introduction"
permalink: /
---

# 🎮 Win rate analysis based on Champions


## Introduction
The datasets taken from all of the professional League of Legends games that have taken place in 2023, consisted with 128,064 rows and 93 columns.

From viewers perspctive we often find some champions are the top choices in banding, which made me curious about if the champion is picked luckily will those champion increase the chance of winning, as it will carry the game compared to other champions. Therefore this analysis will investigate
> "**If the most banded champion is picked by a team will the team have higher chance to win that game**". 

Terminologies and defenition from League of legend:

| Term | Definition |
|:-----------:|:-----------:|
| Champion | The character can be selected in the game|
| Soul | Buff granted after defeat dragons |
| Nerf | Weakening the performace from a certain champion from each patch  |
| Buff | Boosting the performace from a certain champion from each patch |
| Ban | Champions can not be used in the game |
| Pick | Champions seleceted to be played in the game |
| MBC | The most banned champion |

I will be using columns below pre deifined from the data set League of Legends 2023 frequently:

| Column Name | Description |
|:-----------:|:-----------:|
| gameid | Unique id from each match |
| league | The tournament name |
| patch | The game patch or virsion used in the match |
| url | The live stream url for the match |
| result | 1 if team win 0 if loss |
| position | The player's role in game |
| kills | Number of opponents a player has deafeat |
| deaths | Number of times a player has been deafeted |
| assists | Number of times a player assisted in killing an opponent |
| pick1 ... pick5 | The champion name that a player plays as |
| ban1 ... ban5| The champion banned within a match|

Also using columns defined by myself and frequently used through out the analysis:

| Column Name | Description |
|:-----------:|:-----------:|
| most_banned_champion_picked | Unique id from each match |
| average_result | The league or tournament name |
| activity_15 | All the information of the team after strated 15 mins|







