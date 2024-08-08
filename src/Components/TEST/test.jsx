async function postFetch() {
  const response = await fetch("https://www.some-api-url.com/api", {
    method: "POST",
    body: JSON.stringify({ cool: true }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

postFetch;
