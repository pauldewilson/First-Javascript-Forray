console.log(make_times_table(make_matrix(15)))

function make_times_table(matrix){
	
	// Amends a matrix to a times-table array 

    // for each row in the matrix, start at 1 since row 0 is the top (calculation) row
    for (var row=1; row < matrix.length; row++){
        // for each cell in the row, start at 1 since first cell of row is calculation cell
        for (var cell=1; cell < matrix[row].length; cell++){
            // each row,cell = matrix[row][0] (leftmost column) * matrix[0][cell] (uppermost row)
            matrix[row][cell] = matrix[row][0] * matrix[0][cell]
        }
    }
    return matrix
}


function make_matrix(size=5){

    // returns a matrix of arrays default 5x5

    let list_matrixes = []

    for (var i=0; i < size; i++){
        if (i == 0){
            list_matrixes[i] = make_array(size);
        }
        else{
            list_matrixes[i] = make_zeros_array(size)
            list_matrixes[i][0] = list_matrixes[0][i]
        }
    }
    return list_matrixes
}

function make_zeros_array(arr_len){

    // returns an array of zeros

    let arr = []

    switch(typeof arr_len === 'number'){
        case false:
            console.log("ERR ZEROS ARRAY: A number wasn't passed, exiting");
            return 0;
        case true:
            for (var i=0; i < arr_len; i++){
                arr.push(0);
        }   return arr; 
    }
}

function make_array(arr_len){
    
    // returns array of numbers 0 to arr_len
    
    let arr = []
    
	switch(typeof arr_len === 'number'){
        case false:
            console.log("ERR NUMERICAL ARRAY: A number wasn't passed, exiting");
            return 0;
        case true:
            for (var i=0; i < arr_len; i++){
                arr.push(i);
        }   return arr; 
    }
}
