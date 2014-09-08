While both arrays and hashes can be used to store values, hashes are bit rigid in the terms of indexing, that is it is structured in a way to have a ordered list, each value in a hash has to have a corresponding key to it, and in a hash a key cannot be repeated.

Where as if you take a look at Arrays they are basically values which you can return using a index value, and each value in an array would have a index value corresponding to it. But one can easily change the values order and its corresponding index value would change too.

In a ruby hash one can sort the hash either by a key or value, versus in an array it will sort by the data it holds.

Example a simple Hash would look like something like this

		hash = { 0 => “A”, 1 => “B”, 2 => “C”, 3 => “D”, 4 => “E”, 5 => “F”, 6 => “G” }


and one can retrieve the keys and values either by using the hash.keys and hash.values methods or the values by using the hash[key] notation or also by using the .each method and retrieving either the key, value or both.

Here is simple Array

		array = [0,1,2,3,'a','b','c']

One can retrieve the values by using the array.index_at or by simply using array[index_number] notation.