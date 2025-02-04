import {v4 as uuidv4} from "https://jspm.dev/uuid"

export const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
        uuid: "19434e92-6050-4e2f-935b-16249a3bf450"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
        uuid: "2b8324b9-d638-48ea-9591-3d247f73edbc"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
        uuid: "242eb136-9294-447f-91e7-bc5ca127b9f8"
    }
]


// Generate UUIDs
function generateUuid(number) {
    const uuids = []
    for (let i = 0; i < number; i++) {
        uuids.push(uuidv4())
    }
    return uuids
}

// console.log(generateUuid(3))

// Output
// [
//     "19434e92-6050-4e2f-935b-16249a3bf450",
//     "2b8324b9-d638-48ea-9591-3d247f73edbc",
//     "242eb136-9294-447f-91e7-bc5ca127b9f8"
// ]