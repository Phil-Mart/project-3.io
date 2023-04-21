# Project 3

# Project Description 

## Part 1: Data and Delivery
- Document the data components used in the project.
- Select a dataset that contains at least 100 unique records.
- House the data in a database.
- Use a Python Flask API and include HTML/CSS, Javascript, and the chosen database. 

## Part 2: Back End
- Create code for visualizations.
- Use a javascript library not shown in class.
- Create a leaflet of plotly chart via webscraping or a dashboard.

## Part 3: Visualizations
- Create 3 visualizations. 
- Create user-driven interactions (i.e., dropdowns, filers. zoom, etc.).
- Tell a story with the data visualizations. 

## Part 4: Group Presentation
- Create a group presentation to present the findings.

# Software and Files
- Getting the json file
  - import pandas as pd
  - import requests
  - import json
  - from config import api_key
  - url = "https://api.covidactnow.org/v2/counties.json?"


# Output/Analyses

## Part 1: Data and Delivery
- We used an open-source API, CovidActNow.org
<img width="860" alt="Screenshot 2023-04-20 at 9 17 47 PM" src="https://user-images.githubusercontent.com/119909433/233525068-283c495e-a732-4a39-8667-55f3cde7f173.png">

- From the API, we parsed through pandas and exported to a json 
<img width="779" alt="Screenshot 2023-04-20 at 9 19 42 PM" src="https://user-images.githubusercontent.com/119909433/233525330-6d4250f6-0832-4922-9a6c-02b9cf2af7ea.png">
<img width="770" alt="Screenshot 2023-04-20 at 9 21 04 PM" src="https://user-images.githubusercontent.com/119909433/233525471-6c82b1ad-1ae2-485c-9306-bc03027f48c8.png">
<img width="788" alt="Screenshot 2023-04-20 at 9 21 17 PM" src="https://user-images.githubusercontent.com/119909433/233525498-014af21a-f457-4ac0-ab41-3585e9e75bf8.png">

- We housed the data in mongoDB
![screen_shot_2023-04-20_at_9 37 23_pm_720](https://user-images.githubusercontent.com/119909433/233527675-b6ee280c-fe37-4537-9eb2-016fd07a4b9d.png)


- We created html and css files for the dashboard
<img width="763" alt="Screenshot 2023-04-20 at 9 22 45 PM" src="https://user-images.githubusercontent.com/119909433/233525662-ceb10615-4188-445e-81d3-19da4166d35a.png">
<img width="689" alt="Screenshot 2023-04-20 at 9 22 58 PM" src="https://user-images.githubusercontent.com/119909433/233525678-4a1be952-bbe6-4db1-8a23-2080750cd7d9.png">


## Part 2: Back End
- We created the code for the visualizations
<img width="735" alt="Screenshot 2023-04-20 at 9 28 27 PM" src="https://user-images.githubusercontent.com/119909433/233526275-ac40e079-b4f2-47c5-9206-8d47b208d17a.png">
<img width="827" alt="Screenshot 2023-04-20 at 9 29 49 PM" src="https://user-images.githubusercontent.com/119909433/233526460-b7656ba4-25d7-4c57-9cf0-09b7705be56b.png">
<img width="787" alt="Screenshot 2023-04-20 at 9 30 03 PM" src="https://user-images.githubusercontent.com/119909433/233526492-229680af-a986-47dc-a1cf-042213ecff65.png">
<img width="846" alt="Screenshot 2023-04-20 at 9 30 16 PM" src="https://user-images.githubusercontent.com/119909433/233526521-b32262dc-eff0-43d8-bac6-9e0bd2025924.png">

- We coded and had an HTML file set up to create a dashboard of the three visualizations. 
<img width="964" alt="Screenshot 2023-04-20 at 9 32 38 PM" src="https://user-images.githubusercontent.com/119909433/233526796-8f3fa0e3-18bd-45ad-b444-aeb7b3f73cd1.png">
<img width="848" alt="Screenshot 2023-04-20 at 9 32 56 PM" src="https://user-images.githubusercontent.com/119909433/233526838-564e2e89-a8c4-4d9e-a873-66d6aac824b8.png">


## Part 3: Data Visualizations
- We created the code for a bubble chart, bar chart, and gauge chart. 
<img width="735" alt="Screenshot 2023-04-20 at 9 28 27 PM" src="https://user-images.githubusercontent.com/119909433/233526275-ac40e079-b4f2-47c5-9206-8d47b208d17a.png">
<img width="827" alt="Screenshot 2023-04-20 at 9 29 49 PM" src="https://user-images.githubusercontent.com/119909433/233526460-b7656ba4-25d7-4c57-9cf0-09b7705be56b.png">
<img width="787" alt="Screenshot 2023-04-20 at 9 30 03 PM" src="https://user-images.githubusercontent.com/119909433/233526492-229680af-a986-47dc-a1cf-042213ecff65.png">
<img width="846" alt="Screenshot 2023-04-20 at 9 30 16 PM" src="https://user-images.githubusercontent.com/119909433/233526521-b32262dc-eff0-43d8-bac6-9e0bd2025924.png">

- We created user-driven interactions (i.e., dropdowns, filers. zoom, etc.). In this case, we had a dropdown menu that filtered counties by state. 
<img width="732" alt="Screenshot 2023-04-20 at 9 27 39 PM" src="https://user-images.githubusercontent.com/119909433/233526173-282d756e-c35c-42ae-b0d1-ed3a8112fa60.png">
<img width="620" alt="Screenshot 2023-04-20 at 9 28 04 PM" src="https://user-images.githubusercontent.com/119909433/233526223-d4b5b6e9-6072-4ab6-b197-3464f12e9bcb.png">

- Our visualizations captured the deaths by county per state, the top 10 counties per state that had the highest infection rates, and the states with the highest vaccination rates. 


## Part 4: Group Presentation
- We created a presentation to showcase our coding, talk about the dataset and database, and discuss the lessons learned from our project. 
<img width="627" alt="Screenshot 2023-04-20 at 9 34 19 PM" src="https://user-images.githubusercontent.com/119909433/233526990-d9b3e5f4-b8ae-40d1-85a1-4d28b26e633f.png">



# Authors 
- Phillip Martinez github: Phil-Mart
- Brittany Wright github:brittanynicole7
- Francisco Latimer github: flatimer
- Jorge Chavez github: jorgechavez25
