# This microservice returns a random Yugioh card, complete with its image, attributes, level, description, and much more.

## Requesting Data 
The microservice is deployed on a public hosting site (called Render), so requesting data is as simple as submitting a GET request to the below endpoint:
[https://cs361-microservice.onrender.com/yugioh](https://cs361-microservice.onrender.com/yugioh)
(**NOTE**: if the server is inactive for enough time it goes into a "rest" mode of sorts, so for the first call it can take extra time to spin back up, but after that it will respond as expected)

Below is an example call from a snippet of my test service that utilizes Javascript/React. The full example can be found [here](https://github.com/stussy446/cs361-test-microservice/blob/main/cs361-test-microservice/src/App.jsx) if needed

    // URL
    const URL = "https://cs361-microservice.onrender.com/yugioh";

    // function utilizing axios library to submit get request to the above url
    const getRandomCard = () => {
      axios
        .get(URL)
        .then((response) => {
          console.log(response.data);
          setCard(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

## Recieving Data 
After submitting the get request, the server will respond with the data of a random Yugioh card. This data will be sent over in JSON format, so you will just need to receive that data and parse it how you would like for the purposes of your application. Below is what the format of the received data will look like:

![json-example](https://github.com/stussy446/CS361-microservice/assets/25628359/c56c2fb7-5d94-4c1c-ae35-2e659a97abe2)

With the above structure as a reference, say we have stored the object into a variable called *data*. Using this object, if we wanted to grab the name of the card you could do that with a line like 

    data.name 
  or 
    
    data['name']
  which using the example card would return "Ghostrick Fairy"

## UML Sequence Diagram
![uml-microservice](https://github.com/stussy446/CS361-microservice/assets/25628359/f0bf224c-b9c9-4215-815b-6006abfddc7a)
