export async function request(query: string, variables?: string) {
  const endpoint = process.env.NEXT_DATOCMS_API_URL as string;

  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const graphqlQuery = {
    query: query,
    variables: variables,
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  return await fetch(endpoint, options);
}
