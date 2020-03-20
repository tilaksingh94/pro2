import BaseURL from './BaseUrl';
export default async function AuthorizedGet(type, data = 'GET') {

    return new Promise((resolve, reject) => {
        fetch(BaseURL(type), {
            method: data,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
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