let url = '/randomrequest';
// 'https://unpkg.com/axios@0.18.0/dist/axios.min.js';

function sendGet() {
      let date = new Date().getTime().toString();
      axios({
      method:'get',
      url: url + '?' + date,
      // data:{
      // },
      headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
    console.log('send get request');
}

function sendPut() {
      axios({
      method:'put',
      url:url,
      // data:{
      // },
      headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
    console.log('send put request')
}

sendGet();
