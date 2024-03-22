---
title: Data Cleaning and Exploratory Data Analysis 🧹
layout: default
description: "Data Cleaning and Exploratory Data Analysis"
nav_order: 2
---

# Data Cleaning and Exploratory Data Analysis 🧹

## Limiting the rows to only for `team`
Through observing the data, when the `position` row is other than `team`, rows indicating picked champion are all `NaN`, which will affect the later steps and not necessary to keep rows that are not `team` in the `position` column. 

| position   | pick1   | pick2   | pick3   | pick4   | pick5      |
|:-----------|:--------|:--------|:--------|:--------|:-----------|
| top        | nan     | nan     | nan     | nan     | nan        |
| jng        | nan     | nan     | nan     | nan     | nan        |
| mid        | nan     | nan     | nan     | nan     | nan        |
| bot        | nan     | nan     | nan     | nan     | nan        |
| sup        | nan     | nan     | nan     | nan     | nan        |
| team       | Rumble  | Poppy   | Azir    | Senna   | Tahm Kench |

Therefore, we first limit the data set to only contain `position` that is `team`.

| gameid                | datacompleteness   |   url | league   |   year | split   |   playoffs | date                |   game |   patch |   participantid | side   | position   |   playername |   playerid | teamname      | teamid                                  |   champion | ban1         | ban2    | ban3    | ban4      | ban5   | pick1   | pick2   | pick3   | pick4        | pick5   |   gamelength |   result |   kills |   deaths |   assists |   teamkills |   teamdeaths |   doublekills |   triplekills |   quadrakills |   pentakills |   firstblood |   firstbloodkill |   firstbloodassist |   firstbloodvictim |   team kpm |   ckpm |   firstdragon |   dragons |   opp_dragons |   elementaldrakes |   opp_elementaldrakes |   infernals |   mountains |   clouds |   oceans |   chemtechs |   hextechs |   dragons (type unknown) |   elders |   opp_elders |   firstherald |   heralds |   opp_heralds |   void_grubs |   opp_void_grubs |   firstbaron |   barons |   opp_barons |   firsttower |   towers |   opp_towers |   firstmidtower |   firsttothreetowers |   turretplates |   opp_turretplates |   inhibitors |   opp_inhibitors |   damagetochampions |     dpm |   damageshare |   damagetakenperminute |   damagemitigatedperminute |   wardsplaced |    wpm |   wardskilled |   wcpm |   controlwardsbought |   visionscore |   vspm |   totalgold |   earnedgold |   earned gpm |   earnedgoldshare |   goldspent |       gspd |   total cs |   minionkills |   monsterkills |   monsterkillsownjungle |   monsterkillsenemyjungle |    cspm |   goldat10 |   xpat10 |   csat10 |   opp_goldat10 |   opp_xpat10 |   opp_csat10 |   golddiffat10 |   xpdiffat10 |   csdiffat10 |   killsat10 |   assistsat10 |   deathsat10 |   opp_killsat10 |   opp_assistsat10 |   opp_deathsat10 |   goldat15 |   xpat15 |   csat15 |   opp_goldat15 |   opp_xpat15 |   opp_csat15 |   golddiffat15 |   xpdiffat15 |   csdiffat15 |   killsat15 |   assistsat15 |   deathsat15 |   opp_killsat15 |   opp_assistsat15 |   opp_deathsat15 |
|:----------------------|:-------------------|------:|:---------|-------:|:--------|-----------:|:--------------------|-------:|--------:|----------------:|:-------|:-----------|-------------:|-----------:|:--------------|:----------------------------------------|-----------:|:-------------|:--------|:--------|:----------|:-------|:--------|:--------|:--------|:-------------|:--------|-------------:|---------:|--------:|---------:|----------:|------------:|-------------:|--------------:|--------------:|--------------:|-------------:|-------------:|-----------------:|-------------------:|-------------------:|-----------:|-------:|--------------:|----------:|--------------:|------------------:|----------------------:|------------:|------------:|---------:|---------:|------------:|-----------:|-------------------------:|---------:|-------------:|--------------:|----------:|--------------:|-------------:|-----------------:|-------------:|---------:|-------------:|-------------:|---------:|-------------:|----------------:|---------------------:|---------------:|-------------------:|-------------:|-----------------:|--------------------:|--------:|--------------:|-----------------------:|---------------------------:|--------------:|-------:|--------------:|-------:|---------------------:|--------------:|-------:|------------:|-------------:|-------------:|------------------:|------------:|-----------:|-----------:|--------------:|---------------:|------------------------:|--------------------------:|--------:|-----------:|---------:|---------:|---------------:|-------------:|-------------:|---------------:|-------------:|-------------:|------------:|--------------:|-------------:|----------------:|------------------:|-----------------:|-----------:|---------:|---------:|---------------:|-------------:|-------------:|---------------:|-------------:|-------------:|------------:|--------------:|-------------:|----------------:|------------------:|-----------------:|
| ESPORTSTMNT06_2753012 | complete           |   nan | LFL2     |   2023 | Spring  |          0 | 2023-01-10 17:07:16 |      1 |   13.01 |             100 | Blue   | team       |          nan |        nan | Klanik Esport | oe:team:0ade5e44c23039bca133eee58ec1b83 |        nan | Sylas        | Caitlyn | Wukong  | Akali     | Yone   | Karma   | Ezreal  | Poppy   | Jax          | Taliyah |         2612 |        1 |      13 |        7 |        38 |          13 |            7 |             1 |             1 |             0 |            0 |            0 |              nan |                nan |                nan |     0.2986 | 0.4594 |             0 |         4 |             3 |                 4 |                     3 |           0 |           0 |        0 |        4 |           0 |          0 |                      nan |        0 |            0 |             1 |         2 |             0 |          nan |              nan |            1 |        1 |            0 |            1 |       11 |            2 |               1 |                    1 |              4 |                  2 |            2 |                0 |               95203 | 2186.9  |           nan |                2690.93 |                    3235.13 |           130 | 2.9862 |            40 | 0.9188 |                   55 |           312 | 7.1669 |       72807 |        44787 |     1028.8   |               nan |       65505 |  0.0706496 |        nan |          1039 |            247 |                     nan |                       nan | 29.5406 |      14612 |    18745 |      317 |          14537 |        18901 |          328 |             75 |         -156 |          -11 |           0 |             0 |            0 |               0 |                 0 |                0 |      22384 |    29220 |      498 |          22914 |        30891 |          535 |           -530 |        -1671 |          -37 |           0 |             0 |            1 |               1 |                 1 |                0 |
| ESPORTSTMNT06_2753012 | complete           |   nan | LFL2     |   2023 | Spring  |          0 | 2023-01-10 17:07:16 |      1 |   13.01 |             200 | Red    | team       |          nan |        nan | MS Company    | oe:team:14ad76b8d9e647d4b29c3d26ecd29c9 |        nan | Galio        | Lucian  | Fiora   | Viktor    | Azir   | Yuumi   | Sejuani | Zeri    | Syndra       | Viego   |         2612 |        0 |       7 |       13 |        18 |           7 |           13 |             1 |             0 |             0 |            0 |            1 |              nan |                nan |                nan |     0.1608 | 0.4594 |             1 |         3 |             4 |                 3 |                     4 |           1 |           0 |        0 |        1 |           0 |          1 |                      nan |        0 |            0 |             0 |         0 |             2 |          nan |              nan |            0 |        0 |            1 |            0 |        2 |           11 |               0 |                    0 |              2 |                  4 |            0 |                2 |               85333 | 1960.18 |           nan |                2864.1  |                    3425.05 |            80 | 1.8377 |            49 | 1.1256 |                   20 |           304 | 6.9832 |       62745 |        34725 |      797.665 |               nan |       61035 | -0.0706496 |        nan |          1008 |            218 |                     nan |                       nan | 28.1623 |      14537 |    18901 |      328 |          14612 |        18745 |          317 |            -75 |          156 |           11 |           0 |             0 |            0 |               0 |                 0 |                0 |      22914 |    30891 |      535 |          22384 |        29220 |          498 |            530 |         1671 |           37 |           1 |             1 |            0 |               0 |                 0 |                1 |
| ESPORTSTMNT06_2754023 | complete           |   nan | LFL2     |   2023 | Spring  |          0 | 2023-01-10 18:15:01 |      1 |   13.01 |             100 | Blue   | team       |          nan |        nan | beGenius ESC  | oe:team:607baf04091e515e195644cb08ec21c |        nan | Fiora        | Kindred | Sejuani | Nautilus  | Leona  | Nami    | Lucian  | K'Sante | Xin Zhao     | Ryze    |         2436 |        0 |      20 |       16 |        44 |          20 |           16 |             2 |             0 |             0 |            0 |            0 |              nan |                nan |                nan |     0.4926 | 0.8867 |             0 |         3 |             4 |                 2 |                     4 |           0 |           1 |        0 |        0 |           0 |          1 |                      nan |        1 |            0 |             1 |         2 |             0 |          nan |              nan |            1 |        2 |            1 |            0 |        5 |           11 |               1 |                    1 |              6 |                  2 |            0 |                3 |              106526 | 2623.79 |           nan |                2675.74 |                    3482.36 |           119 | 2.931  |            55 | 1.3547 |                   49 |           298 | 7.3399 |       80627 |        54402 |     1339.95  |               nan |       74800 |  0.0223048 |        nan |          1111 |            225 |                     nan |                       nan | 32.9064 |      15969 |    19120 |      324 |          16330 |        18838 |          346 |           -361 |          282 |          -22 |           2 |             2 |            2 |               2 |                 3 |                2 |      24771 |    30084 |      498 |          24098 |        29554 |          532 |            673 |          530 |          -34 |           4 |             6 |            3 |               3 |                 4 |                4 |
| ESPORTSTMNT06_2754023 | complete           |   nan | LFL2     |   2023 | Spring  |          0 | 2023-01-10 18:15:01 |      1 |   13.01 |             200 | Red    | team       |          nan |        nan | ViV Esport    | oe:team:2d9e95ecefb34c32ff1a997ebe372f9 |        nan | Heimerdinger | Wukong  | Akali   | Syndra    | Sylas  | Draven  | Vi      | Gwen    | Amumu        | Irelia  |         2436 |        1 |      16 |       20 |        28 |          16 |           20 |             1 |             0 |             0 |            0 |            1 |              nan |                nan |                nan |     0.3941 | 0.8867 |             1 |         4 |             3 |                 4 |                     2 |           0 |           0 |        0 |        0 |           1 |          3 |                      nan |        0 |            1 |             0 |         0 |             2 |          nan |              nan |            0 |        1 |            2 |            1 |       11 |            5 |               0 |                    0 |              2 |                  6 |            3 |                0 |               80368 | 1979.51 |           nan |                3522.34 |                    4410.91 |           119 | 2.931  |            53 | 1.3054 |                   40 |           330 | 8.1281 |       77449 |        51224 |     1261.67  |               nan |       73150 | -0.0223048 |        nan |          1102 |            261 |                     nan |                       nan | 33.5714 |      16330 |    18838 |      346 |          15969 |        19120 |          324 |            361 |         -282 |           22 |           2 |             3 |            2 |               2 |                 2 |                2 |      24098 |    29554 |      532 |          24771 |        30084 |          498 |           -673 |         -530 |           34 |           3 |             4 |            4 |               4 |                 6 |                3 |
| ESPORTSTMNT06_2755035 | complete           |   nan | LFL2     |   2023 | Spring  |          0 | 2023-01-10 19:20:51 |      1 |   13.01 |             100 | Blue   | team       |          nan |        nan | Team du Sud   | oe:team:1dc6411295a36bd29c29b1096ba859d |        nan | Zac          | Sylas   | Sejuani | Jarvan IV | Ornn   | Varus   | Wukong  | Syndra  | Renata Glasc | Aatrox  |         1980 |        1 |      20 |        7 |        48 |          20 |            7 |             2 |             2 |             0 |            0 |            0 |              nan |                nan |                nan |     0.6061 | 0.8182 |             0 |         4 |             1 |                 4 |                     1 |           1 |           0 |        0 |        0 |           0 |          3 |                      nan |        0 |            0 |             0 |         0 |             2 |          nan |              nan |            0 |        0 |            1 |            0 |        7 |            4 |               1 |                    0 |              3 |                  6 |            1 |                0 |               64962 | 1968.55 |           nan |                2451.61 |                    2418.33 |           106 | 3.2121 |            50 | 1.5152 |                   42 |           292 | 8.8485 |       60938 |        39364 |     1192.85  |               nan |       51975 | -0.0185847 |        nan |           876 |            231 |                     nan |                       nan | 33.5455 |      14794 |    17060 |      326 |          15795 |        18808 |          304 |          -1001 |        -1748 |           22 |           1 |             0 |            2 |               2 |                 2 |                1 |      22945 |    27423 |      510 |          24846 |        28186 |          452 |          -1901 |         -763 |           58 |           2 |             1 |            4 |               4 |                 6 |                2 |


