function login() {
    var p = 'kiarash@.admin^a1^<13"87">';
    var s = prompt('رمز عبور خود را وارد کنید');
    if (s == p) {
        alert('درست')
    }else {
        window.close()
    }
}