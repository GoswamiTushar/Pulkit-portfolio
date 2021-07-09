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
  "Developed Time Series Forecasting for Australian Monthly <br/>Gas Production":
    "The project involves analysis of components of Time Series data, checking the seasonality fluctuations,monthly plot, decomposition of series, checking the stationarity of series,DE-seasonalise,decomposition of series, manual Arima(ACF & PACF Tests), Auto Arima, residual analysis.",
  "Market Segmentation in the context of Product <br/>Service Management":
    "The project involves performing Factor Analysis as well as Regression Analysis on a certain set of variables. It also requires to take independent variables and perform some correlation matrix to find out if there is any high correlation. Multiple Linear Regression has been performed by taking Customer Satisfaction as the dependent variable and the four factors as the independent variables.",
  "Evaluated the impact of change in temperature of Cold Storage products <br/>during the year":
    "The project computed the mean cold storage temperature in different seasons and used hypothesis testing to evaluate if any corrective action is required from the plant's side or the procurement's side.",
};

const skillsAndTools = {
  "Developed Time Series Forecasting for Australian Monthly <br/>Gas Production":
    "Manual Arima fitting & Auto Arima model fitting, Hands on R",
  "Market Segmentation in the context of Product <br/>Service Management":
    "Factor Analysis, Multiple Linear Regression, Correlation Matrix, Market Segmentation",
  "Evaluated the impact of change in temperature of Cold Storage products <br/>during the year":
    "Descriptive Statistics, Inferential Statistics, Estimation & Hypothesis Testing, Predictive Modelling, Market Basket Analysis",
};
const projectLinks = {};

const projectsName = Object.keys(projectDesc);
console.log(projectsName);
var count = 0;
ChangeData();

function ChangeData() {
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
  count += 1;
  setTimeout(ChangeData, 5000);
}
