const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route that handles GET requests with query parameters
app.get('/info', (req, res) => {
  const { slack_name, track } = req.query;
  const current_day = new Date().toLocaleString('en-US', { weekday: 'long' });
  const currentTime = new Date();
  const offsetMinutes = currentTime.getTimezoneOffset();
  
  // Check if the UTC offset is within +/-2 hours (120 minutes)
  if (Math.abs(offsetMinutes) > 120) {
    return res.status(400).json({
      error: "Invalid UTC time",
    });
  }

  const utc_time = currentTime.toISOString();
  const github_file_url = ""; 
  const github_repo_url = "https://github.com/myykel/Hngx-stage1-Task"; 

  // Return the JSON response
  res.status(200).json({
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
