import BaseURL from './BaseUrl';
export default async function PostData(type, MethodName, userData) {

  //let BaseURL = BaseURL + type;  
  return new Promise((resolve, reject) => {
    fetch(BaseURL(type), {
      method: MethodName,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });


  });
}