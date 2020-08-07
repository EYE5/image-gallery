import axios from 'axios';

export default class Api {
    host:String = 'https://boiling-refuge-66454.herokuapp.com';

    getItems =  () => {
        try {
            return axios.get(`${this.host}/images`);

        } catch (error) {
            console.error(error);
        }

    };

    getItemData = async ( itemID: Number ) => {
        try {
            return await axios.get(`${this.host}/images/${itemID}`);

        } catch (error) {
            console.error(error);
        }
    };

    postComment = async ( itemID : Number , commentData : Object) => {

        try {
            return await axios.post(`${this.host}/images/${itemID}/comments`,commentData);
        } catch (error) {
            console.error(error);
        }
    };
}
