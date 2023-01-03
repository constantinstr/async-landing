const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCC0DlgxVizTcPNGba2yBOew&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a565a6c654msh0335dd5472c5df2p17c4d9jsn08f4d17a4748',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')}
       `;
       content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();



// Desafio clase numero 23 

// En este desafío debes crear una función que usando fetch haga llamadas a una API y esta función debe contar las siguientes características:

// Realiza la transformación de datos a JSON
// Solo permite hacer peticiones tipo GET
// Recibir como parámetro de entrada un string que será la URL
// Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje Invalid URL
// Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje Something was wrong
// Recuerda, para lanzar el error debes usar throw, ejemplo:

// throw new Error('Something was wrong');

// Para solucionarlo vas a encontrar una función llamada fetchData que recibe un parámetros de entrada:

// url: La url de la API.
// Dentro del cuerpo de la función fetchData debes escribir tu solución.

// Ejemplo 1:

// Input:
// await fetchData('https://api.escuelajs.co/api/v1/categories');

// Output
// // return data in json
// [...]

// Ejemplo 2:

// Input:
// await fetchData('----');

// Output
// Error: Invalid URL

// Ejemplo 3:

// Input:
// await fetchData('https://domain-a.com/api-1');

// Output:
// Error: Something was wrong


// // codigo
// export async function runCode(url) {
//     try {
//       new URL(url);
//       const response = await fetch(url);
//       return response.json();
//      } catch(error) {
//        if (error.message === "Failed to construct 'URL': Invalid URL"){
//          throw new Error('Invalid URL');
//        } else {
//          throw new Error('Something was wrong');
//        }
//      }
//   }
  