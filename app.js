const searchBarContainer = document.querySelector('.search-bar')
const searcIcon = document.getElementById('search-icon');
let searchIconFlag = false;

searcIcon.addEventListener('click',()=>{
    if(searchIconFlag){
        searchBarContainer.style.width = '0px';
        searchBarContainer.style.opacity = 0;
        searchBarContainer.classList.remove('mr-4')
    }else{
        searchBarContainer.style.width = '180px';
        searchBarContainer.style.opacity = 1;
        searchBarContainer.classList.add('mr-4')
    }
    searchIconFlag = !searchIconFlag;
})