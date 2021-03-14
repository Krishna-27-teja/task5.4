let wrapper=document.getElementById("btn");
let button=document.createElement('button');
button.innerText="Click";
wrapper.appendChild(button);
button.addEventListener('click',function(){
    let random_text=document.getElementById("inpt")
    console.log(random_text.value)
    fetch("https://robohash.org/"+random_text.value)
    .then((rr)=>{
        return rr.url;
    }).then((ttt)=>{
        console.log(ttt)
        let img_element=document.getElementById('image');
        let img=document.createElement('img');
        img.src=ttt;
        img_element.appendChild(img);
    })
    .catch((err)=>{
        console.log(err);
    })

})