let button=document.querySelector("button");
let input=document.querySelector("#input");
let ul=document.querySelector("ul")

button.addEventListener("click",function(){
    let list= document.createElement("li");
    list.innerText=input.value;

    let Dbtn=document.createElement("button");
    Dbtn.innerText="DELETE";
    Dbtn.classList.add("delete");

    list.appendChild(Dbtn);
    ul.appendChild(list);
    input.value=""; 
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON") {
        let del=event.target.parentElement;
            del.remove();
    }
})



let listval=input.value;

let dellist=document.querySelector("#dellist");

let deletebtn=document.querySelector("#deletee")
deletee.addEventListener("click",function(){
    deleteitem=dellist.value;
    console.log(deleteitem);
})





// let delbtn=document.querySelectorAll(".delete");
// for(deletebutton of delbtn){
//     deletebutton.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }