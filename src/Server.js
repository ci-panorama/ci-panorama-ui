import 'whatwg-fetch';

class Server {
    constructor(){
        this.url = 'http://localhost:8080/';
        this.badgesPath = 'badges/';
        this.restPath = 'services/';
    }

    getBadgeUrl(badgeCall){
        return this.url + this.badgesPath + badgeCall; 
    }

    getRestUrl(serviceCall){
        return this.url + this.restPath + serviceCall; 
    }

    get(serviceCall, jsonCallback){
        var callUri = this.getRestUrl(serviceCall);
        fetch(callUri) 
            .then(res => res.json())
            .then(jsonCallback);
    }
}

export const ciPanoramaServer = new Server();