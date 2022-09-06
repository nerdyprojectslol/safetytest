function Prof(username, password) {
    this.User = username;
    this.Pass = password;
}

const UserPass1 = new Prof('Wright', 'MainPass1');
console.log(UserPass1.username);