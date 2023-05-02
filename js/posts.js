const newPageTitle = 'Posts';
document.title = newPageTitle;

const postsUrl = "https://line-nilsen.no/wordpress/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".posts-list");

/*function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}
*/

async function makeApiCall(){
  const response = await fetch(postsUrl);
  return await response.json();
}

async function generateHTML(){
  const results = await makeApiCall()
  results.forEach((result) => {
    createPost(result)
  })
}

generateHTML();

function createPost(result = {}){
  //showLoader();

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

  //hideLoader();
};