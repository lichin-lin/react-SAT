import firebase from 'firebase'

export default {
    FBLogin: function (data) {
        console.log('login...', data)
        var provider = new firebase.auth.FacebookAuthProvider()
        // return firebase.auth().signInWithPopup(provider)
        return firebase.auth().signInWithPopup(provider).then(function (result) {
            return firebase.auth().currentUser
        }).catch(function (error) {
            return {
                errorCode: error.code,
                errorMessage: error.message
            }
        })
    },
    FBLogout: function (data) {
        return firebase.auth().signOut()
    },
    getUserData: function () {
        var userId = firebase.auth().currentUser.uid
        // let initData = ''
        return firebase.database().ref('/users/' + userId)
        // .on('value', function (snapshot) {
        //     initData = snapshot.val().init
        //     return initData
        // })
    },
    isUserLogin: function () {
        var user = firebase.auth().currentUser
        if (user) {
            console.log('current user: ', user)
        } else {
            console.log('no current user')
        }
        return user
    },
    updateUserScore: function () {
        var userId = firebase.auth().currentUser.uid
        console.log(userId)
        // firebase.database().ref('users/' + userId).set({
        //     test: '2'
        // })
        return 0
    }
}
