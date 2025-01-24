
function Solve(val) {
    var v = document.getElementById('ans');
    v.value += val;
}

function Result() {
    var v1 = document.getElementById('ans').value;
    try {
        var v2 = eval(v1);
        document.getElementById('ans').value = v2;
    } catch (e) {
        document.getElementById('ans').value = 'Error';
    }
}

function Clear() {
    var input = document.getElementById('ans');
    input.value = '';
}

function Back() {
    var back = document.getElementById('ans');
    back.value = back.value.slice(0, -1);
}
