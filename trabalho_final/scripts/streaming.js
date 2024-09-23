const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVjYzQ1ZGY4NGVhNjc1ODM3YzIyOTI1OGZkMzhmNiIsIm5iZiI6MTcyNTQ4MTk2MC45NDExNDksInN1YiI6IjY2YjJiOTRjNzY5MDJmOTYyY2I1MDM5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0w-qj5BkBQWJtPtveUESll-mjxdQxUCFuRp0yi_VkBg'
    }
  };
const filmAction = document.getElementById('scrollAcao');
const filmComedy = document.getElementById('scrollComedia');
const filmDrama = document.getElementById('scrollDrama');
const filmInfant = document.getElementById('scrollInfantil');
const janelaSimp = document.getElementById('janelaSinp');
const slide = document.getElementsByClassName('mostPop');
const btnMP2 = document.getElementById('btnMP2');
const informSpan = document.getElementById('informSpan');
const sinopInform = document.getElementById('sinopInform');
const input = document.getElementById('input');
const mainTag = document.getElementById('main');

function voltar(){
    window.location.href = 'streaming.html';
}

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => {
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
      .then(data => {
        const filmesPop = data.results; 
        const backImg = filmesPop[0].backdrop_path;
        const titulo = filmesPop[0].title;
        const sinopse = filmesPop[0].overview;
        informSpan.innerHTML = `${titulo}`;
        sinopInform.innerHTML =`${sinopse}`;
        slide[0].innerHTML = `<img src="https://image.tmdb.org/t/p/original${backImg}" alt="" >`

        btnMP2.addEventListener('click',()=>{
            janelaSimp.innerHTML = '';
            janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
            janelaSimp.style.display = 'flex';

            janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                janelaSimp.style.display = 'none';
            })
         });
      })
      .catch(error => {
        console.error('Ocorreu um erro: ', error);
    });
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28', options)
    .then(response => {
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data => {
        const filmes = data.results;
        console.log(filmes)
        for(filme of filmes){
            const divFilme = document.createElement('div');
            const poster = filme.poster_path;
            const backImg = filme.backdrop_path;
            const titulo = filme.title;
            const sinopse = filme.overview;
            divFilme.id = 'filme';
            divFilme.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" srcset="" class="imgFilme">`;
            filmAction.appendChild(divFilme);

            divFilme.addEventListener('click',()=>{
                janelaSimp.innerHTML = '';
                janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
                janelaSimp.style.display = 'flex';
 
                janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                    janelaSimp.style.display = 'none';
                })
             });
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro: ', error);
    });



  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
    .then(response => {
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data => {
        const filmes = data.results;
        console.log(filmes)
        for(filme of filmes){
            const divFilme = document.createElement('div');
            const poster = filme.poster_path;
            const backImg = filme.backdrop_path;
            const titulo = filme.title;
            const sinopse = filme.overview;
            divFilme.id = 'filme';
            divFilme.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" srcset="" class="imgFilme">`;
            filmComedy.appendChild(divFilme);

            divFilme.addEventListener('click',()=>{
                janelaSimp.innerHTML = '';
                janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
                janelaSimp.style.display = 'flex';
 
                janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                    janelaSimp.style.display = 'none';
                })
             });
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro: ', error);
    });



    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18', options)
    .then(response => {
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data => {
        const filmes = data.results;
        console.log(filmes)
        for(filme of filmes){
            const divFilme = document.createElement('div');
            const poster = filme.poster_path;
            const backImg = filme.backdrop_path;
            const titulo = filme.title;
            const sinopse = filme.overview;
            divFilme.id = 'filme';
            divFilme.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" srcset="" class="imgFilme">`;
            filmDrama.appendChild(divFilme);

            divFilme.addEventListener('click',()=>{
                janelaSimp.innerHTML = '';
                janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
                janelaSimp.style.display = 'flex';
 
                janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                    janelaSimp.style.display = 'none';
                })
             });
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro: ', error);
    });



    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16', options)
    .then(response => {
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data => {
        const filmes = data.results;
        console.log(filmes)
        for(filme of filmes){
            const divFilme = document.createElement('div');
            const poster = filme.poster_path;
            const backImg = filme.backdrop_path;
            const titulo = filme.title;
            const sinopse = filme.overview;
            divFilme.id = 'filme';
            divFilme.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" srcset="" class="imgFilme">`;
            filmInfant.appendChild(divFilme);

            divFilme.addEventListener('click',()=>{
                janelaSimp.innerHTML = '';
                janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
                janelaSimp.style.display = 'flex';
 
                janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                    janelaSimp.style.display = 'none';
                })
             });
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro: ', error);
    });

    function pesquisar(){
        if(input.value == ''){
           throw new Error('Preencha o campo de pesquisa!');
        }
         fetch(`https://api.themoviedb.org/3/search/movie?query=${input.value}&include_adult=false&language=en-US&page=1`, options)
          .then(response =>{
           if(!response.ok){
               throw new Error('A solicitação não foi bem-sucedida.');
           }
           return response.json();
        })
          .then(data=>{
           mainTag.innerHTML = '';
           mainTag.appendChild(janelaSimp);
           const resultados = data.results;
           const filmPesq = document.createElement('div');
           filmPesq.id = 'listaFilmPesq';
           filmPesq.style.marginLeft = '30px';
           const textResult = document.createElement('h2');
           textResult.textContent = 'Resultados'
           textResult.style.marginLeft = '30px'
           mainTag.appendChild(textResult);
           mainTag.appendChild(filmPesq);
           for(resultado of resultados){
               const divFilmes = document.createElement('div');
               const poster = resultado.poster_path;
               const backImg = resultado.backdrop_path;
               const titulo = resultado.title;
               const sinopse = resultado.overview;
               divFilmes.id = 'filme';
               divFilmes.innerHTML = `<img src="https://image.tmdb.org/t/p/original${poster}" alt="" id="imgs" >`
               filmPesq.appendChild(divFilmes);
  
               divFilmes.addEventListener('click',()=>{
                janelaSimp.innerHTML = '';
                janelaSimp.innerHTML = `<div id='imgDiv'><img src="https://image.tmdb.org/t/p/original${backImg}" alt="" id="imgs"></div><button id='closeBtn'>X</button><span id='titulo'>${titulo}</span><p id='overview'>${sinopse}</p><button id='assistirBtn'>Assistir<img src="27223.png" alt=""></button>`          
                janelaSimp.style.display = 'flex';
  
                janelaSimp.querySelector('#closeBtn').addEventListener('click',()=>{
                    janelaSimp.style.display = 'none';
                 })
              });
           }
          console.log(data);
        })
          .catch(erro =>{
            console.error('Erro: ',erro);
        })
    };