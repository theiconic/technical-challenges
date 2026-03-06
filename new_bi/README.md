# THE ICONIC: BI & Data Insights Challenge 

## Background

At THE ICONIC, we are obsessed with being data driven, and we use the data to inform all our decisions. This challenge was created so we can understand how you solve problems and get to the insights, as well as how you can display the characteristics of a modern data analyst / analytics engineer. This test will show that you are able to work on all parts of the analytics process, generate insights as well as use modern agentic tools to help you execute the work efficiently.

---

## Stage 1: Engineering & Refactoring

**Goal:** Prove you can build a scalable foundation.

1. **Data Quality Audit:** Identify 3 critical issues in the data source (`bi_data.csv`) (e.g., specific date errors, outlier logic, or nulls) that would break an automated pipeline.

2. **Schema Refactoring:** The provided data is a flat CSV. Design a Star Schema (Fact and Dimension tables) to store this data. Provide the DDL or a diagram. Why is this better for a BI tool like Looker or Tableau?

3. **Propose a Data Ecosystem:** Suggest 3 specific external tables (e.g., `dim_marketing_spend`, `dim_weather_indices`) you would join to this data to better explain sales variance. Define the Join Keys. This exercise is purely theoretical, these tables do not exist - your task is to propose them and design a structure that would enable you to derive further value for The Iconic.

---

## Stage 2: Advanced SQL Intelligence

**Goal:** Use complex logic to find "hidden" stories.

Write SQL queries (using CTEs and Window Functions) for the following:

1. **The "Comeback King":** Identify the store that achieved the highest cumulative sales growth in the 4 weeks immediately following a week of negative or zero growth.

2. **Statistical Anomaly Detection:** Flag every "Flash Sale" week—any week where a store's sales were > 3 standard deviations above its own 52-week rolling average.

3. **Counter-Cyclical Trends:** Identify stores where Fuel_Price rose by >5% while Weekly_Sales also increased (contrary to traditional economic theory).

---

## Stage 3: Dashboard Asset & Insight Delivery

**Goal:** Build a functional tool and extract commercial value.

1. **The Build:** Create an interactive dashboard (using a BI tool of your choice) that allows a user to explore these trends.

2. **The AI Twist:** Use Gen-AI to build this asset in a language you do not usually work in (e.g., if you are a SQL expert, build a React/Chart.js dashboard).

3. **The Methodology:** Describe how you "prompted" your way to this build. What were the hurdles? How did you debug the AI's output?

4. **The Insights:** Deliver 4-5 high-value insights found within the data. Use your dashboard to prove these. Present these either directly from the dashboard or in a presentation tool of your choice (e.g. slides)

---

## Stage 4: Agentic Analytics & AI Strategy

**Goal:** Show how you would scale your impact.

1. **The Analyst Agent:** Describe the architecture of an AI Analytics Agent you would build for THE ICONIC.
   - What specific "Tools" would it have access to (e.g., Python, SQL, Internal Slack logs)?
   - How would this agent help someone in the business solve a problem?
   
   *Note: You do not need to build this agent (but you can if you like!), you just need to theoretically describe it*

2. **Team Integration:** How would you use AI to automate the "boring" parts of your BI role to focus on Stage 1 & 2 of this exercise. Did you use AI in these parts? If so, how?
