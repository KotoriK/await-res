var e="undefined"!=typeof HTMLImageElement&&"decode"in HTMLImageElement?function(e){return e.decode()}:function(e){return new Promise(function(n,t){e.complete?n():(e.addEventListener("load",function(){return n()},{once:!0}),e.addEventListener("error",t,{once:!0}))})};export{e as default};
//# sourceMappingURL=await-res.js.map
