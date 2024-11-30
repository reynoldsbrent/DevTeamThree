# The Daily News Summary

## The Product Idea
1. **What is the software product?** This product will be a web application that will provide users with a daily summary of news headlines coming from reputable news sources such as The Associated Press, BBC, etc.
2. **What are possible names of the product that you considered?** Some possible names for this product that we considered were "The Daily News Summary", "The Daily Headline Summary", and "News Summary of the Day."
3. **What name did you finally choose?** We decided to go with "The Daily News Summary" for the product name.
4. **Who are the potential customers, end users or buyers?** This product is produced for working adults and the general public that wants a quick review of the daily news.
5. **What are the potential features, functions, or other important details that would be appealing to customers, end users or buyers?** Some potential features and functions that will be included in this product are a daily summary of news headlines that will be shown on the web application as well as an email newsletter than will be sent to users if they wish to sign up.

## Our Vision
Our vision is to empower busy professionals with concise, reliable, and professional news summaries, fostering a well-informed global community

## Project Setup 
### Prerequisites
- In order to properly run the application you will need to provide the NewsCatcher API Key, the Cloudflare Workers AI API Key, and the Cloudflare Workers AI Account ID into the appsettings.json file. You can get a NewsCatcher API Key from the following link [https://www.newscatcherapi.com/](https://www.newscatcherapi.com/). You can get an API Key and Account ID for Cloudflare Workers AI API from the following link [https://developers.cloudflare.com/fundamentals/api/get-started/create-token/](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).
``` json 
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=TheDailyNewsSummary.db"
  },
  "NewsApi": {
    "Key": "",
    "BaseUrl": "https://api.newscatcherapi.com/v2/latest_headlines?lang=en"
  },
  "Cloudflare": {
    "AccountId": "",
    "ApiToken": "",
    "ModelName": "@cf/facebook/bart-large-cnn"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```
You will also need to create a .env file in the root of the project and fill in the placeholders for the NewsCatcher API key and the Cloudflare Workers AI API Key and Account ID. An example file named .env.example has been created for your reference. Ensure that you create a separate .env file with the placeholders filled in.
## How to Run the Web App With Docker
### Prerequisites
- Docker installed (You can find installation guides on the Docker website)
- Windows installation guide: [https://docs.docker.com/desktop/setup/install/windows-install/](url)
- Mac installation guide: [https://docs.docker.com/desktop/setup/install/mac-install/](url)

1. Run `docker-compose build --no-cache frontend` in the root of the project - the same directory as the dockerfiles and the docker-compose.yml file.
2. Once that is finished, run `docker-compose build --no-cache api`
3. Then, run `docker-compose build --no-cache tests`
4. Next, run `docker-compose up`
5. Once that is finished running, you should see the results of the unit tests in the terminal. You should also be able to access the web application at http://localhost:3000. In addition, you can access the API at http://localhost:7160.
6. Once you are done viewing the web app, you can click CTRL + C to stop.

If you encounter any errors when running the `docker-compose build` commands, try to run the command again. 

## How to Run the Web App Without Docker
### Prerequisites
- Git installed
- Node.js and npm installed (for React frontend)
- A code editor (e.g. Visual Studio Code)

1. Clone the Repository
    - `git clone https://github.com/reynoldsbrent/DevTeamThree.git`
2. Setup the Frontend
    - Change directories to the `frontend` folder
3. Install npm Packages
    - You can run `npm install` in VS Code
4. Start the React App
    - Run `npm start`

The frontend should now be running.

5. Setup the Backend
    - Change directories to the backend API using `cd api/api`
6. Restore NuGet Packages
    - If you are in VS Code you can use `dotnet restore`
    - If you are in Visual Studio, the NuGet packages are automatically restored
7. Run the Backend
    - If you are in VS Code, you can use `dotnet watch run`
    - If you are using Visual Studio, you can use the green play button to start the API

The API should now be running.


News articles provided by [https://www.newscatcherapi.com/](https://www.newscatcherapi.com/).

AI text summary generation provided by the Cloudflare Workers AI API using the bart-large-cnn model. The Cloudflare Workers AI API can be found at [https://developers.cloudflare.com/workers-ai/](https://developers.cloudflare.com/workers-ai/). Documentation on the bart-large-cnn model can be found at [https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/](https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/).