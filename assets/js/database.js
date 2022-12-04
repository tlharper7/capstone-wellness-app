import { openDB } from 'idb';
// import { profileObj, profileDataList } from './profile'
export let profileDataList = new Map(); 
export class Profile {
    plotProfile = () => {
        console.log("plotProfile");
    }
};

function showProfileList() {
    profileDataList.clear();
    getData();
}

 export const profileObj = new Profile();

let db;
let emaiID;
if ('indexedDB' in window) {
    db = await openDB('wellnote-app-database', 1, {
        upgrade(db) {
            db.createObjectStore('profiles');
        },
    });
}
export function setEmailId(_email){
    emaiID = _email; 
}
export function getEmailId(){ 
    return emaiID;
}


export async function addData(data) {
    try {
        let _emailID = data.emailID;
        // let oldData = await getProfileDataById(_emailID);
        // console.log("oldData : "+ JSON.stringify(oldData));

        await (db.put('profiles', data, _emailID));

    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}
export async function getProfileDataById(id) {
    let data;
    try {
        data = await (db.get('profiles', id));
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
    return data;
}

export async function getDataById(id) {
    let _emailID = "";
    try {
        let plotty = await (db.get('profiles', id));
        _emailID = plotty.emailID;
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }

    if (id == _emailID) {
        return true;
    } else {
        return false;
    }
}

export async function getData() {
    profileObj.plotProfile();
}

export async function deleteDataById(id) {
    try {
        await (db.delete('profiles', id));
        var _emailID = id;
        profileDataList.delete(_emailID);
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
    if (profileDataList.get(_emailID)) {
        return false;
    } else {
        return true;
    }
}