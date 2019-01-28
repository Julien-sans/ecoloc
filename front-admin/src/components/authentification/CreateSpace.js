import React, { Component } from 'react';


class CreateSpace extends Component {

    render() {
        return (
            <div>
                <h1>Ecolo'Occ</h1>
                <h2>Je crée mon compte</h2>
                <form>
                    <div>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Nom de l'association"></input>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description de l'association"></input>
                    </div>

                    <button type="submit" class="btn btn-primary">Valider</button>
                </form>
            </div>
        );
    }
}

export default CreateSpace;