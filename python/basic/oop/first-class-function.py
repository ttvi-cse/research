# first class functions:
## A function is an instance of the Object type.
## You can store the function in a variable.
## You can pass the function as a parameter to another function.
## You cn return the function from a function.
## You can store them in data structure such as hash tables, lits, ...


# 1.
def shout(text):
	return text.upper()

print shout('Helllo')

yell = shout

print yell('Hello')

# 2.
def whisper(text):
	return text.lower()
def greet(func):
	greeting = func("Hi, I am created by a function passed as an argument")
	print greeting

greet(shout)
greet(whisper)

# 3.
def create_adder(x):
	def adder(y):
		return x + y
	return adder
add_15 = create_adder(15)
print add_15(10)