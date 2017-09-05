# Containers: tuple, list and dictionary. Others are included in Collections module
# counter is a subclass of dict. unordered collection
# syntax: class collections.Counter([iterable-or-mapping])

from collections import Counter

print Counter(['B','B','A','B','C','A','B','B','A','C'])

print Counter({'A':3, 'B':5, 'C':2})

# keyword arguments
print Counter(A=3, B=5, C=2)

# Updation

# coun = collections.Counter()
# coun = update(Data)

coun = Counter()

coun.update([1,2,3,1,2,1,1,2])
print(coun)

coun.update([1,2,4])
print(coun)



####### Accessing Counters #########
# Once initialized, counter are accessed just like dictionaries.
# Also, it does not raise the KeyValue error (if key is not present)
# instead the value's count is shown as 0

z = ['blue', 'red', 'blue', 'yellow', 'blue', 'red']
col_count = Counter(z)
print (col_count)

col = ['blue', 'red', 'yellow', 'green']

for color in col:
	print (color, col_count[color])

# elements()
# The elements() method returns an iterator that produces
# all of the items known to the Counter.
# Note: elements with count <= 0 are not included.

coun = Counter (a=1, b=2, c=3)
print coun
print list(coun.elements())

# most_common():
# most_common() is used to produce a sequence of the n most
# frequently encountered input values and their respective counts

coun = Counter(a=1, b=2, c=3, d=120, e=1, f=219)
for letter, count in coun.most_common(3)
	print ('%s, %d' % (letter, count))