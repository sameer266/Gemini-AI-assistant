import axios from 'axios';

export const PostData = async (qns) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`;
  console.log("Url is ", url);

  const requestData = {
    contents: [
      {
        parts: [{
          text: qns
        }]
      }
    ]
  };

  try {
    const response = await axios.post(url, requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("Response:", response.data);
    return response.data; // Return the response data to be used by the caller
  } catch (error) {
    console.error("Error:", error);
    return null; // Optionally, return null or a default value in case of error
  }
};
