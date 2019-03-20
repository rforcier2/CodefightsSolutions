/*
Note: Try to solve this task in-place (with O(1) additional memory),
 since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image.
Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

rotateImage = a => {
        let n = a.length;

        for(let i=0; i < n/2; i++){
            for (let j = i; j < n-i-1; j++){
                let temp = a[i][j];

                a[i][j] = a[n-j-1][i];
                a[n-j-1][i] = a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1] = temp;
            }
        }return a;
    }
