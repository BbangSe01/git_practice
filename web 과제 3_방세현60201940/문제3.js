function updateUserProfile(a, b) {
    let c = {
        ...a,
        ...b
    }

    return c
}


const userProfile = { name: 'Sara', age: 25, profession: 'Engineer' };
const updates = { age: 28, city: 'Berlin' };
console.log(updateUserProfile(userProfile, updates));