##  Exploring and cleaning in Ban columns 

Through exploring we found there are missing valules in Ban column for some games. I searched up matchs for LFL and found the ban was actually emoty on perpose, there fore there was no need for me to replace or implemenet with some values.

Actual two match data from LFL league in 2023:
![image.png](attachment:image.png)
![image-3.png](attachment:image-3.png)
![image-2.png](attachment:image-2.png)

two match data from LFL league in 2023 provided:

| league   | teamname   | split   | side   |   result |   patch | ban1   | ban2         | ban3   |   ban4 |   ban5 |
|:---------|:-----------|:--------|:-------|---------:|--------:|:-------|:-------------|:-------|-------:|-------:|
| LFL      | Team GO    | Spring  | Blue   |        1 |   13.01 | Ryze   | Heimerdinger | Zeri   |    nan |    nan |
| LFL      | IZI Dream  | Spring  | Red    |        0 |   13.01 | Lucian | Zeri         | Maokai |    nan |    nan |


However, to find out the most banded champion from each patch version, we first have to combine band columns in to a column `'ban_list'` as a list so that we do not have to be bothered by the missingness, while we also accumulate and find out which chmapion is banned the most in the whole data set thorough Univariate Analysis.

### Univariate Analysis
<iframe src="diagram/horizontal_barc_frequency.html" width=800 height=600 frameBorder=0></iframe>

