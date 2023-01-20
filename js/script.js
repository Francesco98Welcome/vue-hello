
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        text: 'Primo esercizio Vue Js, bello eh!',
        image: 'https://i.picsum.photos/id/565/300/300.jpg?hmac=0aeSSgdxvnJYQ22Mm2VbUdUVvz8FDG-CH3Xgxd9eoDs'
      }
    }
  }).mount('#app')
