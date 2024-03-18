---
title: Assessment of Missingness
layout: default
description: "Assessment of Missingness"
nav_order: 3
---

## NMAR Analysis

## Missingness Dependency ##

### Check if all infroamtion of game after started 15 mins **`'goldat15'`** ,**` 'xpat15'`** ,**`'csat15'`** ,**`'opp_goldat15'`** , **`'opp_xpat15'`** ,**`'opp_csat15'`** ,**`'golddiffat15'`** ,**`'xpdiffat15'`** ,**` 'csdiffat15'`**,**`'killsat15'`** ,**`'assistsat15'`**,**`'deathsat15'`**, **` 'opp_killsat15'`**, **`'opp_assistsat15'`**,**`'opp_deathsat15'`** are **dependent** on **`'gamelength'`**.
**Null hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) does not depend on `'gamelength'`. 

**Alternative hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) depends on `'gamelength'`. 

**Test statistics**: Total variances difference.


<iframe src="diagram/tvd15.html" width=630 height=450 frameBorder=50></iframe>
<iframe src="diagram/observe15.html" width=630 height=450 frameBorder=50></iframe>

p-value is **0.518**.

Therefore, we accept the null hypothesis, which concludes the missingness in all of the 15mins columns are **not dependent** on `'gamelength'`.

----
#### Check if souls **`'infernals',	'mountains', 'clouds', 'ocean', 'chemtechs', 'hextechs'`** is **dependent** on **`'patch'`**.

Let `'souls'` be all the souls apears in the data.

**Null hypothesis**: The missingess of `'souls'` does not depend on `'patch'`. 

**Alternative hypothesis**: The missingess of `'souls'` depends on `'patch'`. 

**Test statistics**: Total variances difference.
<iframe src="diagram/tvdsoul.html" width=630 height=450 frameBorder=50></iframe>
<iframe src="diagram/observesoul.html" width=630 height=450 frameBorder=50></iframe>

The p-value is **0.0**.

Therefore, **reject** the null hypothesis, conludes the missingness in `'url'` **dependens** on `'league'`.


