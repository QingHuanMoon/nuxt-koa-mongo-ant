require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_validate__ = __webpack_require__(18);



const UserSchema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  userId: {
    type: Number,
    title: '用户ID',
    form: 'hidden'

  },
  userName: {
    type: String,
    title: '用户名称',
    form: 'input',
    validators: [{ required: true, trigger: 'blur', message: '用户名是必填项' }, { min: 2, trigger: 'blur', message: '最少输入2个字符' }]
  },
  password: {
    type: String,
    title: '密码',
    form: 'input',
    noQuery: true,
    props: {
      type: "password"
    },
    validators: [{ required: true, trigger: 'blur', message: '用户名是必填项' }, { min: 6, trigger: 'blur', message: '最少输入2个字符' }]
  },
  email: {
    type: String,
    title: '邮箱',
    form: 'input',
    validators: [{
      required: true,
      trigger: 'blur',
      message: '邮箱是必填项'
    }, { validator: __WEBPACK_IMPORTED_MODULE_1__public_validate__["a" /* isEmail */], trigger: 'blur', message: '必须是邮箱格式' }]
  },
  mobile: {
    type: String,
    title: '手机',
    form: 'input',
    validators: [{
      type: 'string',
      required: true,
      trigger: 'blur',
      message: '手机是必填项'
    }, { validator: __WEBPACK_IMPORTED_MODULE_1__public_validate__["b" /* isPhone */], trigger: 'blur', message: '必须是手机格式' }]
  },
  sex: {
    type: Number,
    title: '性别',
    form: 'select',
    options: [{ label: '男', value: 0 }, { label: '女', value: 1 }]
  },
  deptId: {
    type: Array,
    title: '所属部门',
    form: 'input'
  },
  job: {
    type: String,
    title: '工作',
    form: 'input'
  },
  state: {
    type: Number,
    default: 1,
    title: '用户状态',
    form: 'input'
  },
  role: {
    type: Number,
    default: 1,
    title: '角色',
    form: 'input'
  },
  createdTime: {
    type: Date,
    default: Date.now(),
    title: '创建时间',
    form: 'hidden'
  },
  lastLoginTime: {
    type: Date,
    default: Date.now(),
    title: '最后登录时间',
    form: 'hidden'
  },
  remark: {
    type: String,
    title: '备注',
    info: {
      documentName: 'users'
    },
    form: 'hidden'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (UserSchema);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_body__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_jwt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap__ = __webpack_require__(8);






async function start() {
  const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;

  // Import and Set Nuxt.js options
  const config = __webpack_require__(24);
  config.dev = !(app.env === 'production');

  // Instantiate nuxt.js
  const nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);

  // Build in development
  if (config.dev) {
    const builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
    await builder.build();
  }

  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_body___default()());

  app.on('error', (err, ctx) => {
    console.log(ctx);
  });

  // 路由
  __WEBPACK_IMPORTED_MODULE_4__bootstrap__["a" /* default */].RouterRegister(app);

  // 模型
  __WEBPACK_IMPORTED_MODULE_4__bootstrap__["a" /* default */].ModelRegister(app);

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Mark request as handled for Koa
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);

  console.log('服务器启动成功,请点击访问->' + host + ':' + port); // eslint-disable-line no-console

  __WEBPACK_IMPORTED_MODULE_4__bootstrap__["a" /* default */].ProviderRegister();
}

start();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

class BootStrap {
  // 服务自动注册
  static ProviderRegister() {
    const requireComponent = __webpack_require__(9);
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName);
      componentConfig.default.boot();
    });
  }

  // 路由自动注册
  static RouterRegister(app) {
    const requireComponent = __webpack_require__(12);
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName);
      app.use(componentConfig.default.routes(), componentConfig.default.allowedMethods());
    });
  }

  // 模型自动加载
  static ModelRegister(app) {
    global.model = [];
    const requireComponent = __webpack_require__(23);
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName);
      const documentName = componentConfig.default.obj.remark.info.documentName;
      global.model[`${documentName}Schema`] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model(documentName, componentConfig.default, documentName);
    });
    console.log('模型挂载成功...');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BootStrap);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./db.js": 10
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_config__ = __webpack_require__(11);


