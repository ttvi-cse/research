import timeit
mysetup = "from math import sqrt"

mycode = '''
def example():
	mylist = []
	for x in range(100):
		mylist.append(sqrt(x))
'''

# timeit statemnet
print timeit.timeit(setup = mysetup, stmt = mycode, number = 10000)

### binary sear and linear search ###
import timeit

def binary_search(mylist, find):
	while len(mylist) > 0:
		mid = (len(mylist))//2
		if mylist[mid] == find:
			return True
		elif mylist[mid] < find:
			mylist = mylist[:mid]
		else:
			mylist = mylist[mid + 1:]
	return False

def linear_search(mylist, find):
	for x in mylist:
		if x == find:
			return True
	return False

def binary_time():
	SETUP_CODE = '''
from __main__ import binary_search
from random import randint '''

	TEST_CODE = '''
mylist = [x for x in range(10000)]
find = randint(0, len(mylist))
binary_search(mylist, find)'''
	
	# timeit.repeat statement
	times = timeit.repeat(setup = SETUP_CODE,
							stmt = TEST_CODE, 
							repeat = 3,
							number = 10000)

	# print minimum exec. time
	print('Binary search time: {}'.format(min(times)))


# compute linear search time
def linear_time():
	SETUP_CODE = '''
from __main__ import linear_search
from random import randint'''

	TEST_CODE = '''
mylist = [x for x in range(100000)]
find = randint(0, len(mylist))
linear_search(mylist, find)
'''
	# timeit.repeat statement
	times = timeit.repeat(setup = SETUP_CODE,
						stmt = TEST_CODE,
						repeat = 3,
						number = 100000)
	print ('Linear search time: {}'.format(min(times)))

if __name__ == '__main__':
	linear_time()
	binary_time()