!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).awaitRes={})}(this,function(e){e.awaitImage=function(e){return new Promise(function(n,t){e.complete?n():(e.addEventListener("load",n),e.addEventListener("error",t))})}});
//# sourceMappingURL=await-res.umd.js.map
