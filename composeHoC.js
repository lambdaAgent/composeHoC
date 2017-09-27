function ComposeHoC(component){
  return {
    compose: function(HoCLibrary){
      return ComposeHoC(HoCLibrary(component))
    },
    export: function(){
      return component
    }
  }
}

module.export = ComposeHoC