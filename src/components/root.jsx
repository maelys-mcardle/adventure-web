import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navbar.jsx';

ReactDOM.render(
  <div>
    <NavigationBar title="Adventure" />

    <div class="container">
        
    <div class="card top-spacer">
        <div class="card-body">

          This is some text within a card body.

          <div class="form-inline">
            <div class="form-group">
              <label for="inputPassword2" class="sr-only">Password</label>
              <input type="text" class="form-control" id="inputPassword2" 
                placeholder="Say what happens next!"></input>
            </div>
            <button type="submit" class="btn btn-primary">Do it</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>,
  document.getElementById('root')
);