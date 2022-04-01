# BI Task

Task description and data for candidates applying to work within the Data team at [THE ICONIC](https://www.theiconic.com.au).

## Background

At THE ICONIC, customer experience is at the centre of everything we do and ensuring that our customers know when they will receive their packages is of the utmost importance.

THE ICONIC operates as both an online retailer as well as a marketplace for third-party vendors. We control the logistics for inventory being delivered from our warehouse which allows us to provide strong delivery guarantees. When an order is fulfilled by our marketplace sellers, they handle the logistics of packing and shipping the items to our customers. Our marketplace sellers vary in location as well as in the time it takes them to ship items. To provide the best experience for our customers making purchases from our marketplace sellers it is important that we are able to understand shipping times, customer experiences and business impacts.

### Task

*Note:* The data has been reduced to improve the time required to complete this challenge. When approaching the challenge, please consider what the real-world data might be when making design decisions.

There are four stages to this task:

**Stage 1** : *LOAD* - Unhash the data (`/data/sample-data/model_data.zip`) using the secret key provided by us, extract it, put it in an optimal form for adhoc reporting and the remainder of the tasks in this challenge. Importantly, we have "intentionally" corrupted at least two columns in this file - two columns that might look correct but are not correct. They need "some correction" to be useful.

**Stage 2** : *ANALYSE* - Write SQL queries to answer the following questions using the data you have prepared in *Stage 1*.

1. What is the average number of items per order by each region?
2. What percentage of delivered orders arrived late?
3. For delivered orders where the total order value was at least $100, what was the shortest and longest time from the order being placed to delivery for each region?
4. How many orders with more than 1 item were delivered late?
5. What percentage of orders delivered on time had more than 1 item?
6. What is the gender of the customer who has purchased the most items?
7. For delivered orders, what is the total amount spent by customers who had a longer than average delivery time for their region?

**Stage 3** : *DELIVER* - Please deliver the following. We strongly believe in reproducibility and expect to be able to reproduce your results from what you deliver.

- Details from *Stage 1* to enable us to understand:
  - How and why you modelled the data the way you did
  - Which issues you found in the data
  - How you corrected the issues found
- SQL queries and answers from *Stage 2*

## Evaluation

We are looking for the following:

1. You clean the data - we'd love to see how you identified and resolved the errors
2. You model the data
3. You write good SQL
4. You detail any assumptions you have made

## Data

The data can be found in the `/data/sample-data/model_data.zip` file.

The dataset is provided in CSV format. It is compressed and encrypted using the password provided to you.

The dataset comes from a simulated internal database. While the data is synthetic, please consider it as being as close to reality as possible.

| Column | Value | Description |
|-|-|-|
| customer_id | string | ID of the customer |
| order_number | string | ID of the order |
| sku | string | Stock Keeping Unit which can be considered a product ID |
| order_created_at | datetime | The date and time when the order was placed |
| delivered | string | A flag denoting whether the order has been delivered |
| price_paid | float | The price the customer paid for the item |
| ship_region_code | string | The region (state) to which this item was shipped |
| ship_country | string | The country to which this item was shipped |
| days_since_first_order | integer | The number of days since the customer first made an order |
| delivery_status | string | The current delivery status for this item |
| actual_delivery_date | datetime | The date/time the item was delivered |
| predicted_delivery_date | datetime | The predicted delivery date for the item |

All the best! Blow us away with your work!
