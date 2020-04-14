import axios from 'axios'



const request = function (methods, path,params,headers,type) {
  console.log(headers)
  return new Promise((resolve, reject)=>{
    axios({
      url: path,
      headers: headers,
      [type]: params,
      method: methods,
    }).then(res => {
      resolve(res)
    }).catch(err=>{
      console.log(err)
    })
  })
}

export default request