    let food = ["gà","cá","tôm","cua","lợn","bò","vịt","cà chua","cà rốt","quasoo"]
    let foodLenght = food.length
    console.log(foodLenght);
    food[foodLenght-1] = "sì pa ghét ti"
    console.log(food[foodLenght-1]);
    if(foodLenght<10){
        alert("số lượng món ăn không đủ");
    } else if(foodLenght>=10){
        alert("Số lượng món ăn đã đủ")
    }
    
    