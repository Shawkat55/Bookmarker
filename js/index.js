var bookMarkName=document.getElementById("bookMarkName");
var webSiteUrl=document.getElementById("webSiteUrl");
var myBody=document.getElementById("myBody")
var error=document.getElementById("error")




var bookList;
if (localStorage.getItem("bookList")) {
    
    bookList=JSON.parse(localStorage.getItem("bookList"))
    disPlayList(bookList)
}else{
    bookList=[];
    
}
// function (1)
function addElments() {
    if ( urlValidation() & bookValidation() ) {
        
    
    var bookmark={
        bookmarks:bookMarkName.value,
        website:webSiteUrl.value,
        
    }
    
    bookList.push(bookmark);
    saveLocalStorage()
    clearInputs()
    disPlayList(bookList)
    
}else{
    error.classList.replace("d-none" , "d-block")   
}
}


// function (2)
function disPlayList(blist) {
    var cartona="";
    for (var i=0; i<bookList.length; i++){
       cartona+=`<tr>
       <td>${i+1}</td>
       <td>${blist[i].bookmarks}</td>
       <td><a href="https://${blist[i].website}" target="_blank"  class="btn btn-outline-danger"><span><i class="fa-solid fa-eye"></i></span> Visit</a></td>
       <td><button onclick="deleteItems(${i})" class="btn btn-outline-warning"><span><i class="fa-solid fa-trash"></i></span> Delete</button></td>
       </tr>`
    }
    // console.log(cartona);
    myBody.innerHTML=cartona;
    
}



// function (3)
function deleteItems(index) {
    bookList.splice(index,1)
    saveLocalStorage()
    disPlayList(bookList)
}

// function (4)
function clearInputs() {
    bookMarkName.value="";
    webSiteUrl.value="";
}

// function (5)
function saveLocalStorage() {
    localStorage.setItem("bookList",JSON.stringify(bookList))
}

function urlValidation() {
    var regex= /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
    if (regex.test(webSiteUrl.value)===true) {
        webSiteUrl.classList.add("is-valid");
        webSiteUrl.classList.remove("is-invalid")
        return true
    }else{
        
        webSiteUrl.classList.add("is-invalid");
        webSiteUrl.classList.remove("is-valid")
        return false
    }
    
}
function bookValidation() {
    var regex= /^[A-Za-z]{3}/
    if (regex.test(bookMarkName.value)===true) {
        bookMarkName.classList.add("is-valid");
        bookMarkName.classList.remove("is-invalid")
        return true
    }else{
        
        bookMarkName.classList.add("is-invalid");
        bookMarkName.classList.remove("is-valid")
        return false
    }
}

closeBtn.addEventListener("click" , function () {
    closeSlide()
})
function closeSlide() {
    error.classList.replace("d-block" , "d-none")
    
}

