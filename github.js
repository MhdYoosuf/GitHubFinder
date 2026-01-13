class Github {

    constructor(){
        this.client_id = "Ov23lidB1HIWwi8s4WVn";
        this.client_secret = "9dbace004762474a0e9c2ebc9f75cbb9a79880be";
    }


//https://api.github.com/users/jaganjavid


    async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?             client_id${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();

    return profile


}


}



