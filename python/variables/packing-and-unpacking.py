# We can use * to unpack the list so that all elements of it can be
# passed as different parameters

def fun(a,b,c,d):
	print(a,b,c,d)
my_list = [1,2,3,4]
fun(1,2,3,4)
fun(*my_list)


# This function uses packing to sum
# unknown number of arguments
def mySum(*args):
	sum = 0
	for i in range(0, len(args)):
		sum = sum + args[i]
	return sum

print (mySum(1,2,3,4,5))
print (mySum(10,20))


def fun1(a,b,c):
	print (a,b,c)

# This is a example of PACKING. ALL arguments passed
# to fun2 are packed into tuple *args
def fun2(*args):
	# convert args tuple to a list so we can modify it
	args = list(args)

	#print args

	# modifying args
	args[0] = "geeksforgeeks"
	args[1] = 'awesome'

	fun1(*args)

fun2 ('Hello', 'beautiful', 'world!')


# A sample program to demonstrate unpacking of 
# dictionary items using **
def fun(a,b,c):
	print a
	print b
	print c
	print (a, b, c)

# A call with unpacking of dictionary
d = {'a': 2, 'b': 4, 'c': 10}
e = [1,2,3]
fun(*e) # unpack list
fun(**d) # unpack dictionary


# Packing of dictinoary items using **
def fun(**kwargs):
	# kwargs is a dict
	print(type(kwargs))

	# printing dictionary items
	for key in kwargs:
		print("%s = %s" % (key, kwargs[key]))

# Driver code
fun(name = "geeks", ID = "101", language = "Python")