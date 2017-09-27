const composeHoC = (component) => ({ 
  compose(HoCLibrary){
    return composeHoC(HoCLibrary(component)) 
  },
  export(){
    return component;
  },
})
