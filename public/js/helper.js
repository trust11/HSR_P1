class Helper {
    static getEBI = str => {
        return document.querySelector(str);
    };

    static getDateTime(){
        let date = new Date();
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().replace('T',' ').split('.')[0];
    }
}