const TestReact = (() => {
    let currentStateKey = 0; 
    const states = [];
  
    const useState = (initialValue) => {
        const key = currentStateKey;
        
        if (states.length === key) {
          states.push(initialValue);
        }
    
        const state = states[key];
        const setState = (newState) => {
            states[key] = newState;
            //render();
        }
  
        currentStateKey += 1;
        return [ state, setState ];
  
    };
  
    return { useState };
})();