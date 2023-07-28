# Digital Reporting Analyst Task

Task description and data for candidates applying to work within the BI & Analytics team as a digital reporting analyst at [THE ICONIC](https://www.theiconic.com.au).

## Background

At THE ICONIC, customer experience is at the centre of everything we do and ensuring that our customers know when they will receive their packages is of the utmost importance.

THE ICONIC operates as both an online retailer as well as a marketplace for third-party vendors. 
We control the logistics for inventory being delivered from our warehouse which allows us to provide strong delivery guarantees. 
When an order is fulfilled by our marketplace sellers, they handle the logistics of packing and shipping the items to our customers. 
Our marketplace sellers vary in location as well as in the time it takes them to ship items. 
To provide the best experience for our customers making purchases from our marketplace sellers it is important that we are able to accurately predict when a customer will receive their package.

This challenge involves analysing behavioural data which is generated out of our website to understand our customers better.

### Pre-Setup

In order to understand the customer data we would ideally want you to work on the sample GA4 data available in Bigquery.

Below are the steps to access this dataset.

**Step 1** : Enable bigquery sandbox using your google account. Use the following step by step instructions provided here on the same.
https://cloud.google.com/bigquery/docs/sandbox

**Step 2** : Once the sandbox is setup, you then need to access the public BQ dataset. Use the instructions given below to access the same.
https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console#open_a_public_dataset

**Step 3** : 1) You can also add the public datasets by clicking on Add in the explore panel as shown below
![image](https://github.com/theiconic/technical-challenges/assets/35489107/13a7a687-108a-4294-a990-672106a74b39)
             
2) Now click on public datasets as shown below and search for 360 in the marketplace
![image](https://github.com/theiconic/technical-challenges/assets/35489107/1c619e51-88ef-416d-86de-bac66caea0f6)

3) You should now be able to view GA360 dataset as shown below
![image](https://github.com/theiconic/technical-challenges/assets/35489107/988fd52f-f7f7-44cf-80f1-d126dcb4bf09)

4) When you click on view dataset it should add the bigquery-public-data project as shown below
![image](https://github.com/theiconic/technical-challenges/assets/35489107/790356cd-3dda-478f-8aa5-42cea5a8a8c7)

5) Finally to answer the below task questions use the following datasets within the project where a refers to GA4 and b refers to UA360 sample dataset

a) bigquery-public-data.ga4_obfuscated_sample_ecommerce
b) bigquery-public-data.google_analytics_sample
        

Let us know incase you are not able to follow the steps.

There are three stages to this task:

**Stage 1** : *ANALYSE* - Write SQL queries to answer the following questions using the data from Setup done.

Calculate the following metrics for GA4 & UA360 for any one day in the dataset.

  1.Users
  2.New Users
  3.Sessions
  4.Engaged Sessions per User
  5.Average Session Duration
  6.Sessions Conversion Rate
  7.Bounce Rate
  8.Event Count
  9.Total Users
  10.Engaged Sessions
  11.Engagement Rate
  12.Average Engagement Time

**Stage 2** : *VISUALISE* - Can you draw some useful insights from the dataset in any of the visualisation tools available (Looker studio, excel, g-sheet etc.,).

**Stage 3** : *DELIVER* - Please deliver the following. We strongly believe in reproducibility and expect to be able to reproduce your results from what you deliver.

- SQL queries and answers from *Stage 1*
- Dashboard - A dashboard which helps the business understand the customer behaviour on the website
- Summarise your findings in an *executive summary* including your recommendations for what the business should do to improve the customer experience.

## Evaluation

We are looking for the following:

1. You write good SQL
2. You create a dashboard which highlights important information and helps the business easily understand the performance of our algorithms
3. You are able to write production quality code which is easy to understand and easily repeatable
4. You provide recommendations with sound reasoning
5. You summarise your findings in an executive summary

