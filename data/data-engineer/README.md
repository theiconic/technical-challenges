# Data Engineer Task

Task description and data for candidates applying to be a Data Engineer at [The Iconic](https://www.theiconic.com.au).

While we love seeing your work in a repository we'd prefer if you didn't fork this one. Please reach out to your Talent Acquisiton Partner to receive the account IDs that you need to add as collaborators to your private repository.

## Background

Many of our customers at THE ICONIC - similar to most online shoppers - only provide the bare minimum of information needed when signing up as a new user or making a transaction on the site (i.e credit card details, delivery address etc). They do not provide their age, gender or any other personal details when they register as a new customer or they will simply purchase their items as a ‘Guest’ user.

Respecting customer privacy is of the utmost important at THE ICONIC and we understand why some shoppers are hesitant to provide personal information. However, to be able to better tailor our site, branding strategy, marketing, product and most importantly merchandising, we need to have a better handle on the profile of our shopper and understand the things that are more relevant to them.

## Task

There are three stages to this task:

**Stage 1** : *CLEAN* - Unhash the data (`/data/sample-data/test_data.zip`) using the secret key provided by us, extract it, most importantly clean it and put it in a form you can use - all programatically of course. We have also "intentionally" corrupted at least two columns in this file - two columns that might look correct but are not correct. They need "some correction" to be useful.

**Stage 2** : *INGEST* - A lot of our data lives in SQL databases, data engineers need to be very comfortable working with databases. Populate a database with the cleaned data from Stage 1.

**Stage 3** : *ANALYSE* - Write SQL queries to answer the following questions using the database from Stage 2.

1. What was the total revenue to the nearest dollar for customers who have paid by credit card?
2. What percentage of customers who have purchased female items have paid by credit card?
3. What was the average revenue for customers who used either iOS, Android or Desktop?
4. We want to run an email campaign promoting a new mens luxury brand. Can you provide a list of customers we should send to?

**Stage 4** : *PRODUCTIONISATION* - The business would like to run the above queries on a daily basis. Please detail your productionisation strategy.

## Evaluation

We are looking for the following:

1. You clean the data - we'd love to see how you identified and resolved the errors
2. You make sensible decisions
3. You are able to write production quality code which is easy to understand and easily repeatable

## Data

The data can be found in the `data/sample-data/` directory at the root level of this repository.

There are 2 files provided, however `test_data.zip` is the only one relevant to the data engineering challenge. It contains data in newline delimited JSON format.

The file has been super encrypted - the password to the file is "an unserialized lowercase SHA-256 hash" of the keyword you received. Reminder the password to the file is not the password shared with you but the unserialized SHA-256 hash of the password.

The dataset comes from a simulated internal database which we use for assessing user behaviour. Users are randomly sampled to and anonymised, along with programatically shifting all their behavioural metrics by set deviations.

TLDR - Don't worry, consider this dataset to be as close to reality as possible.

The dataset has currently been put in a newline delimited JSON format, hashed and then compressed - so all the best!

**The way to open the files is through the password that you received from us!**

| Column                   | Value   | Description                                                              |
|--------------------------|---------|--------------------------------------------------------------------------|
| customer_id              | string  | ID of the customer - super duper hashed                                  |
| days_since_first_order   | integer | Days since the first order was made                                      |
| days_since_last_order    | integer | Days since the last order was made                                       |
| is_newsletter_subscriber | string  | Flag for a newsletter subscriber                                         |
| orders                   | integer | Number of orders                                                         |
| items                    | integer | Number of items                                                          |
| cancels                  | integer | Number of cancellations - when the order is cancelled after being placed |
| returns                  | integer | Number of returned orders                                                |
| different_addresses      | integer | Number of times a different billing and shipping address was used        |
| shipping_addresses       | integer | Number of different shipping addresses used                              |
| devices                  | integer | Number of unique devices used                                            |
| vouchers                 | integer | Number of times a voucher was applied                                    |
| cc_payments              | integer | Number of times a credit card was used for payment                       |
| paypal_payments          | integer | Number of times PayPal was used for payment                              |
| afterpay_payments        | integer | Number of times AfterPay was used for payment                            |
| apple_payments           | integer | Number of times Apple Pay was used for payment                           |
| female_items             | integer | Number of female items purchased                                         |
| male_items               | integer | Number of male items purchased                                           |
| unisex_items             | integer | Number of unisex items purchased                                         |
| wapp_items               | integer | Number of Women Apparel items purchased                                  |
| wftw_items               | integer | Number of Women Footwear items purchased                                 |
| mapp_items               | integer | Number of Men Apparel items purchased                                    |
| wacc_items               | integer | Number of Women Accessories items purchased                              |
| macc_items               | integer | Number of Men Accessories items purchased                                |
| mftw_items               | integer | Number of Men Footwear items purchased                                   |
| wspt_items               | integer | Number of Women Sport items purchased                                    |
| mspt_items               | integer | Number of Men Sport items purchased                                      |
| curvy_items              | integer | Number of Curvy items purchased                                          |
| sacc_items               | integer | Number of Sport Accessories items purchased                              |
| msite_orders             | integer | Number of Mobile Site orders                                             |
| desktop_orders           | integer | Number of Desktop orders                                                 |
| android_orders           | integer | Number of Android app orders                                             |
| ios_orders               | integer | Number of iOS app orders                                                 |
| other_device_orders      | integer | Number of Other device orders                                            |
| work_orders              | integer | Number of orders shipped to work                                         |
| home_orders              | integer | Number of orders shipped to home                                         |
| parcelpoint_orders       | integer | Number of orders shipped to a parcelpoint                                |
| other_collection_orders  | integer | Number of orders shipped to other collection points                      |
| average_discount_onoffer | float   | Average discount rate of items typically purchased                       |
| average_discount_used    | float   | Average discount finally used on top of existing discount                |
| revenue                  | float   | $ Dollar spent overall per person                                        |

All the best! Blow us away with your work!
