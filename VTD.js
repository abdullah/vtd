;(function () {

    var VDT = {}
   

    VDT.install = function (Vue,config) {
    	
  	}


  if (typeof exports == "object") {
    
    module.exports = {VDT}
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return {VDT}
    })
  } else if (window.Vue) {
    
    window.VDT = VDT

    Vue.use(VDT)
  }

})()


