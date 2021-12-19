let amountWallet = prompt("Введите сумму наличных в вашем кошельке: ")
let priceOfChocolate = prompt("Введите цену шоколадки: ")

alert(`Количество шоколадок, что вы можете приобрести: ${Math.floor(amountWallet/priceOfChocolate)}`)
alert(`Ваша сдача: ${ amountWallet%priceOfChocolate}`)