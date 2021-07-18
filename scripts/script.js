// Menu button code block

var menuButtonClicked = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (menuButtonClicked === false) {
    document.getElementById("hidden-item").style.display = "block";
  } else if (menuButtonClicked) {
    document.getElementById("hidden-item").style.display = "none";
  }
  menuButtonClicked = !menuButtonClicked;
});

// tech stack section code

var languageTitleModal = document.getElementById("project-lan");
var languageDescriptionModal = document.getElementById("project-desc");
var listitems = document.getElementById("list-items");

const projectDesc = {
  "Evaluated the impact of change in temperature of Cold Storage products during the year":
    "The project computed the mean cold storage temperature in different seasons and used hypothesis testing to evaluate if any corrective action is required from the plant's side or the procurement's side.",

  "Developed Time Series Forecasting for Australian Monthly <br/>Gas Production":
    "The project involved analysis of components of Time Series data, checking the seasonality fluctuations, monthly plot, decomposition of series, checking the stationarity of series, DE-seasonalise, decomposition of series, manual Arima (ACF & PACF Tests), Auto Arima, residual analysis.",

  "Visualizing Car Insurance Claims using Tableau":
    "This project explored the art of problem-solving with the aid of visual analytics. Tableau’s data visualization tools were used to create interactive dashboards to provide high-level insights into an Insurance company to drive the company's car insurance schemes.",

  "Choosing preferable mode of transport by employees":
    "The project involves deciding on the mode of transport that the employees prefer while commuting to the office. For this, multiple models such as KNN, Naive Bayes, Logistic Regression have been created and explored to check their model performance metrics. Bagging and Boosting modeling procedures have also been applied to create the models.",

  "Market Segmentation in the context of Product <br/>Service Management":
    "The project involves performing Factor Analysis as well as Regression Analysis on a certain set of variables. It also requires to take independent variables and perform some correlation matrix to find out if there is any high correlation. Multiple Linear Regression has been performed by taking Customer Satisfaction as the dependent variable and the four factors as the independent variables.",

  "Cellphone-Logistic project":
    "The primary objective was to investigate the parameters contributing for customer churn (attrition) in the Telecom Industry. A Logistic Regression Model was developed and validated with test data to predict customer churn.",

  "Theft Analytics for Discom":
    "Worked on it by using predictive modelling techniques, data cleaning methods and various machine learning models with least misclassification errors while identifying defaulters and non-defaulters, in R & Python and prescribed the corrective actions to the respective DISCOM in order to reduce AT&C Losses.",
};

const skillsAndTools = {
  "Developed Time Series Forecasting for Australian Monthly <br/>Gas Production":
    "Manual Arima fitting & Auto Arima model fitting, Hands on R",
  "Market Segmentation in the context of Product <br/>Service Management":
    "Factor Analysis, Multiple Linear Regression, Correlation Matrix, Market Segmentation",
  "Evaluated the impact of change in temperature of Cold Storage products during the year":
    "Descriptive Statistics, Inferential Statistics, Estimation & Hypothesis Testing, Predictive Modelling, Market Basket Analysis",
  "Visualizing Car Insurance Claims using Tableau":
    "Data Visualisation, Tableau, Business Intelligence",
  "Choosing preferable mode of transport by employees":
    "Bagging & Boosting, KNN, Naive Bayes, Logistic Regression",
  "Cellphone-Logistic project":
    "Logistic Regression, Model Comparison, Predictive Analytics",
  "Theft Analytics for Discom":
    "Predictive Modeling, Clustering, Tableau & Prescriptive Analysis, Logistic Regression, Random Forest",
};
const projectLinks = {};

const projectsName = Object.keys(projectDesc);
var count = 0;
var toPause;
ChangeData();

document.getElementById("projects").addEventListener("mouseover", () => {
  toPause = true;
});
document.getElementById("projects").addEventListener("mouseleave", () => {
  toPause = false;
});

document.getElementById("projects").addEventListener("touchstart", () => {
  toPause = true;
});

document.getElementById("projects").addEventListener("touchcancel", () => {
  toPause = false;
});

function ChangeData() {
  if (!toPause) {
    count += 1;
  }
  if (count === projectsName.length) {
    count = 0;
  } else if (count < projectsName.length) {
    document.getElementById(
      "project-name"
    ).innerHTML = `${projectsName[count]}`;
    document.getElementById("project-description").innerHTML = `${
      projectDesc[projectsName[count]]
    }`;
    document.getElementById("skills-and-tools").innerHTML = `${
      skillsAndTools[projectsName[count]]
    }`;
  }
  setTimeout(ChangeData, 2000);
  if (toPause) {
    count = count;
  }
}
