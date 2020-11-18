import http from '../../services/httpService';

const apikey = ["gcUxb4nA8RDhDqJFhZZy3L8DG40rkuQd","gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS"];
function rdKey() {
  var x = Math.floor((Math.random() * 2) );
  return apikey[x]
}
class thoitietServices{
     async get(local) {
      let api =  rdKey();
         let pram={
            apikey: api,
            language:"vi"
         }
        let rs = await http.get(`forecasts/v1/daily/5day/${local}`, { params: pram });
        if (rs) {
          return rs.data;
        }
        else {
          return rs;
        }
      }
      // /cities/search?apikey=gcUxb4nA8RDhDqJFhZZy3L8DG40rkuQd&q=Ba Vi
     async search(localSearch) {
      let api =  rdKey();
         let pram={
            apikey:api,
            q:localSearch
         }
        let rs = await http.get(`locations/v1/cities/vn/search`, { params: pram });
         console.log("Search: ",rs);
        if (rs) {
          return rs;
        }
        else {
          return rs;
        }
      }
}
export default new thoitietServices();