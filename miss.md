---
title: Assessment of Missingness
layout: default
description: "Assessment of Missingness"
nav_order: 3
---
# Assessment of Missingness

## NMAR Analysis
As we mentioned previously that there are some ban columns **that have** missing values, in my opinion this is classified as `not missing at random (NMAR)`.

In professional LOL league, they often do not ban all five of the champions, this sometimes implies that the team have more confidence in winning against the other, or there is no **necessity of** banning other champions, or even to **increase** entertainment value for streamers.

There are many reasons which can not be predicted through any column which demonstrates that the missing values in `ban1 to 5` are `NMAR`.

To make missingness in the ban columns be `MAR` from `NMAR`, **one would need to** collect **or** listen to the conversation between players, planned ban champions before match and all the players' mind **activities**, and make a column that specify**s** the reason **for** not banning if the team do not ban all 5.

**In practice**, we do not impute the ban columns; we only use non-missing bans when building `ban_list` and defining the most banned champion per patch.

## Missingness Dependency ##

### Check if all information of game after started 15 mins **`'goldat15'`** ,**` 'xpat15'`** ,**`'csat15'`** ,**`'opp_goldat15'`** , **`'opp_xpat15'`** ,**`'opp_csat15'`** ,**`'golddiffat15'`** ,**`'xpdiffat15'`** ,**` 'csdiffat15'`**,**`'killsat15'`** ,**`'assistsat15'`**,**`'deathsat15'`**, **` 'opp_killsat15'`**, **`'opp_assistsat15'`**,**`'opp_deathsat15'`** are **dependent** on **`'gamelength'`**.


**Null hypothesis**: The missingness of all information of game after started 15 mins(`'XXX15'`) does not depend on `'gamelength'`.

**Alternative hypothesis**: The missingness of all information of game after started 15 mins(`'XXX15'`) depends on `'gamelength'`.

**Test statistics**: Total **variation** difference.

<iframe src="diagram/depend-tvd.html" width=630 height=430 frameBorder=50></iframe>
<iframe src="diagram/depend-obs15.html" width=630 height=430 frameBorder=50></iframe>

The p-value is **0.518**.

Therefore, we accept the null hypothesis, which concludes the missingness in all of the 15mins columns are **not dependent** on `'gamelength'`.

----
### Check if souls **`'infernals'`**, **`'mountains'`**, **`'clouds'`**, **`'ocean'`**, **`'chemtechs'`**, **`'hextechs'`** **depend** on **`'patch'`**.

Let `'souls'` be all the souls **that** appear in the data.

**Null hypothesis**: The missingness of `'souls'` does not depend on `'patch'`.

**Alternative hypothesis**: The missingness of `'souls'` depends on `'patch'`.

**Test statistics**: Total **variation** difference.

<iframe src="diagram/depend-tvdsoul.html" width=630 height=430 frameBorder=50></iframe>
<iframe src="diagram/depend-obssoul.html" width=630 height=430 frameBorder=50></iframe>

The p-value is **0.0**.

Therefore, **reject** the null hypothesis; the missingness in **`'souls'`** **depends** on **`'patch'`. (Soul columns exist only in certain patches, so missingness is structurally tied to patch.)
