import React from 'react';
import "./Filter.css"

class Filter extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title2">Que cherches-tu ?</h2>
                <form>
                    <fieldset>
                        <legend>I am:</legend>
                        <input type='checkbox' id='Femme'></input>
                        <label for='Femme'>Femme</label>
                        <input type='checkbox' id='Homme'></input>
                        <label for='Homme'>Homme</label>
                        <input type='checkbox' id='Autre'></input>
                        <label for='Autre'>Autre</label>
                    </fieldset>
                    <fieldset>
                        <legend>I want:</legend>
                        <input type='checkbox' id='Femme'></input>
                        <label for='Femme'>Femme</label>
                        <input type='checkbox' id='Homme'></input>
                        <label for='Homme'>Homme</label>
                        <input type='checkbox' id='Autre'></input>
                        <label for='Autre'>Autre</label>

                    </fieldset>


                    <label for='ports'>Choose port:</label>
                    <select name='port' id='ports'>
                        <option value=''>...</option>
                        <option value='Stapula'>Stapula</option>
                        <option value='Dorestad'>Dorestad</option>
                        <option value='Kattegat'>Kattegat</option>
                    </select>
                </form>
                <button>Find Love</button>
            </div>
        )
    }
}


export default Filter;