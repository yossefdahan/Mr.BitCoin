import { dbService } from "./db.service";
import { utilService } from "./util.service";
const KEY = 'contacts';

export const contactService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
    getDefaultFilter
};

async function query(filterBy = null) {
    let contacts = await dbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = await _createDefaultContacts();
        await dbService.insert(KEY, contacts);
    }
    if (filterBy) {
        contacts = _filter(contacts, filterBy);
    }
    return sort(contacts);
}

async function get(id) {
    return await dbService.get(KEY, id);
}

function getDefaultFilter() {
    return { name: '', email: '', phone: '' }
}

async function remove(id) {
    return await dbService.remove(KEY, id);
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact);
    else return await dbService.post(KEY, contact);
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    };
}

function _filter(contacts, filterBy) {
    const { name, email, phone } = filterBy;

    return contacts.filter(contact => {
        return (
            (!name || contact.name.toLowerCase().includes(name.toLowerCase())) &&
            (!email || contact.email.toLowerCase().includes(email.toLowerCase())) &&
            (!phone || contact.phone.toLowerCase().includes(phone.toLowerCase()))
        );
    });
}

function sort(arr) {
    return arr.sort((a, b) => {
        return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
    });
}


async function _createDefaultContacts() {
    const contacts = [
        {
            "_id": utilService.makeId(5),
            "name": "Ochoa Hyde",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 593-3824"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Hallie Mclean",
            "email": "halliemclean@renovize.com",
            "phone": "+1 (948) 464-2888"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Parsons Norris",
            "email": "parsonsnorris@renovize.com",
            "phone": "+1 (958) 502-3495"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Rachel Lowe",
            "email": "rachellowe@renovize.com",
            "phone": "+1 (911) 475-2312"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Dominique Soto",
            "email": "dominiquesoto@renovize.com",
            "phone": "+1 (807) 551-3258"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Shana Pope",
            "email": "shanapope@renovize.com",
            "phone": "+1 (970) 527-3082"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Faulkner Flores",
            "email": "faulknerflores@renovize.com",
            "phone": "+1 (952) 501-2678"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Holder Bean",
            "email": "holderbean@renovize.com",
            "phone": "+1 (989) 503-2663"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Rosanne Shelton",
            "email": "rosanneshelton@renovize.com",
            "phone": "+1 (968) 454-3851"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Pamela Nolan",
            "email": "pamelanolan@renovize.com",
            "phone": "+1 (986) 545-2166"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Roy Cantu",
            "email": "roycantu@renovize.com",
            "phone": "+1 (929) 571-2295"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Ollie Christian",
            "email": "olliechristian@renovize.com",
            "phone": "+1 (977) 419-3550"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Nguyen Walls",
            "email": "nguyenwalls@renovize.com",
            "phone": "+1 (963) 471-3181"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Glenna Santana",
            "email": "glennasantana@renovize.com",
            "phone": "+1 (860) 467-2376"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Malone Clark",
            "email": "maloneclark@renovize.com",
            "phone": "+1 (818) 565-2557"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Floyd Rutledge",
            "email": "floydrutledge@renovize.com",
            "phone": "+1 (807) 597-3629"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Grace James",
            "email": "gracejames@renovize.com",
            "phone": "+1 (959) 525-2529"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Tanner Gates",
            "email": "tannergates@renovize.com",
            "phone": "+1 (978) 591-2291"
        },
        {
            "_id": utilService.makeId(5),
            "name": "Lilly Conner",
            "email": "lillyconner@renovize.com",
            "phone": "+1 (842) 587-3812"
        }
    ];
    return contacts
}