m = [[1,2],[3,4],[5,6]]
for row in m :
	print row
rez = [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]
print "\n"
for row in rez:
	print row

matrix = [(1,2,3),(4,5,6),(7,8,9),(10,11,12)];
for row in matrix:
	print row
print("\n")
t_matrix = zip(*matrix)
for row in t_matrix:
	print row

# import numpy

# matrix = [[1,2,3],[4,5,6]]
# print matrix
# print "\n"
# print numpy.transpose(matrix)

# Global and Local Variables in Python
## Global variables are the one that are defined and declared outside a function and we need to use
## them inside a function.

# def f():
# 	print s

# s = "I love programming"
# f();

## If a variable with same name is defined inside the scope of functioon as well
## then it will print the value given inside the function only and not the global
## value.

# This is a funciton has a vatiable with
# name same as s.
def f():
	s = "Me too."
	print s
# Global scope
s = "I love programming"
f()
print s


def f():
	print s
	# This program will NOT show error
	# if we comment below line.
	s = "Me too."

	print s

# Global scope
s = "I love Geeksforgeeks"
f();
print s


# This function modifies global variable 's'
def f():
	global s
	print s
	s = "Look for Geeksforgeeks Python Section"
	print s
# Global Scope
s = "Python is greate!"
f()
print s



a = 1

# Uses global because there is no local 'a'
def f():
	print: 'Inside f() : ', a
# Variable 'a' is redefined as a local
def g():
	a = 2
	print 'Inside g(): ', a

# Uses global keyword to modify global 'a'
def h():
	global a
	a = 3
	print 'Inside h() : ', a

# Global scope
print 'global : ', a
f()
print 'global : ', a
g()
print 'global: ', a
h()
print 'global : ', a