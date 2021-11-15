export default class User {
    constructor(user) {
        if (!user) {
            return null;
        }
        this.uid = user.uid;
    }
}