import firebase from 'firebase'
// import ApiFetch from './Base'
// import urlJoin from 'url-join'

export default {
    FBLogin: function (data) {
        var provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    },
    FBLogout: function (data) {
        return firebase.auth().signOut()
    },
    getUserData: function () {
        var userId = firebase.auth().currentUser.uid
        // let initData = ''
        console.log(userId)
        return firebase.database().ref('/users/' + userId)
        // .on('value', function (snapshot) {
        //     initData = snapshot.val().init
        //     return initData
        // })
    },
    getYearData: function (year) {
        var promise = new Promise(function (resolve, reject) {
            let a = 1
            if (a === 1) {
                resolve('Stuff worked!')
                firebase.database().ref('/table/SAT' + (1911 + year)).on('value', function (snapshot) {
                    return snapshot.val()
                })
            } else {
                reject(Error('It broke'))
            }
        })
        promise.then(function (result) {
            console.log(result) // "Stuff worked!"
        }, function (err) {
            console.log(err) // Error: "It broke"
        })
    }
    /*
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
    */
}
