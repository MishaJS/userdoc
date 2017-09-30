var array,
len,
reversed,
i,
j;
array = [1, 2, 3, 4, 5];
reversed = [];
for (i = 0, len = array.length; i < len; i += 1) {
j = len ‐ i ‐ 1;
reversed.push(array[j]);
}