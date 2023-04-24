document.querySelector('#result').addEventListener('click', burgerCalculator)

// You have to let visitor put price of their ingredients product cost


function burgerCalculator(e, f, g, h) {
    e = document.querySelector('.bread').value
    f = document.querySelector('.steak').value
    g = document.querySelector('.salad').value
    h = document.querySelector('.saus').value
    let result = Number(e) + Number(f) + Number(g) + Number(h)
    result = result * 3
    document.querySelector('#price').innerText = result
}



// you have to take those values and addition those values


// you have to take the result and multiply it by 3


// you have to show the result

{/* <h1>Let's calculate your burger price for your restaurant !</h1>
<input class="bread" placeholder="Bread price /unit"><input>
<input class="steak" placeholder="steak price/unit"></input>
<input class="salad" placeholder="salad cost/burger"></input>
<input class="saus" placeholder="saus cost/burger"></input> */}