export function getJudge0LanguageId(language) {
  const languageMap = {
    PYTHON: 71,
    JAVASCRIPT: 63,
    JAVA: 62,
    CPP: 54,
    GO: 60,
  };
  return languageMap[language.toUpperCase()];
}

export async function submitBatch(submissions) {
  const options = {
    method: "POST",
    url: `${process.env.JUDGE0_API_URL}/submissions/batch`,
    params: {
      base64_encoded: "false",
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      "Content-Type": "application/json",
    },
    data: { submissions },
  };

  const { data } = await axios.request(options);

  console.log("📤 Judge0 Submission Response:", data);

  return data;
}
