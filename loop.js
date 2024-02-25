// for loop

// for(let i=1;i<=5;i++){
//     let row = ""
//     for(let j=1;j<=i;j++){
//        row +=  " * "
     
//     }
//     console.log(row)
// }
// for(let i=1;i<=4;i++){
//     let col = ""
//     for(let j=4;j>=i;j--){
//        col +=  " * "
     
//     }
//     console.log(col)
// }

// function printRightAngleTriangle(r){
//     for(let i=1; i<=r;i++){
//         row = ""
//         for(let j=1;j<=i;j++){
//             row += " * "
//         }
//         console.log(row)
//     }
    
// }

// printRightAngleTriangle(5)

outer : for(let i = 1; i<= 3;i++){
    for(let j=1;j<=3;j++){
        if(i>2) break outer
        console.log(i , j)
    }
console.log(i)
}



























