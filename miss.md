---
title: Assessment of Missingness
layout: default
description: "Assessment of Missingness"
nav_order: 3
---

## NMAR Analysis

## Missingness Dependency ##

### Check if all infroamtion of game after started 15 mins [**`'goldat15'`** ,**` 'xpat15'`** ,**`'csat15'`** ,**`'opp_goldat15'`** , **`'opp_xpat15'`** ,**`'opp_csat15'`** ,**`'golddiffat15'`** ,**`'xpdiffat15'`** ,**` 'csdiffat15'`**,**`'killsat15'`** ,**`'assistsat15'`**,**`'deathsat15'`**, **` 'opp_killsat15'`**, **`'opp_assistsat15'`**,**`'opp_deathsat15'`**] are **dependent** on **`'gamelength'`**.
**Null hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) does not depend on `'gamelength'`. 

**Alternative hypothesis**: The missingess of all infroamtion of game after started 15 mins(`'XXX15'`) depends on `'gamelength'`. 

**Test statistics**: Total variances difference.


<iframe src="graph/tvd15.html" width=800 height=600 frameBorder=0></iframe>

