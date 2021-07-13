import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://10.219.19.227:9000/api'
});

export default apiClient; 