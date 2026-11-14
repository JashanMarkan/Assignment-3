console.log('hello world');

const helloWorldBox = document.getElementById('hello-world');



$.ajax({

    type: 'GET',
    url: '/hello-world/',
    success: function(response){

        console.log('success', response.text)
        helloWorldBox.textContent = 'hello world';

    },
    error: function(error){

        console.log('error',error)

    } 

    

})