import { API_DOMAIN } from './config'
import request from './request'

const getToken = () => {
  let token = localStorage.getItem('token');
  if (token) {
    return token;
  } else {
    return false
  }
}


const funGetApi = (action, params = {}, header = {}, type = '') => {
  return request('GET', `${API_DOMAIN}/store/${action}`, params, header, type)
};

const funPostApi = (action, params = {}, header = {}, type = '') => {
  return request('POST', `${API_DOMAIN}/store/${action}`, params, header, type)
};

/**
 *  multipart/form-data //funPostApi ///上传file文件转化图片格式
 */
const uploadImg = (params) => {
  let header = {
    'content-type': 'multipart/form-data',
    "token": getToken()
  };
  return funPostApi('uploadimg', params, header, 'data').then(res => res)
};

/**
 * application/x-www-form-urlencoded // funPostApi
 */
const sendPhoneAuth = (params) => {
  let header = {
    'content-type': 'application/x-www-form-urlencoded',
    "token": getToken()
  };
  return funPostApi('sendPhoneAuth', params, header, 'params').then(res => res)
};
/**
 * application/x-www-form-urlencoded // funGetApi
 */
const getPartnerInfo = (params) => {
  let header = {
    'content-type': 'application/x-www-form-urlencoded',
    "token": getToken()
  };
  return funGetApi('home', params, header, 'data').then(res => res)
};
/**
 * application/json //funPostApi
 */
const partnerLogin = (params) => {
  let header = {
    'content-type': 'application/json',
    "token": getToken()
  };
  return funPostApi('login', params, header, 'params').then(res => res)
};

/**
 *  application/json // funGetApi
 */
const getAgreementByType = (params) => {
  let header = {
    'content-type': 'application/json',
    "token": getToken()
  };
  return funGetApi('getAgreementByType', params, header, 'data').then(res => res)
};




export default {

  getAgreementByType,         // 获取协议
  uploadImg,                  // 上传file文件转化图片格式
  sendPhoneAuth,              // 发送手机验证码
  partnerLogin,               // 登录
  getPartnerInfo,             // 首页信息
}
