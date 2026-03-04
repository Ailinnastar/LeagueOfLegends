---
layout: default
title: Trial of models
parent: Prediction Problem
description: "Trial of models"
nav_order: 5
---

# Baseline Model

**Model Description:**
**RandomForestClassifier** is the classifier chosen for this **prediction** model **predicting** `result` (1 - win or 0 - lose) with **5 Nominal features.**

| Column name(s) | Data type |Encoding|Reason of chose|
|:-----------:|:-----------:|:-----------:|:-----------:|
| 'firstblood', 'firstbaron', 'firstdragon', 'firsttower' | Nominal|FunctionTransformer(add) - add all together| Early achievements are really crucial as it often demonstrates the differences in performance and harmony in the team, provides momentum and psychological advantages, which will directly affect the result.|
| 'most_banned_champion_picked'| Nominal|OneHotEncoder() - One Hot Encoded| From the hypothesis **testing**, we concluded whether or not picking MBC will influence the win rate.|


**Result**

| | Train |Test|
|:-----------:|:-----------:|:-----------:|
|Score (accuracy)| 0.7364717301625819|0.7362290706139286|
|Root mean squared error|0.5133500461063758|0.5135863407315963|

With 50% wins and 50% losses, **random guessing (or always predicting the same class) would get 50% accuracy. Our baseline model reaches ~73%, so it clearly beats this no-information baseline.**

Through only using these features, I think the model performs **well** with accuracy **73.97% in train**, **72.65% in test** considering the fact that game results often **come** with luck.

**At the same time**, as we are predicting 1 or 0 for result, the root mean **square** error of .513 means my predictions and the actual values are a bit over halfway between a perfect model and the worst-case scenario, which says it is not **an** ideal model.

|feature name| contributions|
|:-----------:|:-----------:|
|sum_firsts| 0.9977255483653191|
|most_banned_champion_picked_True| 0.0022744516346808463 |

If we look **into** the measure of the importance or contribution of each feature used in the prediction, `sum_firsts` contributes dominantly with 99.6%, which is the column added up by `firstXX`, while **surprisingly** the one-hot encoded `most_banned_champion_picked` did not contribute a lot to the prediction as I **expected**.

# Final Model
**Model Description:**
**RandomForestClassifier** is the classifier chosen for this **prediction** model **predicting** `result` (1 - win or 0 - lose) with **16 features.**

| Column name(s) | Data type |Encoding|Reason of chose|
|:-----------:|:-----------:|:-----------:|:-----------:|
| 'firstblood', 'firstbaron', 'firstdragon', 'firsttower' | Nominal|FunctionTransformer(add) - add all together| Early achievements are really crucial as it often demonstrates the differences in performance and harmony in the team, provides momentum and psychological advantages, which will directly affect the result.|
| 'xpat15', 'goldat15'| **Quantitative**| QuantileTransformer()| Since 0-30 mins are **growing time**, 15 min is a crucial time stamp where teams have half finished building up the base, demonstrating how well the team is **developing against** the other, which will influence the result as well. As **values** have **a** wide range we used **quantile** to split **into** quarters. |
| 'team kpm'| **Quantitative**| Binarizer(threshold=all_pick_team['team kpm'].mean()),PolynomialFeatures(degree=2, include_bias=False)| This indicates how teams are efficient in **killing** the **opponents**, which **evaluates** to better players' technique and team strategy which highly leads to **success**.|
| 'earned gpm'| **Quantitative**| PolynomialFeatures(degree=2, include_bias=False)| Depict**s** how teams are efficiently growing **economically**, so **that** they can grow and purchase item**s** faster to be more advantaged.|
| 'dpm', 'wpm', 'wcpm', 'vspm','cspm'| **Quantitative**| PolynomialFeatures(degree=2, include_bias=False) |These evaluate the vision control and team strategy and decisions, how **effectively** utilising the **characteristics** of **the** champion and its position, which **constitute** a huge part **of** success. |
| 'dragons', 'barons', 'towers'| **Quantitative**| Pass in as is |These measures reflect **teams'** **strategic** decision, team strength, and team resources, which **of course** contribute significantly to the result.|

### **Optimising through Hyperparameters**
Run `GridSearchCV` with 5 folds on the model to find the hyper**-**parameter **that** optimise**s** the score for unseen **data**.

Hyperparameters **chosen** to be tuned:

| Hyperparameters name |Reason of chose|running optimised **parameter**|
|:-----------:|:-----------:|:-----------:|
| `'n_estimators'` |Number of trees influence the model's stability and accuracy since the prediction is based on the majority from all tree result**s**, but more trees means more time and cost therefore **we** have to find the balance in the number of trees.|300|
| `'max_depth'` |As deeper trees can capture more complex patterns, however **overly** complicated **trees** lead to overfit, therefore **we** also have to tune to find the mid-point.| 20|
| `'min_samples_split'` |It controls the minimum size of a node before **splitting**. By tuning it can prevent the model from learning overly specific patterns, **thus** reducing overfitting, however **too** generalised will lead to underfit, **therefore** it needs to be tuned.|10|
| `'min_samples_leaf'` |It **restricts** that leaf nodes contain more than a minimum number of samples, which improve**s** the model's ability to generalize, but **it** needs to be tune**d** as too high **a value for** this parameter will lead to underfitting as well.|1|
| `'max_features'` |Finds an optimal number that allows the trees to be diverse enough to capture various aspects of the data, while **there is** risk in **capturing** noise, therefore **it** needs to be tuned.|'auto'|

Hyperparameters pre**-**defined by me:

| Hyperparameters name |Reason of chose|number_choice|
|:-----------:|:-----------:|:-----------:|
|`'random_state'`|It ensures reproducibility which **makes** the result more **consistent**, **further** optimising prediction.|6 - my lucky number!|



**Result**

| | Train |Test|
|:-----------:|:-----------:|:-----------:|
|Score (accuracy)| 0.9873817034700315|0.9861684057267653|
|Root mean squared error|0.11233119126034609|0.11760779852218411|

From the result above I think the model is performing very well with high accuracy and low RMSE compared to the baseline model we had **previously**: **about 25 percentage points** improvement in test accuracy (from ~73% to ~98.6%).
Which I think this model is doing really **well at** prediction with data given at the **time of prediction**.

If we look **into** the confusion matrix and **calculate** the precision and recall:


<div style="text-align: center; margin: 1rem 0;">
<img width="538" alt="image" src="https://github.com/Ailinnastar/LeagueOfLegends/assets/156360722/2e13fddc-deea-48ce-ad0a-7037dea9994d">
</div>

| | Score |
|:-----------:|:-----------:|
|Precision| 0.9830999517141478|
|Recall|0.960377358490566|

We can see **precision** and recall are both high, which means if teams want to use this model to discuss **gaming** strategy, this model will not **overstate** (FP) **nor** underestimate their ability (FN).
