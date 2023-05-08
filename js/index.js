const postsUrl = "https://line-nilsen.no/wordpress/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".latest-posts-carousel");



async function CallPost(){
  const response = await fetch(postsUrl);
  const results = await response.json();
  return results;
}

async function testFunction(){
  const results = await CallPost();
  for(let count = 0; count < results.length; count++){
    createPost(results[count]);
    if (count == 3) {
      break;
    }
  }
}

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



testFunction();


/*function showLoader(){
  loader.classList.remove("hidden")
}

function hideLoader(){
  loader.classList.add("hidden")
}
*/