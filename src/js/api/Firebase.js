import firebase from 'firebase'

export default {
    FBLogin: function () {
        var provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    },
    FBLogout: function () {
        return firebase.auth().signOut()
    }
}
