// public async get(entityDto: EntityDto): Promise<createOrUpdateApplicationInput> {
//   let rs = await http.get('/application/GetDetail', { params: entityDto });
//   if (rs) {
//     return rs.data.result;
//   }
//   else {
//     return rs;
//   }
// }

import axios from 'axios';

const qs = require('qs');
const http = axios.create({
  baseURL: 'http://dataservice.accuweather.com/',
  timeout: 18000,
});

export default http;
