// Fetch utility function
export async function fetchData(endpoint) {
  const response = await fetch(endpoint); // fetch(endpoint) is the fetchAPI part
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  const data = response.json();
  return data;
}
// POST utility function
export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }); // fetch(endpoint) is the fetchAPI part
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  const data = response.json();
  return data;
}

// TODO: Add DELETE function here
export async function deleteData(endpoint) {
  const response = await fetch(endpoint, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Network response failed');
  }

  return await response.json();
};
// PATCH
export async function patchData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Network response failed');
  }

  return await response.json();
};
// PUT
export async function putData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Network response failed');
  }

  return await response.json();
};