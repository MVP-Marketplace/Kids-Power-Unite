console.log(firebase)
const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut'); 

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true; 
        whenSignedOut.hidden = false;
        userDetails.innerHTML = ''; 
    }
});

const db = firebase.firestore(); 

const createRecipient = document.getElementById('createRecipient');
const recipientList = document.getElementById('recipientList');
const age = document.getElementById('age');
const bio = document.getElementById('bio');
const gender = document.getElementById('gender');
const nickname = document.getElementById('nickname');
const permission = document.getElementById('permission');
const reason = document.getElementById('reason');
const wishlist = document.getElementById('wishlist');

let recipientRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

    if (user) {
        recipientRef = db.collection('recipient')

        createRecipient.onclick = () => {
            const { serverTimestamp } = firebase.firestore.FieldValue;

            recipientRef.add({
                professionalid: user.uid,
                age: age.value,
                bio: bio.value,
                gender: gender.value,
                nickname: nickname.value,
                permission: permission.value,
                reason: reason.value,
                wishlist: wishlist.value,
                createdAt: serverTimestamp()
            });
        }

        unsubscribe = recipientRef
        .onSnapshot(querySnapshot => {
            const recipient = querySnapshot.docs.map(doc => {
                return `<li>${ doc.data().nickname }</li>`

            });

            recipientList.innerHTML = recipient.join(' ');
        });
    }
});