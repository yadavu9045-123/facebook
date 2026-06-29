function getAllPost() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => resp.json())
    .then((val) => {
        console.log(val);

    }).catch(err => {
        console.log(err)
    })

}

// 
async function getPosts(){
  let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  resp = await resp.json();
  console.log(resp)
}
getPosts()