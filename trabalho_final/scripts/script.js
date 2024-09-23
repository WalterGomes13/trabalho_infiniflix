const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('inBtn');


function entrarStream(){
    if(email.value =="" || senha.value==""){
        alert("Os campos devem ser preenchidos!");
        throw "Os campos devem ser preenchidos!"
    } else {
        fetch('usuarios.json')
            .then(response =>{
                if(!response.ok){
                    throw new Error("A solicitação não foi bem sucedida.")
                }
                return response.json();
            })
            .then(data =>{
                const usuarios = data.usuarios;
                let cont = 0;
                for(usuario of usuarios){
                    if(email.value == usuario.email){
                        if(senha.value == usuario.senha){
                            alert("Bem-vindo!");
                            cont =0;
                            window.location.href = 'streaming.html';
                            break;
                        } else {
                            cont +=1;
                        }
                    } else {
                        cont +=1;
                    }
                }

                if(cont != 0){
                    alert("Email ou senha inválidos!");
                }
            })
            .catch(erro =>{
                console.error("Erro: "+ erro.message);
            })
        }  
}

entrar.addEventListener('click',()=>{
    try{
        entrarStream();
    } catch(erro){
        console.error("Ocorreu um erro: ", erro);
    }
})