From the above exploration and the  horizontal bar chart, `Maokai` was the most banned champion in the whole data set. 

Hoewever, in LOL each patch give `Buff` and `Nerf` on some champions, therefore to invaestigate the appopriateness that `Maokai` is the one actually banned most without the influence of patch, we look in to the distribution of the patch. 

Thus, before investigate is it `Maokai` is MBC as its self, without the influenece of dominanted patch, we need to check the missingness in `patch`. 

What we dound that there are 10 rows of missing patchs.

| column name  |  missingness |
|:-------|----:|
| patch  |  10 |

| gameid             |   patch |
|:-------------------|--------:|
| 10011-10011_game_1 |     nan |
| 10011-10011_game_1 |     nan |
| 10011-10011_game_2 |     nan |
| 10011-10011_game_2 |     nan |
| 10011-10011_game_3 |     nan |
| 10011-10011_game_3 |     nan |
| 10011-10011_game_4 |     nan |
| 10011-10011_game_4 |     nan |
| 10011-10011_game_5 |     nan |
| 10011-10011_game_5 |     nan |

Since there are missingness in the patch, we have to fill the `NaN` by the most common patched used in the same date or hour. 

| column name  |  missingness |
|:-------|----:|
| patch  |  0 |

After we fill all the missingness in thepatch column, we can look in to to the distribution of `patch`s.

