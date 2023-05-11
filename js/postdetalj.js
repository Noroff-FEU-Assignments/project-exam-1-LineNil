const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const postsUrl = `https://line-nilsen.no/wordpress/wp-json/wp/v2/posts/${id}?_embed`;
const postContainer = document.querySelector(".postContainer");
//const loader = document.querySelector(".loader");


/*function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}
*/



async function fetchPost(){

  const response = await fetch(postsUrl);  
  return await response.json();

}




async function createHTML(){
  const result = await fetchPost();
const newPageTitle = 'Blog |' + result.title.rendered;
document.title = newPageTitle; 
  //showLoader();
  
  //hideLoader();
  

  const productWrapper = document.createElement("section");


  const postDiv = document.createElement("div");
  postDiv.classList.add("post-container");
  productWrapper.append(postDiv);


  const postImg = document.createElement("img");
  postImg.classList.add("post-img");
  postImg.src = result._embedded['wp:featuredmedia']['0'].source_url;
  postDiv.append(postImg); 

  const modal = document.createElement("div");
  modal.classList.add("divModal");
  postDiv.append(modal);

  const modalImg = document.createElement("div");
  modalImg.classList.add("modal-img");
  modal.append(modalImg);

  const postHeading = document.createElement ("h1");
  postHeading.classList.add("post-heading");
  postHeading.innerText = result.title.rendered;
  postDiv.append(postHeading);
  console.log(postHeading);




  const postText = document.createElement("p");
  postText.classList.add("post-text");
  postText.innerText = result.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");;
  postDiv.append(postText);



  postContainer.appendChild(productWrapper);

  postImg.addEventListener("click", () => {
    modalImg.style.backgroundImage = `url(${result._embedded['wp:featuredmedia']['0'].source_url})`;
    modal.style.display = "flex";
  });

  console.log(result._embedded['wp:featuredmedia']['0'].source_url)
  
  modal.addEventListener("click", (event) => {
    if (event.target !== modalImg && !modalImg.contains(event.target)) {
      modal.style.display = "none";
    }
  });
}

createHTML();