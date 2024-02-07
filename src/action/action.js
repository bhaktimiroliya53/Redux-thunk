import axios from "axios"

export const VIEW_USER = () => {
    return async(dispatch) => {
        try{
            let record = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({
                type : 'viewapi',
                poly : record.data
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}