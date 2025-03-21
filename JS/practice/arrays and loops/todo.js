let todo = [];
let req = prompt("enter your request");

while(true){
    if(req.toLowerCase().trim() === "quit"){
        console.log("quitting app");
        break;
    }

    if(req.toLowerCase().trim() === "list"){
        console.log("---------------");
        for(let i = 0; i< todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }
    else if(req.toLowerCase().trim() === "add"){
        add = prompt("enter task you want to add");
        todo.push(add);
    }
    else if(req.toLowerCase().trim() === "delete"){
        del = prompt("enter the index of the task you want to remove");
        todo.splice(del, 1);
    }
    else{
        console.log("wrong request!!");
    }

    req = prompt("enter your request");
}