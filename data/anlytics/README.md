# BI & Analytics Task

Task description and data for candidates applying to work as an analyst at [THE ICONIC](https://www.theiconic.com.au).

## Background

At THE ICONIC, customer experience is at the centre of everything we do and ensuring that our customers know when they will receive their packages is of the utmost importance.

...

### Task

There are three stages to this task:

**Stage 1** : *GET THE DATA* - Unhash the data (`/data/sample-data/a_data.zip`) using the secret key provided by us, extract it, most importantly put it in a form you can use for the remainder of the tasks in this challenge.

**Stage 2** : *ANALYSE* - Write SQL queries to answer the following questions using the data from *Stage 1*.

1. How many new customer to we have in each state?
2. How many customers that are acquired (first order) via the Organic Search channel make subsequent orders?
3. How many customer shop in multiple categories vs two categories vs one category?

**Stage 3** : *VISUALISE & DELIVER* - Please deliver the following. We strongly believe in reproducibility and expect to be able to reproduce your results from what you deliver.

- SQL queries and answers from *Stage 2*
- Are customers that are acquired via a particular channel more likely to make a second purchase?
- If you were developing a promotion to try and prevent a customer churning, when would be the best time to send? 30/60/90 or other days after their previous order.
- Growing the number of customers that shop across multiple categories is a key business priority for us. What  actionable insights can you derive from the profile of customers that are multi category shoppers vs single category shoppers?
- For customers that order 10+ times per year, is there a trend in days between orders?
- Summarise your findings in an executive summary.

## Evaluation

We are looking for the following:

Stages:
1. You write good SQL.
2. You create a report/dashboard which highlights important information and helps us understand your analysis. 
4. You provide recommendations with sound reasoning.
5. You summarise your findings in an executive summary.

## Data

The data can be found in the `/data/sample-data/a_data.zip` file.

The dataset is provided in CSV format. It is compressed and super encrypted using the password provided to you.

The dataset comes from a simulated internal database. While the data is synthetic, please consider it as being as close to reality as possible.

| Column | Value | Description |
|-|-|-|
| order_nr | string | ID of the order |
| id_customer | string | ID of the customer |
| sku_config | string | product ID |
| item_category | string | product category |
| ordered_date | date | The date the order was placed |
| units | integer | quantity sold per product |
| ship_region | string | Customer Region mapped to State |
| ship_country | string | Customer country |
| device_type | string | type of device used to place the order |
| device_os | string | device operating system |
| channel_grouping | string | marketing channel attributed to the order |

All the best! Blow us away with your work!
