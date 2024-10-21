const box = document.querySelector('.box')
const API = 'https://jsonplaceholder.typicode.com/posts'



3 - usul


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

const getData = async () => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await result.json();
    render(data);
};



const deleteItem = async (id) => {
    const result = await fetch(`${url}/${id}`);
    const data =await result.json();
    console.log(data);


    getData();
    alert('delete');
};

const editElement = async (id, newTitle) => {
    const result = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({ title: newTitle }),
    });
    await result.json();
    getData();
    alert("new");
};

box.addEventListener("click", (e) =>{
    const itemDelete = e.target.dataset.delete;
    const editItem = e.target.dataset.edit;
    if (itemDelete){
        deleteItem(itemDelete)
    }
    if (editItem) {
        const newTitle = prompt("new title");
        editElement(editItem, newTitle)
    }
});
