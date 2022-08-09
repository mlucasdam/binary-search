const listaLivros = require ('./arrOrdenado')

function search (arr, begin, end, searchValue){
    const midle = Math.floor((begin+end)/2);
    const atual = arr[midle];

    if(begin > end){
        return -1;
    }

    if (searchValue === atual.preco){
        return midle
    }

    if (searchValue < atual.preco){
        return search(arr, begin, midle -1, searchValue);
    }

    if (searchValue > atual.preco){
        return search(arr, midle+1, end, searchValue);
    }
}

console.table(search(listaLivros,0,listaLivros.length-1, searchValue ));
