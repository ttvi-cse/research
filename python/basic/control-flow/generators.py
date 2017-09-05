## When to use yield instead of return in Python
def simpleGeneratorFun():
	yield 1
	yield 2
	yield 3

for value in simpleGeneratorFun():
	print(value)

# we should use yield when we want to iterate over a
# sequence, but don't want to store the entire sequence 
# in memory

def nextSquaree():
	i = 1
	while True:
		yield i*i
		i += 1

for num in nextSquaree():
	if num > 100:
		break
	print num



## Generator - Function:
## Generator - Object 
# Generator functions return a generator object.
def simpleGeneratorFunc():
	yield 1
	yield 2
	yield 3
x = simpleGeneratorFun() # return an interator

print x.next()
print x.next()
print x.next()

# generator for Fibonacci Numbers

def fib(limit):
	a, b = 0, 1
	while a < limit:
		yield a, b = b, a + b

x = fib(5)

print x.next()
print x.next()
print x.next()
print x.next()
print x.next()

print ("\nUsing for in loop")
for i in fib(5):
	print i