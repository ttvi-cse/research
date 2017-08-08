a = [1,2,3]
try:
	print "Second element = %d" %(a[1])
	print "Fourth element = %d" %(a[3])
except IndexError:
	print "An error occured"

# multiple exception
try :
	a = 3
	if a < 4:
		b = a / (a+3)
	print "Value of b = ", b
except (ZeroDivisionError, NameError):
	print "\n Error Occured and Handled"

# else clause: -> finally

def AbyB(a, b):
	try:
		c = ((a+b) /(a-b))
	except ZeroDivisionError:
		print "a/b result in 0"
	else:
		print c
AbyB(2.0, 3.0)
AbyB(3.0, 3.0)

# Raising Exception:
try:
	raise NameError("Hi threr")
except NameError:
	print "An exception"
	raise # determine whether the exception was raised or not ??


### Base Exception ####

# 1. BaseException
# 2. Exception
# 3. ArithmeticError
## OverflowError
## ZeroDivisionError
## FloatingPointError

# 4. BufferError
# 5. LookupError
## KeyError
## IndexError


### Concrete exceptions

# 1. AssertionError
try:
	assert False
except AssertionError:
	print 'assertion error'

# 2. AttributeError
class Attributes(object):
	pass
object = Attributes()
print object.attribute

# 3. EOFError
while True:
	data = raw_input("Enter name: ")
	print "Hello ", data

# FloatingPointError
import math
print math.exp(1000)

# GeneratorExit
def my_generator():
	try:
		for i in range(5):
			print 'Yielding', i
			yield i
	except GeneratorExit:
		print 'Exiting early'
g = my_generator()
print g.next()
print g.next()
print g.next()
print g.next()
print g.next()
g.close()


# 6. ImportError
from exceptions import Userexception

# 7. ModuleNotFoundError

# 8. IndexError

# 9. KeyError
array = {'a':1, 'b':2}
print array['c']

# 10.KeyboardInterrupt
try:
    print 'Press Return or Ctrl-C:',
    ignored = raw_input()
except Exception, err:
    print 'Caught exception:', err
except KeyboardInterrupt, err:
    print 'Caught KeyboardInterrupt'
else:
    print 'No exception'

# 11. MemoryError
def fact(a):
	factors = []
	for i in range(1, a+1):
		if a%i == 0:
			factors.append(i)
	return factors

# NameError

# NotImplementedError

# OSError([arg])

# OverfowError

# RecursionError

# ReferenceError

# RuntimeError

# StopIteration

# SyntaxError

# SystemError

# SystemExit

# TypeError

# UnboundLocalError

# UnicodeError

# ValueError

# 27. ZeroDivisionError