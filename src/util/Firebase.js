const firebase = require('firebase');
require('firebase/firestore')

export class Firebase {

    constructor(){

        this._config = {

                //////////firebase////////////

        };

        this.init();

    }

    init(){

        if (!this._initialized){
            firebase.initialize(this._config);

            firebase.firestore().settings({
                timestampInSnapshot: true

        });
            this._initialized = true;
            
        }
    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }

}