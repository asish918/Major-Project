<div align="center">
  <div id="user-content-toc">
    <ul>
      <summary><h1 style="display: inline-block;">🥔 Potato Disease Classification</h1></summary>
    </ul>
  </div>
  
  <p>Deep Learning Project Using Tensorflow, GCP & React </p>
</div>

## 🎯 Goal

The goal of this project is to help farmers diagnose their crops. This project uses image classification using CNN architecture with Tensorflow to detect potato plant diseases, deployed to GCP and used in a web frontend app made with React.

## 💾 Dataset Used

This data contains three datasets that contains photos of potato leaves. One dataset contains `Healthy` potato leaves, `Early Blight` and `Late Blight`.

More info about dataset can be found here :

- Kaggle - https://www.kaggle.com/datasets/arjuntejaswi/plant-village

## 📝 Project Deployment Architecture

![potatodisease_architecture](readme_assets/deployed.png)

## 🛠️ Technologies Used

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![Jupyter](https://img.shields.io/badge/Made%20with-Jupyter-orange?style=for-the-badge&logo=Jupyter)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## 📝 General Architecture

![potatodisease_architecture](readme_assets/diagram-export-04-12-2023-22_22_12.png)

## Installation :

1. Clone the repository:

`git clone https://github.com/asish918/Major-Project.git`

## Training the Model Usage :

1. Go to the **training** directory:

`cd training`

3. Install the required packages:

`pip install -r requirements.txt`

4. Run the notebook

`jupyter notebook`

## Front End Usage :

1. Go to the **frontend** directory:

`cd frontend`

2. Install dependencies:

`npm install`

3. Run the app:

`npm run start`

## Backend End Usage :

Install the required packages and run the backend server:

`uvicorn main:app --reload --host 0.0.0.0`
