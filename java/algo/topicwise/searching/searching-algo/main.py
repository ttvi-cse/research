# linear search
def search(arr, x):
	for i in range(len(arr)):
		if arr[i] == x:
			return i
	return -1

# binary search

def binary_search(arr, l, r, x):
	if r >= l:
		mid = l + (r - 1)/2
		if arr[mid] == x: return mid
		if arr[mid] > x: return binary_search(arr, l, mid - 1, x);

		return binary_search(arr, mid + 1, r, x)
	return -1

list = [2,3,4,10,40]
print binary_search(list, 0, len(list) - 1, 10)


# iteratice implementation

def binary_search_iterative(arr, l, r, x):
	while l <= r:
		m = l + (r - 1)/2
		if arr[m] == x:
			return m
		if arr[m] < x:
			l = m + 1
		else:
			r = m -1
	return -1

print binary_search_iterative(list, 0, len(list) - 1, 10)

# jump search

import math

def jump_search(arr, x, n):
	step = math.sqrt(n)

	prev = 0
	while (arr[int(min(step, n) - 1)] < x):
		prev = step
		step = math.sqrt(n)
		if prev >= n: return -1

	while arr[prev] < x:
		prev += 1
		if prev == min(step, n): return -1

	if arr[prev] == x: return prev

	return -1

arr = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610]
x  = 55
jump_search(arr, x, len(arr))


# interpolation-search