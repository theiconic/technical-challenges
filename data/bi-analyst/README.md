# Analytics Task

Task description and data for candidates applying to work as a bi-analyst at [THE ICONIC](https://www.theiconic.com.au).

## Background
At THE ICONIC, we are obsessed with being data driven, and we use the data to inform all our decisions. This challenge was created so we can understand how you solve problems and get to the insights.

### Task

There are three stages to this task:

**Stage 1** : *GET AND CLEAN THE DATA* - Download the file (`/data/sample-data/bia_data.csv`), most importantly put it in a form you can use for the remainder of the tasks in this challenge. Furthermore, there are some issues with the data. You should spend some time investigating. 

**Stage 2** : ANALYSE - Write SQL queries to answer the following questions using the data from Stage 1.
- Which store has the highest sales in Q3 (Jul-Sep) 2011, excluding holiday weeks?
- During the week when the fuel price was the lowest in a store area, which store overall, registered the highest sales?
- Across the entire dataset, which store (and in which week) witnessed the highest sales growth over their own sales in the last week?
- Which store has seen an increase/decrease in unemployment index over the years?

**Stage 3** : VISUALISE & DELIVER - Please deliver the following. We strongly believe in reproducibility and expect to be able to reproduce your results from what you deliver.
SQL queries and answers from Stage 2
- Does holiday week have an impact on fuel prices across the stores?
- Is there a correlation between the weekly fuel prices and store sales? 
- Which week has the maximum number of stores registering positive growth week on week?
- Can you find any interesting insights to share?
- Summarise your findings in an executive summary.

## Evaluation

We are looking for the following:
Stages:
- You write good SQL.
- You create a report/dashboard which highlights important information and helps us understand your analysis.
- You provide recommendations with sound reasoning.
- You summarise your findings in an executive summary.

## Data

The data can be found in the /data/sample-data/bia_data.csv file. The dataset is provided in CSV format.

| Column | Value | Description |
|-|-|-|
| store | integer | ID of the store |
| week_ending_date | date | Week ending date
| weekly_sales | float |Weekly sales for the store in the week ending on the date above
| is_holiday_week | boolean | If there is a holiday in the week
| Fuel_price | date | Fuel prices for the specific week in the specific store area
| CPI | float | Consumer Price index for that week
| Unemployment index | float | Unemployment rate for that week

All the best! Blow us away with your work!
