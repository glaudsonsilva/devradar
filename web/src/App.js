import React, { useState } from "react";

import "./global.css";
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong >Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="githug_username">Usuário do Github</label>
            <input name="githug_username" id="username_github" required />
          </div>
         
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required /> 
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitudetechs" required /> 
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required /> 
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