class Db {
  static boot() {
    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__public_config__["a" /* default */].dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection;

    db.on('error', () => {
      console.log('数据库服务注册失败');
    });

    db.on('open', () => {
      console.log('数据库服务注册成功');
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Db);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const env = "development" || 'production';
const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/7ea61bf9aaadb56d4a3bf48c47c91e76/api',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    },
    test: {
        baseApi: '//test.vite.app/api',
        mockApi: 'https://www.fastmock.site/mock/7ea61bf9aaadb56d4a3bf48c47c91e76/api',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    },
    production: {
        baseApi: '//prod.vite.app/api',
        mockApi: '',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    }
};
/* harmony default export */ __webpack_exports__["a"] = (Object.assign({
    env,
    mock: true,
    namespace: 'nuxt'
}, EnvConfig[env]));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 13,
	"./user.js": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);


const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.prefix('/api');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  });
});

router.get('/hello', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  };
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  };
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_UserController__ = __webpack_require__(15);



const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.prefix('/api/users');

router.post('/login', __WEBPACK_IMPORTED_MODULE_1__controller_UserController__["a" /* default */].login);
router.get('/check', __WEBPACK_IMPORTED_MODULE_1__controller_UserController__["a" /* default */].check);

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_UserService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_tools__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);



class UserController {
  static async login(ctx, next) {
    let params = ctx.request.body;
    let res = await __WEBPACK_IMPORTED_MODULE_0__service_UserService__["a" /* default */].loginByEmailAndPassword(params.form);
    if (res) {
      let timestamp = new Date().getTime();
      let data = res._doc;
      const token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign({
        data: Object.assign({}, data, { timestamp })
      }, 'qinghuan', { expiresIn: 60 });
      return ctx.body = __WEBPACK_IMPORTED_MODULE_1__utils_tools__["a" /* default */].success('登录成功', Object.assign({}, data, { token, timestamp }));
    } else {
      return ctx.body = __WEBPACK_IMPORTED_MODULE_1__utils_tools__["a" /* default */].fail('登录失败');
    }
  }