|patch|  distributions |
|------:|---------:|
| 13.01 | 0.182237 |
| 13.13 | 0.108954 |
| 13.11 | 0.100097 |

patch `13.01` accounts the most portion 18% from 20 patchs. 
Now let's look in to the most banned champion in each patch, to see whether `Maokai` being dominant of the mist banned champion fron each patch, or by the influence of patch.


|            patch         |   most_banned_champion |
|:--------------------|-----------------------:|
| 13.01   |                   'Maokai' |
| 13.03     |                   'Ashe' |
| 13.04    |                  'Ashe' |
| 13.05    |                   'Annie' |
| 13.06       |                    'Vi' |
| 13.07    |                     'Varus' |
| 13.08       |                    'Vi' |
| 13.10    |                    'Milio' |
| 13.11  |                   'Neeko' |
| 13.12  |                   'Neeko' |
| 13.13 |                   'LeBlanc' |
| 13.14|                   'Tristana' |
| 13.15|                    'Tristana' |
| 13.16|                     'Kindred' |
| 13.17|                    'Tristana' |
| 13.18 |                    'LeBlanc' |
| 13.19|                     'Orianna' |
| 13.20|                      'Orianna' |
| 13.21|                      'Orianna' |
| 13.24   |                     'Ashe' |

<iframe src="diagram/datac-barc.html" width=630 height=450 frameBorder=50></iframe>


