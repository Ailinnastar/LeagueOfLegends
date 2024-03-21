---
title: Assessment of Missingness
layout: default
description: "Assessment of Missingness"
nav_order: 3
---

## NMAR Analysis
As we mensioned previously that there are some ban column were are missing, in my opinion this is classified as `not missing at random (NMAR)`.

In professional LOL league, they often do not ban all five of the champions, this sometimes implies that the team have more confidence in winning against the other, or there are no necessity on bannding other champions, or even to increases entertainment value for streamers.

There are many reasons which can not be pridicted through any column which demonstrates that the missing values in `ban1 to 5` are `NMAR`.

To make missingness in the ban columns be `MAR` from `NMAR`, collect listen to the conversation between players, planned ban champions before match and all the players' mind actitivities will be needed, and make a column that specify the the reason fo not banning if the team do not ban all 5. 

## Missingness Dependency ##

### Check if all infroamtion of game after started 15 mins **`'goldat15'`** ,**` 'xpat15'`** ,**`'csat15'`** ,**`'opp_goldat15'`** , **`'opp_xpat15'`** ,**`'opp_csat15'`** ,**`'golddiffat15'`** ,**`'xpdiffat15'`** ,**` 'csdiffat15'`**,**`'killsat15'`** ,**`'assistsat15'`**,**`'deathsat15'`**, **` 'opp_killsat15'`**, **`'opp_assistsat15'`**,**`'opp_deathsat15'`** are **dependent** on **`'gamelength'`**.


**Null hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) does not depend on `'gamelength'`. 

**Alternative hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) depends on `'gamelength'`. 

**Test statistics**: Total variances difference.


<iframe src="diagram/depend-tvd.html" width=630 height=430 frameBorder=50></iframe>
<iframe src="diagram/depend-obs15.html" width=630 height=430 frameBorder=50></iframe>

p-value is **0.518**.

Therefore, we accept the null hypothesis, which concludes the missingness in all of the 15mins columns are **not dependent** on `'gamelength'`.

----
#### Check if souls **`'infernals'`**, **`'mountains'`**, **`'clouds'`**, **`'ocean'`**, **`'chemtechs'`**, **`'hextechs'`**  **dependens** on **`'patch'`**.

Let `'souls'` be all the souls apears in the data.

**Null hypothesis**: The missingess of `'souls'` does not depend on `'patch'`. 

**Alternative hypothesis**: The missingess of `'souls'` depends on `'patch'`. 

**Test statistics**: Total variances difference.
<iframe src="diagram/depend-tvdsoul.html" width=630 height=430 frameBorder=50></iframe>
<iframe src="diagram/depend-obssoul.html" width=630 height=430 frameBorder=50></iframe>

The p-value is **0.0**.

Therefore, **reject** the null hypothesis, conludes the missingness in `'url'` **dependens** on `'league'`.


