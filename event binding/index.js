let c= 1;

function incriment ()
{
    let cEle = document.querySelector("#cid");
    c= c+1;
    cEle.innerHTML= c;

}

function dicriment ()
{
     let cEle = document.querySelector("#cid");
    c= c-1;
    cEle.innerHTML= c;
}