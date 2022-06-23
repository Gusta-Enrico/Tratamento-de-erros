//o objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao numero enviado como parametro nafunção:
//Caso contrário, um erro sera lançado.
//- Crie um array que recebe um arra e um número
//- Realize as seguntes validações: 
// *Se os parametros não forem enviados, lance um erro do tipo ReferenceError
// *Se o array nao for do tipo 'object', lance um erro do tipo TypeError
// *Se o número nao for do tipo 'number', lance um erro do tipo TypeError
// *Se o tamanho do array for diferente do número enviado como parametro, lance um erro do tipo RangeError
//- Utilize a declaração tru..catch
//- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instaceof


function validaArray(arr, num) {
   try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if(arr.length !== num) throw RangeError("Tamanho inválido");

        return arr;
   }
   catch(e) {
        if(e instanceof ReferenceError ) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
    }else {
        console.log("Tipo de erro não esperado:" + e)
    }
   }
}  

console.log(validaArray([1, 2, 3, 4, 5], 5));