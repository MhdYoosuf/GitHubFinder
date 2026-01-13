
class UI{

    constructor(){
        this.profile = document.querySelector("#profile");

        //Display the profile user
    }

    showProfile(user){
         if(user.status === "404"){
            alert("No user in this name");
         }
         else{
             this.profile.innerHTML = `

             <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <img width = "100%" src=${user.avatar_url} alt="">
                <a href=${user.html_url} target="_blank" class="btn btn-dark mt-2 mb-2">Visit Profile</a>
            </div>

            <div class="col-md-9">
                <span class="badge bg-primary">Public Repos : ${user.public_repos}</span>
                <span class="badge bg-secondary">Followers : ${user.followers}</span>
                <span class="badge bg-info">Following : ${user.following}</span>
            </div>

           

            <ul class="list-group">
                <li class="list-group-item">Company : ${user.company}</li>
                <li class="list-group-item">Blog : ${user.blog}</li>
                <li class="list-group-item">Location : ${user.location}</li>
            </ul>

        
        </div>
    </div>
             
             
             
             `
            
         }
    }
}

 