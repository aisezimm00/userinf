
// // дз 2
// // На странице у вас будет инпут и кнопка "получить".
//  При  клике по кнопке вам нужно получать данные по следующему адресу:
//   https://jsonplaceholder.typicode.com/users/{id}. Где значение {id} берется из инпута.
//    На инпут пользователи должны вводить только числа от 1 до 10.
//     Далее полученные данные обработать так: вытащить значение ключа name, username, phone на HTML. 
//     Верстку сделайте на свое усмотрение


function userInf() {

    const inputt = document.getElementById("inputInf")

    const inputValue = inputt.value

   if(inputValue >= 1 && inputValue <= 10){
    fetch(`https://jsonplaceholder.typicode.com/users/${inputValue}`)
    .then(response  => response.json())
    .then((data) => {
      const resdiv = document.getElementById("userinfa")
      resdiv.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Username: ${data.username}</p>
      <p>Phone: ${data.phone}</p>
      `
    })
    .catch(error => console.error('Error:', error));

   }else{
    alert("smth went wrong,type numbers from 1 to 10 ")
   }
 
}


function onbtn(event) {
  if (event.key === 'Enter') {
      userInf();
  }
}