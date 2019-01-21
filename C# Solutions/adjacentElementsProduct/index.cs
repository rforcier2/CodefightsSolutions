int adjacentElementsProduct(int[] inputArray) {
            int maxProduct;
            int answer = 0;
            int arrayLength = inputArray.Length-1;

            for (int i = 0; i < arrayLength; i++)
            {
                maxProduct = inputArray[i] * inputArray[i+1];

                if (i == 0)
                {
                    answer = maxProduct;
                }

                else if (maxProduct > answer)
                {
                    answer = maxProduct;
                }

            }
            return answer;
        }
