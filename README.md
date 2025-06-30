# GreenSteps

Mission Statements To help users take small steps to do sustainable actions in order to slow the advancement of Global Warming.
For example, if a User wants to recycle instead of littering, they can enter their information in to be collected by a website for a reward(still working on an idea for a reward)

Architecture:

 The Front end consists of using React.js and some CSS for some neat styling.

The backend consists of using express.js. Express.js is a javascript library framework

Our Cloud Storage that I am using is MongoDB. For our databases we used mongodb atlas and the difference is that the databases are fully managed compared to MongoDB where you have to scale it and manage it yourself. To insert information into our database, I used Mongoose.

To Host this web application, I want to use EC2 for the Backend (Elastic Cloud Compute), S3 and CloudFront for the frontend.


To use it yourself:

for the front:

cd vite-project
npm run dev

for the back:

cd greensteps-backend
npm run devStart