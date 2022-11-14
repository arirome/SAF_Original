const baseUrl = "https://node-saf-api.onrender.com";

const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  //SI ES GET ENTONCES MANDA EL TOKEN
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    //SINO HACE UNA PETICION POST Y MANDA LOS DATOS Y LOS CONVIERTE EN JSON
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};


const fetchConTokenFiles = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  const token = localStorage.getItem('token') || '';
  
  return fetch(url, {
      method,
      headers: {
          'x-token': token,
      },
      body: data,
      redirect: 'follow'
  });

};

export { fetchSinToken, fetchConToken, fetchConTokenFiles };
