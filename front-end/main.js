(function () {
    const server = 'http://127.0.0.1:5500'
    const socket = io(server);

    socket.on('notification', (data) => {
        console.log('Message depuis le seveur:', data);
    })

    fetch(`${server}/`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    })
})()

function loginFromToken(token){
    fetch(`${server}/auth/login-from-token`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({})
    }).then((response) => {
      return response.json();
    }).then(json => {
      if(json.error){
        alert(json.error)
        return;
      } else {
        sayHello(json)
      }
    })
  }