const box = document.querySelector('.box')
const API = 'https://jsonplaceholder.typicode.com/posts'
//   1 - usul!


// const getData = async (resurse) => {
//     const request = await fetch(resurse)
//     const data = await request.json()
//     return data
// }

// getData(API)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


//  2 - usul!


const render = (data) => {
    box.innerHTML = data.map((item) => {
        return `
        <div>
        <h1>${item.title}</h1>
        <p>${item.description}</p>
        <button data-delete="${item.id}">delete</button>
        <button data-edit="${item.id}">edit</button>
        </div>
        `;
    })
    .join("");
};

async function create(data) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        console.log('created:', result);
    } catch (error) {
        console.error('Error creating:', error);
    }
}

create({ title: 'New Post', body: 'This is a new post.', userId: 1 });



async function read(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let result = await response.json();
        console.log('read:', result);
    } catch (error) {
        console.error('Error reading:', error);
    }
}

read(1);



async function update(id, updatedData) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        let result = await response.json();
        console.log('updated:', result);
    } catch (error) {
        console.error('Error updating:', error);
    }
}

update(1, { title: 'Updated Post', body: 'This post has been updated.', userId: 1 });



async function delet(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        console.log('deleted:', response.status === 200 ? 'Success' : 'Failed');
    } catch (error) {
        console.error('Error deleting:', error);
    }
}

delet(1);




// 3 - usul


// const render = (data) => {
//     box.innerHTML = data.map((item) => {
//         return `
//         <div>
//         <h1>${item.title}</h1>
//         <p>${item.description}</p>
//         <button data-delete="${item.id}">delete</button>
//         <button data-edit="${item.id}">edit</button>
//         </div>
//         `;
//     })
//     .join("");
// };

// const getData = async () => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await result.json();
//     render(data);
// };



// const deleteItem = async (id) => {
//     const result = await fetch(`${url}/${id}`);
//     const data =await result.json();
//     console.log(data);


//     getData();
//     alert('delete');
// };

// const editElement = async (id, newTitle) => {
//     const result = await fetch(`${url}/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "aplication/json",
//         },
//         body: JSON.stringify({ title: newTitle }),
//     });
//     await result.json();
//     getData();
//     alert("new");
// };

// box.addEventListener("click", (e) =>{
//     const itemDelete = e.target.dataset.delete;
//     const editItem = e.target.dataset.edit;
//     if (itemDelete){
//         deleteItem(itemDelete)
//     }
//     if (editItem) {
//         const newTitle = prompt("new title");
//         editElement(editItem, newTitle)
//     }
// });