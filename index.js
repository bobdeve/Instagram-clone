const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        icon: "images/red-icon.png"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        icon: "images/icon-heart.png"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const profileImage1 = document.getElementById("img-pro");
const profileImage2 = document.getElementById("img-pro1");
const profileImage3 = document.getElementById("img-pro2");
const imagePost1 = document.getElementById("image-posted");
const imagePost2 = document.getElementById("image-posted1")
const imagePost3 = document.getElementById("image-posted2");

const mainContainer = document.querySelectorAll(".containermains")



const icons = document.querySelectorAll(".icons")


profileImage1.setAttribute("src", posts[0].avatar);
profileImage2.setAttribute("src", posts[1].avatar);
profileImage3.setAttribute("src", posts[2].avatar);
imagePost1.setAttribute("src", posts[0].post)
imagePost2.setAttribute("src", posts[1].post)
imagePost3.setAttribute("src",posts[2].post)

for (let i = 0; i < mainContainer.length; i++) {
   const container = mainContainer[i]
   container.addEventListener("dblclick",function (){
    //    alert("God is Good!");
      var heartIcon = document.querySelectorAll(".icon-heart")
      var likes = document.querySelectorAll(".likes")
      console.log( heartIcon[i].src)
      if (heartIcon[i].src === "https://merry-chaja-afde48.netlify.app/images/icon-heart.png"){
        heartIcon[i].src=  posts[0].icon
        var currentValue = parseInt(likes[i].textContent) + 1
         likes[i].textContent=currentValue
      }
      else{
        heartIcon[i].src= posts[1].icon 
        var currentValue = parseInt(likes[i].textContent) - 1
        likes[i].textContent=currentValue
      }
    

    })
    
}
 
 for (var i = 0; i <icons.length; i++){
   icons[i].addEventListener("mouseenter", function(){
    icons[i].style.opacity= "0.5"
   })
   icons[i].addEventListener("mouseleave", function(){
    icons[i].style.opacity= "1"

   })

 }