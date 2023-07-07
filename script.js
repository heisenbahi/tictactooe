let title = document.querySelector('.title h2')
let items = document.querySelector('.items')
let turn = 'x'
let squares = []
let again = document.getElementById('again')

function game(id){
    let element = document.getElementById(id);
    if(turn === "x" && element.innerHTML == ''){
        element.innerHTML= 'X'
        turn = 'o'
        title.innerHTML = 'Os turn';
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'Xs turn';
    }
    winner()

}
function style(num1, num2, num3){
    document.getElementById('item' + num1).style.cssText = ` 
     background-color: #ffdc7f;
     transition: 0.5s;`

     document.getElementById('item' + num2).style.cssText = ` 
     background-color: #ffdc7f;
     transition: 0.5s;`
    
     document.getElementById('item' + num3).style.cssText = ` 
     background-color: #ffdc7f;
     transition: 0.5s;`
     turn = 'no'
}
function winner()
{
    for(let i = 1; i<10;i++)
    {
       squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        title.innerHTML = `${squares[1]} is winner`;
        style(1, 2, 3)

    }
    else     if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
        title.innerHTML = `${squares[4]} is winner`
        style(4, 5, 6)


    }
    else     if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ''){
        title.innerHTML = `${squares[8]} is winner`
        style(7, 8, 9)

    }
    else     if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        title.innerHTML = `${squares[1]} is winner`
        style(1, 4, 7)

    }
    else     if(squares[5] == squares[2] && squares[2] == squares[8] && squares[2] != ''){
        title.innerHTML = `${squares[2]} is winner`
        style(2, 5, 8)

    }
    else     if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        title.innerHTML = `${squares[3]} is winner`
        style(3, 6, 9)

    }
    else     if(squares[1] == squares[5] && squares[1] == squares[9] && squares[1] != ''){
        title.innerHTML = `${squares[1]} is winner`
        style(1, 5, 9)

    }
    else     if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        title.innerHTML = `${squares[3]} is winner`
        style(3, 5, 7)


    }
    else if(squares[1] !='' && squares[2] !='' && squares[3] !='' && squares[4] !='' && squares[5] !='' && squares[6] !='' && squares[7] !='' && squares[8] !='' && squares[9] !=''){
        title.innerHTML = `Draw`
    }

}
again.onclick = function(){
    location.reload()
}
