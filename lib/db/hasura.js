export async function isNewUser(token) {
  const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0xf3fa98c9a791942c6f357f6481a36c61C8619631"}}) {
      email
      id
      issuer
    }
  }
`;

  const response = await fetchGraphQL(operationsDoc, "MyQuery", {}, token);
  console.log({ response });
  return response?.data?.users?.length === 0;
}

async function fetchGraphQL(operationsDoc, operationName, variables,token) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      // "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET_KEY,
      Authorization:
      `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0xf3fa98c9a791942c6f357f6481a36c61C8619631"}}) {
      id
      email
      issuer
      publicAddress
    }
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, "MyQuery", {},"WyIweDIyODNhMzc5YWI0NDFjMjRlM2JhMTI2NjE1NGIwYTYyNDIzODc4MTQ2NGNkYTgyYTE3OGQ1NDQ4MWNjMzBjNzQ0OTFlN2QyZDcwZGRiZDI4ZDZkYmY2MDA5NjZmYTdkMDRlOTFkZmNhZDdjMDlmYjkzMmZhMjk2NzFjNzVjYjlkMWMiLCJ7XCJpYXRcIjoxNjkyNjM3MDk1LFwiZXh0XCI6MTY5MjYzNzk5NSxcImlzc1wiOlwiZGlkOmV0aHI6MHhmM2ZhOThjOWE3OTE5NDJjNmYzNTdmNjQ4MWEzNmM2MUM4NjE5NjMxXCIsXCJzdWJcIjpcIjctbUVUNDhzekYwdi00dkVXUDVYcG53V2xBZ3NmRlV3VVpFN0xiWXFKR0k9XCIsXCJhdWRcIjpcIjRvdkZYc0YxQWdnbjR0eWg5S1otSEJGNHU2Uy1QM3MxWThBa1lMSWRyNXc9XCIsXCJuYmZcIjoxNjkyNjM3MDk1LFwidGlkXCI6XCIzZWE2OTM1Yy0zZWM4LTQ4YzItODU2Mi1kM2JkYWRmYjg5ZWJcIixcImFkZFwiOlwiMHg5N2U3NGIzZTYzNTFhNWZmYTQzZGY3ZDM2MDAxNzU1ODA1ZDcxMTRlMjc3M2MzMTBlMDk1ZTQyMzhkOTI1YzVlMjg0Y2QxNDU3NWY5OGUzYmYyYTNlZTY2MDU5NGRkOTA0MWY1MjIyNTQ1NTI0NmI3MmQ0ZGI0YzBmZWZkYzNiYTFiXCJ9Il0");
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchMyQuery();
