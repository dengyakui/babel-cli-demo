# babel-cli-demo
Demo to show how to use babel-cli within npm project
### 安装cli
#### 1.通过npm安装
```shell
npm install --save-dev babel-cli
```
#### 2.通过package.json安装
```diff
{
  "devDependencies": {
+      "babel-cli": "^6.0.0"
  }
}
```

### 安装babel提供的preset 和插件
```shell
npm install --save-dev babel-preset-env babel-preset-react babel-plugin-transform-class-properties bel-plugin-transform-object-rest-spread
```

### 创建配置文件.babelrc ,并配置presets 和 plugins
```json
 {
  "presets": [
    "env",
    "react"
  ],
  "plugins": [
    ["transform-class-properties", { "spec": true }],
    ["transform-object-rest-spread"]
  ]
}
```

### 编写测试脚本(test.js)
```js
const a = "111"
```
### 运行babel命令,进行编译
```shell
npx babel test.js -o output.js
```
