# BI Engineer Task

Task description and data for candidates applying to work as a BI Specialist at [THE ICONIC](https://www.theiconic.com.au).

## Background

At THE ICONIC, customer experience is at the centre of everything we do. Thus, we are opsessed with understanding our customers better. This challenge was created so we can undersand how you solve problems and get to insights.

### Task

There are four stages to this task:

**Data Gathering** : *GET THE DATA* - Unhash the data (`/data/sample-data/bi-engineer-data.zip`) using the secret key provided by us, extract it, most importantly put it in a form you can use for the remainder of the tasks in this challenge.

**Data Cleaning** : *Cleanse* - Write SQL queries to answer the following questions using the data.

1. Can you identify some data quality issues within all the three sources that have been provided and remidy before any further transformation or analysis is done.
2. Can you document the issues and assumptions made. 

**Data Transformation** : *Transform* - Transform the data provided to below in order to create staging and summary tables as shown below.

- Create a *User Journey* table with the following information

| Column_Name | Type | Description |
|-|-|-|
| User_id | INTEGER | Unique_Id of the user. It is the Primary Key of the table and only contains NOT NULL values |
| username | STRING | Username for the user |
| email | STRING | emai_id of the user |
| first_name | STRING | first name of the user |
| last_name | STRING | last name of the user |
| address1 | STRING | address1 information of the user - obtained from the addresses column in the users.csv file |
| country | STRING | country information of the user - obtained from the addresses column in the users.csv file |
| city | STRING | city information of the user - obtained from the addresses column in the users.csv file |
| state | STRING | state information of the user - obtained from the addresses column in the users.csv file |
| zipcode | STRING | Zipcode information of the user - obtained from the addresses column in the users.csv file |
| total orders | INTEGER | Total orders placed by the user |

- Create a *Transaction Journey* table with the following information

| Column_Name | Type | Description |
|-|-|-|
| Item_Id | STRING | Unique ID of the product. Not NULL column |
| User_ID | INTEGER | Unique ID of the User. Not NULL column |
| Product_Name | STRING | Name of the product |
| Product_Category | STRING | Category to which the product belongs to |
| ProductViewed | DATE TIME | Date time when the product was viewed by the user |
| ProductAdded | DATE TIME | Date time when the product was added by the user |
| CartViewed | DATE TIME | Date time when the cart was viewed by the user |
| CheckoutStarted | DATE TIME | Date time when the checkout was started by the user |
| OrderCompleted | DATE TIME | Date time when the order was completed by the user |
| Discount | BOOLEAN | True or False column to indicate if a discount was applied to the product or not  |
| Price | FLOAT | price of the product |

- Create a *Summary* table with the following information

| Column_Name | Type | Description |
|-|-|-|
| Product_Category | STRING | Category to which the product belongs to |
| Total_ProductsViewed | INTEGER | Total product view events which happened within the category |
| Total_ProductsAdded | INTEGER | Total product add events which happened within the category |
| Total_CartViewed | INTEGER | Total cart view events which happened within the category |
| Total_CheckoutStarted | INTEGER | Total checkout start events which happened within the category |
| Total_OrdersCompleted | INTEGER | Total order completed events which happened within the category |
| Total_Interactions | INTEGER | Total Interactions which happened within the category  |
| Total_Orders | INTEGER | Total Orders created for the category |
| Total_Customers_Ordered | INTEGER | Total customers who ordered products of the particular category |
| Total_Revenue | FLOAT | Total revenue obtained for the particular category. |

**Data Analysis** : *Analyse the Data* - Based on the above tables created can you answer the following questions.

1. What is the most popular category based on the total orders received and revenue obtained?
2. What is the overall conversion rate for the store?
3. Which event has low transition rate and can you let us know the transition rate across each of the events?
4. What is the percentage of Cart abandonment across the store, where Cart abandonment consists of events_type(Added to cart and checkout started) but orders are not completed?
5. Find the Avg duration between checkout started and order completed and do you find any anamoly in the data?

**Data Visualisation** : *Visualise the Data* 

1. Create a dashboard to visualise the data and provide us with at least 3 interesting insights that you can draw from this data


## Evaluation

We are looking for the following:

Stages:
1. You write good SQL and are proficient in transformation and analysis
2. You create a report/dashboard which highlights important information and helps us understand your analysis.
3. You summarise your findings in an executive summary.

## Data

The data can be found in the `/data/sample-data/bi-engineer-data.zip` file.

The dataset is provided in CSV format. It is compressed and super encrypted using the password provided to you.

The dataset comes from a simulated internal database. While the data is synthetic, please consider it as being as close to reality as possible.

- **Users.csv**

| Column | Type | Description |
|-|-|-|
| id | INTEGER | Unique ID of the user and is a not null column |
| username | STRING | Username of the user |
| email | STRING | email id of the user |
| first_name | STRING | first name of the user |
| last_name | STRING | last name of the user |
| addresses | STRING | address information composed of address1,address2, country,city,state and zipcode |
| age | INTEGER | age of the user |
| gender | STRING | gender of the user |
| persona | STRING | persona to which the user belongs to |
| discount_persona | STRING | discount persona of the user |

- **Products.csv**

| Column | Type | Description |
|-|-|-|
| id | STRING | Unique ID of the product and is a not null column |
| url | STRING | url link to the product |
| name | STRING | name of the product |
| category | STRING | category to which the product belongs to |
| style | STRING | style to which the product belongs to |
| description | STRING | description of the product |
| price | FLOAT | price of the product |
| image | STRING | image of the product |
| gender_affinity | STRING | gener affinity of the product |
| current_stock | INTEGER | current stock availability of the product. Is always a positive value |

- **Interactions.csv**

| Column | Type | Description |
|-|-|-|
| Item_ID | STRING | Unique ID of the product and is a not null column |
| USer_ID | INTEGER | Unique ID of the user and is a not null column |
| Event_Type | STRING | Different events such as ProductViewed,ProductAdded,CartViewed,CheckoutStarted,OrderCompleted happening within the website |
| Timestamp | INTEGER | Timestamp during which the events have occured |
| Discount | BOOLEAN | Discount if any has been applied on the orders completed |

**Useful Definitions**
- Revenue - It refers to the amount obtained from a product when an order completed event takes place
- Conversion rate - It is the sum of OrderCompleted events overs the Total_Events taken place
- Transition rate - It is the % of users moving from one event to the other. i.e. ProductViewed--> ProductAdded , ProductAdded --> CartViewed, CartViewed --> CheckoutStarted, CheckoutStarted -->OrderCompleted
- Cart abandonment - It refers to the number of users who have performed of Added to cart and checkout started event but orders are not completed

All the best! Blow us away with your work!
