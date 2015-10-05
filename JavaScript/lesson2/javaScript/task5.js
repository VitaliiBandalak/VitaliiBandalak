
var name = 'admin', text;

text = (name==='admin') ? 'hi' :
    (name=='manager')? 'hello' :
        (name=' ') ? 'No login':
'';

alert (text);