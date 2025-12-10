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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function pollBatchResults(tokens) {
  while (true) {
    const options = {
      method: "GET",
      url: `${process.env.JUDGE0_API_URL}/submissions/batch`,
      params: {
        tokens: tokens.join(","),
        base64_encoded: false,
        fields: "*",
      },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      },
    };

    const { data } = await axios.request(options);

    const results = data.submissions;

    const isAllDone = results.every(
      (r) => r.status.id !== 1 && r.status.id !== 2,
    );

    if (isAllDone) return results;
    await sleep(1000);
  }
}
