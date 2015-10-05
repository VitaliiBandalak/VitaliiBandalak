/**
 * Created by Vitalii on 05.10.2015.
 */

var User_login = prompt('Enter your login..');
    if (User_login==='admin') {
        var User_Password = prompt('Enter your password..');
        if (User_Password === 'passw0rd') {
            alert('Welcome home!');
        } else if (User_Password == null) {
            alert('Canceled');
        } else {
            alert('Wrong password');
        }
    } else if (User_login == null) {
        alert('Canceled');
    } else {
    alert('Access denied');
    }



