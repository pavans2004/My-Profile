
function result () {
    var name = document.getElementById("name":);
    var result = document.getElementById("result":);
    var marks = Math.random()*100;

    if(marks >= 35) {
        result.innerHTML = name +" "+ "is pass"+marks.toFixed(2);
    }else{
        result.innerHTML = name +" "+ "is fail " +marks.toFixed(2);
    }
    
}