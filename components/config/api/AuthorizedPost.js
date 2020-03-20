import BaseURL from './BaseUrl';
export default async function AuthorizedPost(type, MethodName, userData) {

    return new Promise((resolve, reject) => {
        fetch(BaseURL(type), {
            method: MethodName,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
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