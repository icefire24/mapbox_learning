import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.vue");/* unplugin-vue-components disabled */import { defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=32b27778";
import __vite__cjsImport1_mqtt from "/node_modules/.vite/deps/mqtt.js?v=c692b022"; const mqtt = __vite__cjsImport1_mqtt;

import { onMounted } from '/node_modules/.vite/deps/vue.js?v=32b27778';
const _sfc_main = _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    onMounted(() => {
      const connectUrl = `mqtt://192.168.1.8:1883`;
      let client = mqtt.connect(connectUrl, {
        clean: true,
        connectTimeout: 4e3,
        reconnectPeriod: 1e3,
        clientId: "default&bim12345&bed8614e4b6048d3a72e9081494a2388&1"
      });
      client.on("connect", () => {
        console.log("\u5DF2\u7ECF\u8FDE\u63A5\u6210\u529F");
      });
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/node_modules/.vite/deps/vue.js?v=32b27778";
const _hoisted_1 = /* @__PURE__ */ _createElementVNode("h1", null, "hello world", -1);
const _hoisted_2 = /* @__PURE__ */ _createElementVNode("audio", {
  src: "",
  id: "audioTest",
  controls: "",
  preload: "none",
  style: { "display": "none" }
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64);
}
_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod)
    return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86354/Desktop/mydemo/vitedemo/src/App.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0E7QUFDRTtBQUVBO0FBQXNDO0FBQzdCO0FBQ1M7QUFDQztBQUNQO0FBRVo7QUFDRTtBQUFvQjtBQUVyQjs7Ozs7Ozs7O0FBTWtGO0FBQXhFO0FBQU07QUFBWTtBQUFpQjs7Ozs7QUFEOUM7QUFDQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOi9Vc2Vycy84NjM1NC9EZXNrdG9wL215ZGVtby92aXRlZGVtby9zcmMvQXBwLnZ1ZSJdLCJmaWxlIjoiQzovVXNlcnMvODYzNTQvRGVza3RvcC9teWRlbW8vdml0ZWRlbW8vc3JjL0FwcC52dWUiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgKiBhcyBtcXR0IGZyb20gJ21xdHQnXHJcbm9uTW91bnRlZCgoKSA9PiB7XHJcbiAgY29uc3QgY29ubmVjdFVybCA9IGBtcXR0Oi8vMTkyLjE2OC4xLjg6MTg4M2BcclxuXHJcbiAgbGV0IGNsaWVudCA9IG1xdHQuY29ubmVjdChjb25uZWN0VXJsLCB7XHJcbiAgICBjbGVhbjogdHJ1ZSxcclxuICAgIGNvbm5lY3RUaW1lb3V0OiA0MDAwLFxyXG4gICAgcmVjb25uZWN0UGVyaW9kOiAxMDAwLFxyXG4gICAgY2xpZW50SWQ6ICdkZWZhdWx0JmJpbTEyMzQ1JmJlZDg2MTRlNGI2MDQ4ZDNhNzJlOTA4MTQ5NGEyMzg4JjEnXHJcbiAgfSlcclxuICBjbGllbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygn5bey57uP6L+e5o6l5oiQ5YqfJylcclxuICAgIC8vIOi/memHjOWPr+S7peiuoumYheWkmuS4quS4u+mimFxyXG4gIH0pXHJcbn0pXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxoMT5oZWxsbyB3b3JsZDwvaDE+XHJcbiAgPGF1ZGlvIHNyYz1cIlwiIGlkPVwiYXVkaW9UZXN0XCIgY29udHJvbHMgcHJlbG9hZD1cIm5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2F1ZGlvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxyXG4iXX0=