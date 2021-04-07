import axios from 'axios';

const KEY='AIzaSyCktVe8rHvJ02wlvwYMLDSB39ZdaXwxS9s';

export default axios.create(
    {baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults: 10,
            key:KEY
             }
            }
);