  static async check(ctx, next) {
    return ctx.body = 'check';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (UserController);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository_UserRepo__ = __webpack_require__(17);


class UserService {
  static async loginByEmailAndPassword(params) {
    return await __WEBPACK_IMPORTED_MODULE_0__repository_UserRepo__["a" /* default */].findUser(params);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (UserService);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_userSchema__ = __webpack_require__(2);

class UserRepo {
  static async findUser(params) {
    let res = await __WEBPACK_IMPORTED_MODULE_0__model_userSchema__["default"].findOne(params);
    return res;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (UserRepo);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isExternal */
/* unused harmony export isPassword */
/* unused harmony export isNumber */
/* unused harmony export isName */
/* unused harmony export isIP */
/* unused harmony export isUrl */
/* unused harmony export isLowerCase */
/* unused harmony export isUpperCase */
/* unused harmony export isAlphabets */
/* unused harmony export isString */
/* unused harmony export isArray */
/* unused harmony export isPort */
/* harmony export (immutable) */ __webpack_exports__["b"] = isPhone;
/* unused harmony export isIdCard */
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmail;
/* unused harmony export isChina */
/* unused harmony export isBlank */
/* unused harmony export isTel */
/* unused harmony export isNum */
/* unused harmony export isJson */
/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
function isExternal(path) {
  return (/^(https?:|mailto:|tel:)/.test(path)
  );
}

/**
 * @description 校验密码是否小于6位
 * @param value
 * @returns {boolean}
 */
function isPassword(rule, value, callback) {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error('密码长度至少为6位'));
  }
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
function isName(value) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
function isIP(ip) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(ip);
}

/**
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
function isUrl(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

/**
 * @description 判断是否是小写字母
 * @param value
 * @returns {boolean}
 */
function isLowerCase(value) {
  const reg = /^[a-z]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否是大写字母
 * @param value
 * @returns {boolean}
 */
function isUpperCase(value) {
  const reg = /^[A-Z]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否是大写字母开头
 * @param value
 * @returns {boolean}
 */
function isAlphabets(value) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * @description 判断是否是数组
 * @param arg
 */
function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * @description 判断是否是端口号
 * @param value
 * @returns {boolean}
 */
function isPort(value) {
  const reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
  return reg.test(value);
}

/**
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
function isPhone(rule, value) {
  const reg = /^1\d{10}$/;
  return reg.test(value);
}

/**
 * @description 判断是否是身份证号(第二代)
 * @param value
 * @returns {boolean}
 */
function isIdCard(value) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
}

/**
 * @description 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
function isEmail(rule, value, callback) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!reg.test(value)) {
    callback(new Error('请输入正确的邮箱格式'));
  } else {
    callback();
  }
}

/**
 * @description 判断是否中文
 * @param value
 * @returns {boolean}
 */
function isChina(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(value);
}

/**
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
function isBlank(value) {
  return value == null || false || value === '' || value.trim() === '' || value.toLocaleLowerCase().trim() === 'null';
}

/**
 * @description 判断是否为固话
 * @param value
 * @returns {boolean}
 */
function isTel(value) {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/;
  return reg.test(value);
}

/**
 * @description 判断是否为数字且最多两位小数
 * @param value
 * @returns {boolean}
 */
function isNum(value) {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(value);
}

/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
function isJson(value) {
  if (typeof value == 'string') {
    try {
      const obj = JSON.parse(value);
      return !!(typeof obj == 'object' && obj);
    } catch (e) {
      return false;
    }
  }
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_log4__ = __webpack_require__(20);

const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001,
  USER_ACCOUNT_ERROR: 20001,
  USER_LOGIN_ERROR: 30001,
  BUSSINESS_ERROR: 40001,
  AUTH_ERROR: 50001
};

const paper = (pageNumber = 1, pageSize = 10) => {
  pageNumber *= 1;
  pageSize *= 1;
  const skipIndex = (pageNumber - 1) * pageSize;
  return {
    page: {
      pageNumber,
      pageSize
    },
    skipIndex
  };
};

const success = (msg = '', data = '', code = CODE.SUCCESS) => {
  __WEBPACK_IMPORTED_MODULE_0__utils_log4__["a" /* default */].info(data);
  return {
    code, data, msg
  };
};

const fail = (msg = '', data = '', code = CODE.BUSSINESS_ERROR) => {
  __WEBPACK_IMPORTED_MODULE_0__utils_log4__["a" /* default */].info(msg);
  return {
    code, data, msg
  };
};

/* harmony default export */ __webpack_exports__["a"] = ({
  paper, success, fail
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_log4js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_log4js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_log4js__);
/**
 * 日志存储
 */


const levels = {
    'trace': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.TRACE,
    'debug': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.DEBUG,
    'info': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.INFO,
    'warn': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.WARN,
    'error': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.ERROR,
    'fatal': __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.levels.FATAL
};

__WEBPACK_IMPORTED_MODULE_0_log4js___default.a.configure({
    appenders: {
        console: { type: 'console' },
        info: { type: 'file', filename: 'logs/all-logs.log' },
        error: {
            type: 'dataFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'debug' },
        error: {
            appenders: ['console'], level: 'error'
        }
    }
});

/**
 * debug信息的日志输出,debug级别
 * @param {string} content
 */
const debug = content => {
    let logger = __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.getLogger();
    logger.level = levels.debug;
    logger.debug(content);
};

/**
 * debug信息的日志输出,error级别
 * @param {string} content
 */
const error = content => {
    let logger = __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.getLogger();
    logger.level = levels.error;
    logger.error(content);
};

/**
 * debug信息的日志输出,info级别
 * @param {string} content
 */
const info = content => {
    let logger = __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.getLogger();
    logger.level = levels.info;
    logger.info(content);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    debug, error, info
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./userSchema.js": 2
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 23;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  plugins: ['~plugins/antd.js', '~plugins/request.js', '~plugins/autoload.js', { src: '~plugins/form-create.js', ssr: false }, { src: '~plugins/lodash.js', ssr: false }],

  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
      if (ctx.Client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map