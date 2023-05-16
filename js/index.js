const postsUrl = "https://line-nilsen.no/wordpress/wp-json/wp/v2/posts?_embed&per_page=4";
const postsContainer = document.querySelector(".latest-posts-carousel");

const rightButton = document.querySelector(".next");
const leftButton = document.querySelector(".prev");

const dynamicURLParam = "&page=";
const fullURL = postsUrl + dynamicURLParam

let pageCount = 1 

function nextPostsPage() {
  pageCount++;
  setupCarousel(pageCount);
}

rightButton.addEventListener("click", nextPostsPage);

function prevPostsPage() {
  pageCount--;
  setupCarousel(pageCount);
}


leftButton.addEventListener("click", prevPostsPage);


const postsPerPage = 4;

async function getPostsPage(pageNumber = 1) {
  const url = fullURL + pageNumber;
  try{
    const response = await fetch(url);
    return await response.json();
  } catch (error){
    console.log("Error fetching posts:", error);
    alert("An error occurred. Please try again later.");
  }
}

function clearPosts() {
  postsContainer.innerHTML = "";
}

async function setupCarousel(pageNumber = 1) {
  const posts = await getPostsPage(pageNumber);

  if (!posts.length) {
    return alert("This page does not have any posts.")
  }
  clearPosts();
  for (let i = 0; i < posts.length; i++) {
    createPost(posts[i]);
  }
}




function createPost(result = {}){

  const postAnchorWrapper = document.createElement("a");
  postAnchorWrapper.classList.add("a-posts");
  postAnchorWrapper.href = "postdetalj.html?id=" + result.id;
  postsContainer.append(postAnchorWrapper);

  const postsDiv = document.createElement("div");
  postsDiv.classList.add("post-container");
  postAnchorWrapper.append(postsDiv);


  const postImg = document.createElement("img");
  postImg.classList.add("post-img");
  postImg.src = result._embedded['wp:featuredmedia']['0'].source_url;
  postsDiv.append(postImg);

  const postHeading = document.createElement ("h1");
  postHeading.classList.add("post-heading");
  postHeading.innerText = result.title.rendered;
  postsDiv.append(postHeading);

  postsContainer.appendChild(postAnchorWrapper);
};

setupCarousel();

