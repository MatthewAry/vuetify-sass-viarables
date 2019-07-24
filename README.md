# sass-variables

## Expect the following output during the dev server build process

```
 ERROR  Failed to compile with 1 errors12:37:09 PM     


 error  in ./src/components/HelloWorld.vue?vue&type=style&index=0&lang=scss&

Module build failed (from ./node_modules/sass-loader/lib/loader.js):

  color: #6bb91a;
 ^
      Expected ";".
    ╷
147 │ a {
    │   ^
    ╵
  stdin 147:3  root stylesheet
      in /sass-variables/src/components/HelloWorld.vue (line 147, column 3)

 @ ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&lang=scss& 4:14-488 14:3-18:5 15:22-496
 @ ./src/components/HelloWorld.vue?vue&type=style&index=0&lang=scss&
 @ ./src/components/HelloWorld.vue
 @ ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&
 @ ./src/views/Home.vue?vue&type=script&lang=js&
 @ ./src/views/Home.vue
 @ ./src/router.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://192.168.1.85:8081/sockjs-node (webpack)/hot/dev-server.js ./src/main.js
 ```
