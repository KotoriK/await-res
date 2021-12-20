exports.awaitImage=function(e){return new Promise(function(n,t){e.complete?n():(e.addEventListener("load",n),e.addEventListener("error",t))})};
//# sourceMappingURL=await-res.js.map
