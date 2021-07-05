import log4js from '../utils/log4';
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001,
  USER_ACCOUNT_ERROR: 20001,
  USER_LOGIN_ERROR: 30001,
  BUSSINESS_ERROR: 40001,
  AUTH_ERROR: 50001,
}

const paper = (pageNumber = 1, pageSize = 10) => {
  pageNumber *= 1
  pageSize *= 1
  const skipIndex = (pageNumber - 1) * pageSize
  return {
    page: {
      pageNumber,
      pageSize
    },
    skipIndex
  }
}

const success = (msg = '', data = '', code = CODE.SUCCESS) => {
  log4js.info(data)
  return {
    code, data, msg
  }
}

const fail = (msg = '', data = '', code = CODE.BUSSINESS_ERROR) => {
  log4js.info(msg)
  return {
    code, data, msg
  }
}

export default {
  paper, success, fail
}

