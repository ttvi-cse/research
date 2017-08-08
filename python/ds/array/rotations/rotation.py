def rotate(arr, d, n):
	tmp = arr[:d]
	arr = arr[d:]
	print arr

arr = [1,2,3,4,5,6,7]
rotate(arr, 2, len(arr))