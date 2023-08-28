// Tratando e lançando erros (try, catch, throw)
//console.log(naoExisto) // Criando um erro

// try { // Bloco tentar, caso ocorra qualquer erro, vai para o bloco catch
//     console.log(naoExisto)
// } catch (err) {
//     console.log('naoExisto não existe')
//     console.log(err)
// }

// function soma(x,y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('x e y precisam ser números')
//     }

//     return x + y
// }
// try {
//     console.log(soma(1,2))
//     console.log(soma('Matheus'))
// } catch(error){
//    // console.log(error) - Não lance o erro assim
//    console.log('Alguma coisa mais amigável para o usuario.');
// }


// Parte dois:

// try{
//    // console.log(a)
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou o erro')
//     console.log('Fechei o arquivo')
// } catch (e){
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }

// try{    
//     console.log(b)
// }catch (e){
//     console.log('Deu erro')
// }

function retornaHora(data) {
    if (data &&!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data);
    console.log(hora)
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia')
}