From the result and another **Univariate Analysis** above, `Maokai` is the most banned champion because `Maokai` was the champion banned most from the most dominant patch `13.01`. Therefore, we should not set the most banned champion as `Maokai`, instead we set the most banned champion according to patch, specified in the column `most_banned_champion`.

##  Creating column `most_banned_champion`

Now we can create a column which indicates is the most banned champion specified in the column `most_banned_champion`, is in those picked champions, and assigned to a new column `most_banned_champion_picked`, consisted with `True` or `False`.

| teamname      | ban_list                                               | most_banned_champion   | most_banned_champion_picked   |
|:--------------|:-------------------------------------------------------|:-----------------------|:------------------------------|
| Klanik Esport | ['Sylas', 'Caitlyn', 'Wukong', 'Akali', 'Yone']        | Maokai                 | False                         |
| MS Company    | ['Galio', 'Lucian', 'Fiora', 'Viktor', 'Azir']         | Maokai                 | False                         |
| beGenius ESC  | ['Fiora', 'Kindred', 'Sejuani', 'Nautilus', 'Leona']   | Maokai                 | False                         |
| ViV Esport    | ['Heimerdinger', 'Wukong', 'Akali', 'Syndra', 'Sylas'] | Maokai                 | False                         |
| Team du Sud   | ['Zac', 'Sylas', 'Sejuani', 'Jarvan IV', 'Ornn']       | Maokai                 | False                         |


Using the column `most_banned_champion_picked` we use **Bivariate Analysis**, side by side box plot and heat map to explore how the the average results in each patch is distributed, while also observe is there a significance difference in mean between MBC picked or not. 

<iframe src="diagram/sbs_mbcpicked.html" width=630 height=450 frameBorder=50></iframe>
<iframe src="diagram/heat_map.html" width=630 height=450 frameBorder=50></iframe>

From these two plots we can observe the mean and the spreadbess,the overall color in both groups are different and we can see MBC picked have better result overall, which gives me a insight of there is some influence made by picking MBC on the winning rate.


### Interesting Aggregates

Since we are interested in the most banned champion, we use pivot table to see which league is the hardest and which is the easiest to get to select the most banned champion.
|       AL |     CBLOL |    CBLOLA |   CDF |      DCup |       DDH |       EBL |        EL |       EM |       EPL |     ESLOL |       GL |      GLL |        HM |        IC |       LCK |     LCKC |       LCO |      LCS |      LEC |      LFL |     LFL2 |      LHE |       LJL |   LJLA |       LLA |      LMF |      LPL |   LPLOL |      LRN |      LRS |    LVP SL |      MSI |      NACL |   NEXO |      NLC |       PCS |      PGN |       PRM |   SL (LATAM) |       TCL |       UL |      VCS |       VL |     WLDs |
|---------:|----------:|----------:|------:|----------:|----------:|----------:|----------:|---------:|----------:|----------:|---------:|---------:|----------:|----------:|----------:|---------:|----------:|---------:|---------:|---------:|---------:|---------:|----------:|-------:|----------:|---------:|---------:|--------:|---------:|---------:|----------:|---------:|----------:|-------:|---------:|----------:|---------:|----------:|-------------:|----------:|---------:|---------:|---------:|---------:|
| 0.838028 | 0.917355  | 0.907258  |  0.98 | 0.95122   | 0.918605  | 0.921429  | 0.926829  | 0.867159 | 0.916667  | 0.919162  | 0.884058 | 0.856707 | 0.926573  | 0.917808  | 0.902664  | 0.868545 | 0.946429  | 0.893939 | 0.872822 | 0.890496 | 0.876623 | 0.881818 | 0.939922  |    0.7 | 0.914062  | 0.843023 | 0.872848 |     0.9 | 0.892241 | 0.878151 | 0.90081   | 0.881579 | 0.905051  | 0.8125 | 0.897436 | 0.909556  | 0.886792 | 0.902893  |    0.903409  | 0.911111  | 0.867347 | 0.898333 | 0.877358 | 0.832117 |
| 0.161972 | 0.0826446 | 0.0927419 |  0.02 | 0.0487805 | 0.0813953 | 0.0785714 | 0.0731707 | 0.132841 | 0.0833333 | 0.0808383 | 0.115942 | 0.143293 | 0.0734266 | 0.0821918 | 0.0973361 | 0.131455 | 0.0535714 | 0.106061 | 0.127178 | 0.109504 | 0.123377 | 0.118182 | 0.0600775 |    0.3 | 0.0859375 | 0.156977 | 0.127152 |     0.1 | 0.107759 | 0.121849 | 0.0991903 | 0.118421 | 0.0949495 | 0.1875 | 0.102564 | 0.0904437 | 0.113208 | 0.0971074 |    0.0965909 | 0.0888889 | 0.132653 | 0.101667 | 0.122642 | 0.167883 |

