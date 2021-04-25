import React from 'react';

const Spinner=(props)=>{
    return(
  <div class="ui active dimmer">
    <div class="ui big text loader">{props.errorMessage}</div>
  </div>


    )
}

Spinner.defaultProps={
    errorMessage:"Loading..."
};

export default Spinner;