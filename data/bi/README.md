# BI Task

Task description and data for candidates applying to work within the BI & Analytics team at [THE ICONIC](https://www.theiconic.com.au).

## Background

At THE ICONIC, customer experience is at the centre of everything we do and ensuring that our customers know when they will receive their packages is of the utmost importance.

THE ICONIC operates as both an online retailer as well as a marketplace for third-party vendors. We control the logistics for inventory being delivered from our warehouse which allows us to provide strong delivery guarantees. When an order is fulfilled by our marketplace sellers, they handle the logistics of packing and shipping the items to our customers. Our marketplace sellers vary in location as well as in the time it takes them to ship items. To provide the best experience for our customers making purchases from our marketplace sellers it is important that we are able to accurately predict when a customer will receive their package.

Our data science team is always working to improve our prediction algorithms. This challenge involves analysing simulated data for delivery prediction algorithms.

### Task

There are four stages to this task:

**Stage 1** : *CLEAN* - Unhash the data (`/data/sample-data/mp_data.zip`) using the secret key provided by us, extract it, most importantly clean it and put it in a form you can use for the remainder of the tasks in this challenge. We have also "intentionally" corrupted at least two columns in this file - two columns that might look correct but are not correct. They need "some correction" to be useful.

**Stage 2** : *ANALYSE* - Write SQL queries to answer the following questions using the data from *Stage 1*.

1. How many orders have we received in each state?
2. What percentage of orders arrive after the predicted date?
3. What percentage of orders arrive more than 2 days early?
4. For users who had an order arrive late, how many have made a subsequent order?
5. Create a score to rank our sellers from best to worst

**Stage 3** : *EVALUATE* - Evaluate which of our algorithms performed best in the A/B test.

**Stage 4** : *DELIVER* - Please deliver the following. We strongly believe in reproducibility and expect to be able to reproduce your results from what you deliver.

- Details from *Stage 1* to enable us to understand how you approached the problem, identified issues, corrected issues and reproduce your results
- SQL queries and answers from *Stage 2*
- Dashboard - A dashboard which helps the business understand the performance of our algorithms. Please use the design and layout which best conveys the most important insights
- Algorithm evaluation - Your findings and recommendations from *Stage 3*
- Summarise your findings in an *executive summary* including your recommendations for what the business should do to improve the customer experience when ordering marketplace items

## Evaluation

We are looking for the following:

1. You clean the data - we'd love to see how you identified and resolved the errors
2. You write good SQL
3. You create a dashboard which highlights important information and helps the business easily understand the performance of our algorithms
4. You are able to write production quality code which is easy to understand and easily repeatable
5. You provide recommendations with sound reasoning
6. You summarise your findings in an executive summary

## Data

The data can be found in the `/data/sample-data/mp_data.zip` file.

The dataset is provided in CSV format. It is compressed and super encrypted using the password provided to you.

The dataset comes from a simulated internal database. While the data is synthetic, please consider it as being as close to reality as possible.

| Column | Value | Description |
|-|-|-|
| customer_id | string | ID of the customer |
| order_id | string | ID of the order |
| supplier_id | string | ID of the marketplace seller |
| carrier_id | string | ID of the carrier used to ship the items |
| algorithm | string | Version of the algorithm used in an A/B test to predict delivery time |
| customer_region | string | Postcode mapped to an Australia Post shipping region |
| customer_state | string | Customer Region mapped to State |
| ordered_at_date | datetime | The date/time the order was placed |
| shipped_at_date | datetime | The date/time the order items were shipped |
| predicted_delivery_date | datetime | The date/time we told the customer they would receive their items |
| actual_delivery_date | datetime | The date/time the items were delivered |

All the best! Blow us away with your work!
