# class, object and members

class Test:
	def fun(self):
		print 'Hello'

obj = Test()
obj.fun()

# self
## 1. Class methods must have an extra first parameter in method definition.
## We do not give a value for this parameter when we call the method
## Python provides it

## 2. If we have a method which takes no arguments, then we still have
## have one argument - the self. See fun() in above simple example.

## 3. This is similar to this pointer in C++ and this reference in Java

# __init__ method

class Person:
	def __init__(self, name):
		self.name = name

	def say_hi(self):
		print "Hello, my name is", self.name

p = Person("Shwetanshu")
p.say_hi()

# Class and Instance Variables (Or attributes)

## instance variables are variables whose value is assigned inside
## a constructor or method with self

## class variables are variables whose value is assigned in class

class CSStudent:
	stream = 'cse' # static variable
	def __init__(self, roll):
		self.roll = roll # instance variable

	def setAddress(self, address):
		self.address = address

	def getAddress(self):
		return self.address

a = CSStudent(101)
b = CSStudent(102)

print a.stream
print b.stream

print a.roll

print CSStudent.stream

a = CSStudent(101)
a.setAddress("Noida, UP")
print a.getAddress()

# define instance variables inside normal methods also


# Empty class
class Test:
	pass



######### data hiding and object printing ############

class MyClass:

	__hiddenVariable = 0 # private

	def add(self, increment):
		self.__hiddenVariable += increment
		print (self.__hiddenVariable)

myObject = MyClass()
myObject.add(2)
myObject.add(5)

# This line causes error
# print myObject.__hiddenVariable

# tricky access the value of hidden attribute:
class MyClass:
	__hiddenVariable = 10
myObject = MyClass()
print myObject._MyClass__hiddenVariable # Nothing in Pyhton is truly private; internally



### printing objects ####

class Test:
	def __init__(self, a, b):
		self.a = a
		self.b = b
	def __repr__(self): # what is method using for ?
		return "Test a:%s b: %s" % self.a, self.b
	def __str__(self):
		return "From str method of Test: a is %s,"\
			"b is %s" % (self.a, self.b)

t = Test(1234, 5678)
print t
# print ([t])


###### INHERITANCE, ISSUBCLASS AND SUPER ##############


class Person(object):
	def __init__(self, name):
		self.name = name
	def getName(self):
		return self.name
	def isEmployee(self):
		return False

class Employee(Person):
	def isEmployee(self):
		return True

emp = Person("Geek1")
print emp.getName(), emp.isEmployee()

emp = Employee("Geek2")
print emp.getName(), emp.isEmployee()


# check if a class is subclass of another

class Base(object):
	pass

class Derived(Base):
	pass

print issubclass(Derived, Base)
print issubclass(Base, Derived)

d = Derived()
b = Base()

print isinstance(b, Derived)
print isinstance(d, Base)


# Multiple Inheritance

class Base1(object):
	def __init__(self):
		self.str1 = "Geek1"
		print "Base1"

class Base2(object):
	def __init__(self):
		self.str2 = "Geek2"
		print "Base2"

class Derived(Base1, Base2):
	def __init__(self):
		Base1.__init__(self)
		Base2.__init__(self)
		print "Derived"

	def printStrs(self):
		print self.str1, self.str2

ob = Derived()
ob.printStrs()


###### How to access parent members in a subclass ######

# 1. Using Parent class name
class Base(object):
	def __init__(self, x):
		self.x = x
class Derived(Base):
	def __init__(self, x, y):
		Base.x = x
		self.y = y
	def printXY(self):
		print (Base.x, self.y)

d = Derived(10,20)
d.printXY()

# using super()
class Derived(Base):
	def __init__(self, x, y):
		super(Derived, self).__init__(x) # what the fuck is it?
		self.y = y
	def printXY(self):
		print (self.x, self.y)

d = Derived(10, 20)
d.printXY()