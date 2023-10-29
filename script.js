const accessKey = "APsIysv2pdNuimwEZBEh9PEH-7FQg1ZOlE3XN0WNg6s";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-inbox");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");
let keyword = "";
let page = 1;
let searchImage = async ()=>{
    keyword = searchBox.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12` ;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results ;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block";
}
searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page = 1 ;
    searchImage();

})

showMore.addEventListener("click" , ()=>{
    page++;
    searchImage();
})
