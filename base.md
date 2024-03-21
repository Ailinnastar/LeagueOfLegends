---
layout: default
title: Trial of models
parent: Prediction Problem
description: "Trial of models"
nav_order: 5
---

## Baseline Model

**Model Description:**
**RandomForestClassifier** is the classifier chosen for this prodiction model prediting `result`(1 - win or 0 -lose) with **5 Norminal features.**

| Column name(s) | Data type |Encoding|Reason of chose|
|:-----------:|:-----------:|:-----------:|:-----------:|
| 'firstblood', 'firstbaron', 'firstdragon', 'firsttower' | Norminal|FunctionTransformer(add) - add all together| Early achivements are really curcial as it often demonstrates the differences in performance and harmony in the team, provides momentum and psychological advantages, which will directly affect the result.|
| 'most_banned_champion_picked'| Norminal|OneHotEncoder() - One Hot Encoded| From the hypothesis tessting, we concluded whether or not picking MBC will influence the win rate.| 


**Result** 

|  | Train |Test|
|:-----------:|:-----------:|:-----------:|
|Score (accuracy)| 0.7364717301625819|0.7362290706139286|
|Root mean squared error|0.5133500461063758|0.5135863407315963|

Through only using these features, I think the model performs **well** with accuracy **73.97% in  train**, **72.65% in test** concidering with the fact that games results often comes with luck.

While **bad** in the same time, as we are predicting it is 1, 0 for result and the root mean squre error is .513 whcih means my predictions and the actual values is a bit over halfway between a perfect model and the worst-case scenario, which says it is not a ideal model.

|feature name| contributions|
|:-----------:|:-----------:|
|sum_firsts| 0.9977255483653191|
|most_banned_champion_picked_True| 0.0022744516346808463 |

If we look in to the measure of the importance or contribution of each feature used in the prediction, `sum_firsts` contributes dominantly with 99.6%, which is the column added up by `firstXX`, while suprisingly the one hot encoded`most_banned_champion_picked` did not contribute a lot to the prediction as I expacted.

## Final Model
**Model Description:**
**RandomForestClassifier** is the classifier chosen for this prodiction model prediting `result`(1 - win or 0 -lose) with **16 features.**

| Column name(s) | Data type |Encoding|Reason of chose|
|:-----------:|:-----------:|:-----------:|:-----------:|
| 'firstblood', 'firstbaron', 'firstdragon', 'firsttower' | Norminal|FunctionTransformer(add) - add all together| Early achivements are really curcial as it often demonstrates the differences in performance and harmony in the team, provides momentum and psychological advantages, which will directly affect the result.|
| 'xpat15', 'goldat15'| Quantative| QuantileTransformer()| Since 0-30 mins are growingtime, 15 min is a curcial time stamp where teams have half finished building up the base, demonstrates how well the team is developoing agisnt the other, which will influence the result as well. As vales have wide range we used quualtile to split in to quarter. | 
| 'team kpm'| Quantative| Binarizer(threshold=all_pick_team['team kpm'].mean()),PolynomialFeatures(degree=2, include_bias=False)| This indicates how teams are efficient in kill the oponents, which evalueates to better players' technique and team stretegy which highly leads to sucess .| 
| 'earned gpm'| Quantative| PolynomialFeatures(degree=2, include_bias=False)| Depict how teams are efficiently growing economicly, so tha they can grow and purchase item faster to be more advantaged.| 
| 'dpm', 'wpm', 'wcpm', 'vspm','cspm'| Quantative|  PolynomialFeatures(degree=2, include_bias=False) |These evaluate the vision control and team strategy and decisions, how effecting utilising the charaterisctics of champion, and its position, which will be consist as a huge part to have success.   | 
| 'dragons', 'barons', 'towers'| Quantative| Pass in as it is |These measures reflect that teams stretigic decisgion, team strength, and team resources, which ofcourse contribute significantly to the result.|

### **Optimising thorugh Hyperparameters**
Run `GridSearchCV` with 5 folds on the model to find the hyper-parameter optimises the score for unseen datas.

Hyperparameters chosed to be tuned:

| Hyperparameters name |Reason of chose|running optimised paramter|
|:-----------:|:-----------:|:-----------:|
| `'n_estimators'` |Number of trees influence the model's stability and accuracy since the prediction is based on the majority from all tree result, but more trees means more time and cost therefore have to find the balance in the number of trees.|300|
| `'max_depth'` |As deeper trees can capture more complex patterns, however over complicated will leads to overfit, therefore also have to tune to find the mid-point.| 20|
| `'min_samples_split'` |It controls the minimum size of a node before spliting. By tuning it can prevent the model from learning overly specific patterns,which reducing overfitting, however to generalised will lead to underfit, therfore it needs to be tuned.|10|
| `'min_samples_leaf'` |It restrict that leaf nodes contain more than a minimum number of samples, which improve model's ability to generalize, but needs to be tune as too high in this parameter will lead to underfitting as well.|1|
| `'max_features'` |Finds an optimal number that allows the trees to be diverse enough to capture various aspects of the data, while this will have risk in captureing noise, therefore needs to be tuned.|'auto'|

Hyperparameters pre defined by me:
| Hyperparameters name |Reason of chose|number_choice|
|:-----------:|:-----------:|:-----------:|
|`'random_state'`|It ensures reproducibility which made the result more consisnent, ruther optimising results.|6|



**Result** 

|  | Train |Test|
|:-----------:|:-----------:|:-----------:|
|Score (accuracy)| 0.9873817034700315|0.9861684057267653|
|Root mean squared error|0.11233119126034609|0.11760779852218411|

<img width="538" alt="image" src="https://github.com/Ailinnastar/LeagueOfLegends/assets/156360722/2e13fddc-deea-48ce-ad0a-7037dea9994d">