From this pivoit table what we found the most difficult league to pick the most banned champion is `CDF` with **2.0%**, and the easiest league to pick the most banned champion is `LJLA` with **30.0%**

While if we see how frequent is `Maokai` which is the MBC fro the whole data set with the bias of patch.
|       AL |    CBLOL |   CBLOLA |   CDF |   DCup |     DDH |      EBL |       EL |       EM |      EPL |    ESLOL |       GL |      GLL |       HM |       IC |      LCK |     LCKC |      LCO |      LCS |      LEC |      LFL |     LFL2 |      LHE |     LJL |   LJLA |      LLA |     LMF |      LPL |    LPLOL |      LRN |      LRS |   LVP SL |      MSI |     NACL |     NEXO |      NLC |      PCS |      PGN |      PRM |   SL (LATAM) |      TCL |       UL |   VCS |       VL |    WLDs |
|---------:|---------:|---------:|------:|-------:|--------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|--------:|-------:|---------:|--------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|---------:|-------------:|---------:|---------:|------:|---------:|--------:|
| 0.785211 | 0.780992 | 0.832661 |  0.72 |      1 | 0.77907 | 0.714286 | 0.756098 | 0.806273 | 0.732143 | 0.820359 | 0.804348 | 0.804878 | 0.744755 | 0.828767 | 0.818648 | 0.737089 | 0.839286 | 0.876894 | 0.763066 | 0.739669 | 0.790043 | 0.790909 | 0.77907 |      1 | 0.838542 | 0.77907 | 0.829801 | 0.778125 | 0.793103 | 0.777311 | 0.813765 | 0.763158 | 0.809091 | 0.770833 | 0.737179 | 0.767918 | 0.839623 | 0.791322 |     0.818182 | 0.766667 | 0.765306 |  0.88 | 0.839623 | 0.70438 |
| 0.214789 | 0.219008 | 0.167339 |  0.28 |      0 | 0.22093 | 0.285714 | 0.243902 | 0.193727 | 0.267857 | 0.179641 | 0.195652 | 0.195122 | 0.255245 | 0.171233 | 0.181352 | 0.262911 | 0.160714 | 0.123106 | 0.236934 | 0.260331 | 0.209957 | 0.209091 | 0.22093 |      0 | 0.161458 | 0.22093 | 0.170199 | 0.221875 | 0.206897 | 0.222689 | 0.186235 | 0.236842 | 0.190909 | 0.229167 | 0.262821 | 0.232082 | 0.160377 | 0.208678 |     0.181818 | 0.233333 | 0.234694 |  0.12 | 0.160377 | 0.29562 |

From here what we found The least banned Maokai league is `DCup` with **0.0%** and the most banned Maokai league is `WLDs` with **29.56204379562044%**.

From this we can see that Maokai is not the most 'most' banned champion acorss the leaugue and the most banned champion are highlly depend on other column or other factors.


